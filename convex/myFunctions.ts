import { query } from "./_generated/server";
import { v } from "convex/values";

export const fetchGroupsByMember = query({
  // Validators for arguments.
  args: {
    memberId: v.id("members"),
  },

  // Function implementation.
  handler: async (ctx, args) => {
    // Get the member's group.
    const documents = await ctx.db.query("members").filter(q => q.eq(q.field("id"), args.memberId)).collect();

    // Arguments passed from the client are properties of the args object.
    console.log(args.memberId);

    // Write arbitrary JavaScript here: filter, aggregate, build derived data,
    // remove non-public properties, or create new objects.
    return documents;
  },
});