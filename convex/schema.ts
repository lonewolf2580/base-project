import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
 
const schema = defineSchema({
    groups: defineTable({
        name: v.string(),
        contributionAmount: v.number(),
        payoutFrequency: v.string(),
    }),
    members: defineTable({
        groupId: v.id("groups"),
        address: v.string(),
        receivedLast: v.boolean(),
        receiveOrder: v.number(),
    }),
    contributions: defineTable({
        groupId: v.id("groups"),
        member: v.id("members"),
        amount: v.number(),
        receiverAddress: v.id("members"),
    }),
})