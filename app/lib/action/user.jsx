
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "../prisma";
import bcrypt from "bcrypt";
import { signIn,signOut } from "../../auth";


export const addUser = async (formData) => {
   const { username, email, password, roleId } = Object.fromEntries(formData);
 
   try {
       // Vérifier si l'utilisateur existe déjà
       const existingUser = await prisma.user.findUnique({
           where: {
               email: email,
           },
       });

       if (existingUser) {
             return { message: "User already exists!" };
          }

          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);

       // Créer l'utilisateur
       const user = await prisma.user.create({
           data: {
               username,
               email,
               password: hashedPassword,
           },
       });

       // Associer l'utilisateur au rôle si roleId est fourni
       if (roleId) {
           await prisma.user.update({
               where: { id: user.id },
               data: {
                   roles: {
                       connect: { id: Number(roleId) },
                   },
               },
           });
       }

       // Répondre avec succès
       console.log("User created successfully!", user);
         return { message: "User created successfully!" , user: user};
   } catch (err) {
         console.error(err);
         return { message: "An error occurred!" };
   } finally {
       await prisma.$disconnect();
   }
};

// les authentifications
export const authenticate = async (prevState, formData) => {
   const { email, password } = Object.fromEntries(formData);
   console.log(email)
   console.log(password)
 
   try {
     const user = await signIn("credentials", { email, password });
     redirect("/");
     console.log(user);
     // Faire quelque chose avec l'utilisateur connecté
   } catch (err) {
     if (err.message.includes("CredentialsSignin")) {
       return "Wrong Credentials";
     }
     throw err;
   }
 };

 export const logout = async () => {
    await signOut();
    redirect("/login");

    // Faire quelque chose après la déconnexion
     }
     
   
export const updateUser = async (id, formData) => {
   const prisma = new PrismaClient();
   const { name, email, password, twoFactorAuthSecret, loginAttempts, blockedUntil, roleId } = formData;
   try {
      const user = await prisma.user.update({
         where: {
            id: Number(id),
         },
         data: {
            name,
            email,
            password,
            twoFactorAuthSecret,
            loginAttempts,
            blockedUntil,
            roleId,
         },
      });
      console.log("User updated successfully!", user);

      await prisma.$disconnect();
      redirect("/users");
      revalidatePath("/users");
   }    catch (err) {
        console.error(err);
        return { message: "An error occurred!" };
     }
        finally {
            await prisma.$disconnect();
        }
        };

export const deleteUser = async (id) => {
   const prisma = new PrismaClient();
    try {
       await prisma.user.delete({
          where: {
             id: Number(id),
          },
       });
       console.log("User deleted successfully!");
       await prisma.$disconnect();
       redirect("/users");
       revalidatePath("/users");
    }
    catch (err) {
       console.error(err);
       return { message: "An error occurred!" };
    }
    finally {
       await prisma.$disconnect();
    }
    };



