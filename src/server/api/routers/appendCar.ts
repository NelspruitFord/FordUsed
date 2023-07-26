import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const appendCarRouter = createTRPCRouter({
   appendCar: publicProcedure.input(z.object({
      image: z.string(),
      model: z.string(),
      retail: z.string(),
      mileage: z.string(),
      features: z.string(),
   })).mutation(async ({ ctx, input }) => {

      await ctx.prisma.car.create({
         data: {
            image: input.image,
            model: input.model,
            retail: input.retail,
            mileage: input.mileage,
            features: input.features,  
            sold: false,
         },
      });

   }),
});