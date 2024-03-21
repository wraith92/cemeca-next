export const authConfig = {
  providers: [], // Ajoutez vos providers d'authentification ici
  
  pages: {
    signIn: "/login",
  },
  
  jwt: {
    secret: process.env.JWT_SECRET, // Assurez-vous que cette variable d'environnement est définie
  },

  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnHomePage = request.nextUrl.pathname === "/";
      if (isOnHomePage) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true;
    },
  },
};
