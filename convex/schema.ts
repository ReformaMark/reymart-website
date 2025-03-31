import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export default defineSchema({
    ...authTables,
    users: defineTable({
        fname: v.string(),
        lname: v.string(),
        email: v.string(),
        emailVerified: v.optional(v.string()),
    }),

})