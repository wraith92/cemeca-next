import React from 'react';
import { DataTable } from "@/components/ui/custom/data-table";
import { getUsers } from "../../lib/data/user";



// Define the columns with specific type information
export const columns = [
   {
      header: "Name",
      accessorKey: "username",
   },
   {
      header: "Email",
      accessorKey: "email",
   },
   {
      header: "Role",
      accessorKey: "roleNames",// Maintenant synchrone et sans "use server"
   }
];

export const RecentUsers = async () => {
   const users = await getUsers();
   return <DataTable columns={columns} data={users} />;
}
