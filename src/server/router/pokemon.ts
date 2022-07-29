import { createRouter } from "./context";
import { z } from "zod";
import { PokemonClient } from "pokenode-ts"; 

export const pokemonRouter = createRouter()
  .query("get-pokemon-by-id", {
    input: z
      .object({
        id: z.number().nullish(),
      }),
    async resolve({ input }) {
        const api = new PokemonClient();
        const pokemon = api.getPokemonById(input?.id)
      return pokemon;
    },
  });
