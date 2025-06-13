import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import connectDB from "@/models/db";
import User from "@/models/User";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("Entering to try block...")
      try {
        if (account.provider === "github") {
          await connectDB();
          console.log("connnected db")
          const existingUser = await User.findOne({ email: user.email });

          if (!existingUser) {
            let a = await User.create({
              email: user.email,
              username: user.email.split("@")[0],
            });
            console.log("this is email : ", a.email, "this is username : ", a.username)
          }
        }
        return true;
      } catch (err) {
        console.error("Error in signIn callback:", err);
        return false; // causes login to fail cleanly
      }
    },

    async session({ session, token }) {
      try {
        await connectDB();
        const dbUser = await User.findOne({ email: session.user.email });
        session.user.name = dbUser?.username || session.user.name;
      } catch (err) {
        console.error("Error in session callback:", err);
      }
      return session;
    },
  }

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
