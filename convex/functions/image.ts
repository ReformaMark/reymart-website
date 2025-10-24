// import { v, ConvexError } from "convex/values";
// import { asyncMap } from "convex-helpers";
// import { mutation, query } from "../_generated/server";
// import { Id } from "../_generated/dataModel";
// import { getAuthUserId } from "@convex-dev/auth/server";

// export const generateUploadUrl = mutation({
//   handler: async (ctx) => {
//     const currentUser = await getAuthUserId(ctx);
//     if (!currentUser) {
//       throw new ConvexError("Unauthorized");
//     }

//     // Return an upload URL
//     return await ctx.storage.generateUploadUrl();
//   },
// });

// export const saveStorageIds = mutation({
//   args: {
//     vehicleId: v.id("vehicles"),
//     storageIds: v.array(v.string()),
//   },
//   handler: async (ctx, args) => {
//     const currentUser = await getAuthUserId(ctx);
//     if (!currentUser) {
//       throw new ConvexError("Unauthorized");
//     }

//     await asyncMap(args.storageIds, async (storageId) => {
//       await ctx.db.insert("image", {
//         imageId: storageId,
//         vehicleId: args.vehicleId,
//       });
//     });
//   },
// });

// export const getImages = query({
//   args: {
//     vehicleId: v.id("vehicles"),
//   },
//   handler: async (ctx, args) => {
//     if (!args.vehicleId) return;
//     const images = await ctx.db
//       .query("image")
//       .withIndex("by_vehicle", (q) => q.eq("vehicleId", args.vehicleId))
//       .collect();
//     const results: Record<string, string> = {};
//     const imageUrls = await asyncMap(images, async (image) => {
//       const imageUrl = await ctx.storage.getUrl(
//         image.imageStorageId as Id<"_storage">
//       );

//       results[image.imageStorageId] = imageUrl;

//       return {
//         ...image,
//         imageUrl: imageUrl,
//       };
//     });
//   },
// });

// export const get = query({
//   args: {},
//   handler: async (ctx) => {
//     const images = await ctx.db.query("image").order("desc").collect();

//     const imageWithUrls = await asyncMap(images, async (i) => {
//       const imageUrl = await ctx.storage.getUrl(i.imageId as Id<"_storage">);
//       return {
//         ...i,
//         imageUrl: imageUrl,
//       };
//     });
//     return imageWithUrls;
//   },
// });

// export const deleteImage = mutation({
//   args: {
//     id: v.optional(v.id("image")),
//     batchId: v.id("upload_batch"),
//   },
//   handler: async (ctx, args) => {
//     if (!args.id) return;
//     const image = await ctx.db.get(args.id);
//     const batch = await ctx.db.get(args.batchId);
//     if (batch && image) {
//       const imageId = image.imageId;
//       await ctx.db.patch(batch._id, {
//         images: batch.images.filter((imageId) => imageId !== image._id),
//       });
//       await ctx.db.delete(args.id);
//       await ctx.storage.delete(imageId as Id<"_storage">);
//     } else {
//       throw new ConvexError("No batch or Image found!");
//     }
//   },
// });
