import { authConfig } from "./authconfig";

describe("authConfig", () => {
  it("should have an empty providers array", () => {
    expect(authConfig.providers).toEqual([]);
  });

  it("should have a signIn page set to '/login'", () => {
    expect(authConfig.pages.signIn).toBe("/login");
  });

  it("should have a jwt secret defined", () => {
    expect(authConfig.jwt.secret).toBeDefined();
  });

  describe("callbacks", () => {
    it("should have an authorized callback function", () => {
      expect(authConfig.callbacks.authorized).toBeInstanceOf(Function);
    });

    it("should return true when isLoggedIn is true and isOnHomePage is true", () => {
      const auth = { user: true };
      const request = { nextUrl: { pathname: "/" } };
      const result = authConfig.callbacks.authorized({ auth, request });
      expect(result).toBe(true);
    });

    it("should return false when isLoggedIn is false and isOnHomePage is true", () => {
      const auth = { user: false };
      const request = { nextUrl: { pathname: "/" } };
      const result = authConfig.callbacks.authorized({ auth, request });
      expect(result).toBe(false);
    });

    it("should return a redirect response when isLoggedIn is true and isOnHomePage is false", () => {
      const auth = { user: true };
      const request = { nextUrl: { pathname: "/about" } };
      const result = authConfig.callbacks.authorized({ auth, request });
      expect(result).toEqual(Response.redirect(new URL("/", request.nextUrl)));
    });

    it("should return true when isLoggedIn is false and isOnHomePage is false", () => {
      const auth = { user: false };
      const request = { nextUrl: { pathname: "/about" } };
      const result = authConfig.callbacks.authorized({ auth, request });
      expect(result).toBe(true);
    });
  });
});