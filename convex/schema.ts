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

  vehicles: defineTable({
    model: v.string(),
    brand: v.string(),
    price: v.string(),
    type: v.string(),
    year: v.number(),
    status: v.string(),
    posted: v.string(),
    images: v.array(v.string()),
    ytLink: v.optional(v.string()),
    description: v.string(),
    moreDetails: v.optional(v.record(v.string(), v.any())),
  }),

  image: defineTable({
    imageStorageId: v.string(),
    vehicleId: v.id("vehicles"),
  }).index("by_vehicle", ["vehicleId"]),
});
