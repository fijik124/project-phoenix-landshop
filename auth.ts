import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/app/lib/prisma";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcryptjs";

// Extend NextAuth types to include custom fields
declare module "next-auth" {
  interface User {
    role?: string;
    organizationId?: string;
  }
  interface Session {
    user: {
      id: string;
      email: string;
      role?: string;
      organizationId?: string;
    };
  }
}

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  // Temporarily use JWT strategy until @auth/prisma-adapter fully supports Prisma v7
  // adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    
    // 💡 CREDENTIALS PROVIDER (for Email/Password login)
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) return null;

            const user = await prisma.user.findUnique({
                where: { email: credentials.email as string },
            });

            if (user && user.password) {
                const isValid = await bcrypt.compare(
                    credentials.password as string,
                    user.password
                );
                if (isValid) {
                    const { password, ...userWithoutPassword } = user;
                    return {
                        ...userWithoutPassword,
                        organizationId: user.organizationId ?? undefined,
                    };
                }
            }
            return null;
        },
    }),
    // Implement Steam Provider here once package is selected
    // SteamProvider({ clientSecret: process.env.STEAM_SECRET }), 
  ],

  // 💡 CUSTOM CALLBACKS - CRUCIAL FOR CUSTOM SCHEMA DATA
  callbacks: {
    // 1. JWT Callback: Add custom data (userId, role, orgId) to the JWT
    async jwt({ token, user, trigger, session }) {
        if (user) {
            // User object is returned after sign-in (OAuth or Credentials)
            token.id = user.id;
            // The 'role' and 'organizationId' fields are custom additions from your schema
            token.role = user.role;
            token.organizationId = user.organizationId;
        }
        
        // Handle database updates (e.g., if you change a user's role in the admin panel)
        if (trigger === "update" && session?.user) {
             token.role = session.user.role;
        }

        return token;
    },

    // 2. Session Callback: Ensure the custom data is exposed to the client
    async session({ session, token, user }) {
        if (session.user && user) {
            // 'user' here is the DB user object when using the Prisma Adapter
            session.user.id = user.id;
            session.user.email = user.email; // Ensure email is always present
            
            // Expose the custom fields from your DB to the client
            session.user.role = user.role;
            session.user.organizationId = user.organizationId;
        }
        return session;
    },
    
    // Optional: Redirect users after sign-in
    // async redirect({ url, baseUrl }) {
    //     // Allows redirects to dashboard after sign-in
    //     return baseUrl + "/dashboard"; 
    // }
  },

  // Define custom pages for sign-in, sign-out, etc.
  pages: {
    signIn: "/signup",
    // signOut: "/auth/signout",
    error: "/error",
  },
});