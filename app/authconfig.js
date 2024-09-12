export const authConfig = {
  providers: [], // Add your authentication providers here

  pages: {
    signIn: "/login",
  },

  jwt: {
    secret: process.env.JWT_SECRET, // Make sure this environment variable is set
  },

  callbacks: {
    async authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnSignInPage = request.nextUrl.pathname === "/login";

      if (isLoggedIn && isOnSignInPage) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      if (!isLoggedIn && !isOnSignInPage) {
        return Response.redirect(new URL("/login", request.nextUrl));
      }

      return true;
    },
  },

  // Add this option to trust the localhost during development
  trustHost: process.env.NODE_ENV === 'development' ? true : false,
  debug: process.env.NODE_ENV === 'production',
};
