
export const authConfig = {
 
  providers:[],
  pages: {
    signIn: "/login",
  },
  jwt: {
    secret: process.env.JWT_SECRET, // Assurez-vous que cette variable d'environnement est définie
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true;
    },
  },
};