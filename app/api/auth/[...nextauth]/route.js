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
      console.log("this is user : ", user)
      if (account.provider === "github") {
        await connectDB();
        const currentUser = await User.findOne({ email: user.email });

        if (!currentUser) {

          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });

        }
      }
      return true;
    },

    async session({ session, token }) {
      console.log("this is session : ", session)
      await connectDB();
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser.username;
      return session;
    },
  },

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
