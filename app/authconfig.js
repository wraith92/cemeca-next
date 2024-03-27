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
      const isOnSignInPage = request.nextUrl.pathname === "/login";

      // Si l'utilisateur est connecté et qu'il est sur la page de connexion, redirigez-le vers la page d'accueil
      if (isLoggedIn && isOnSignInPage) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      // Sinon, autorisez l'accès à la page demandée
      return true;
    },
  },
};
