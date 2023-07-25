import { carRouter } from "~/server/api/routers/car";
import { createTRPCRouter } from "~/server/api/trpc";
import { appendCarRouter } from "./routers/appendCar";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  car: carRouter,
  insertCar: appendCarRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
