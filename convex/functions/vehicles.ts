import { query } from "../_generated/server";

export const getVehicles = query({
  args: {},
  handler: async (ctx) => {
    const vehicles = await ctx.db.query("vehicles").collect();
    return vehicles;
  },
});
