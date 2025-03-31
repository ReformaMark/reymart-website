import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";

const CustomPassword = Password({
  profile(params) {
    return {
      email: params.email as string,
      fname: params.fname as string,
      lname: params.lname as string,
    }
  }
})

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [CustomPassword],
});
