import type { NextPage } from "next";
import { useEffect, useState, useMemo } from 'react'
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { getOptionsIds } from "../utils/getRandomPokemon";

const Home: NextPage = () => {
  const [firstId, secondId] = useMemo(()=>getOptionsIds(), [])
  
  const firstPokemon = trpc.useQuery(["pokemon.get-pokemon-by-id", { id: firstId }]);
  const secondPokemon = trpc.useQuery(["pokemon.get-pokemon-by-id", { id: secondId }]);

  if (firstPokemon.isLoading || secondPokemon.isLoading) return null
  return (
    <>
      <Head>
        <title>Roundest Pokemon</title>
        <meta name="description" content="Voting system for roundest pokemon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen w-screen flex flex-col justify-center align-middle items-center">
        <div className="text-2xl text-center">Which Pokemon is Roundest?</div>
        <div className="p-2"/>
        <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
          <div className="w-32 h-32 flex flex-col">
            <img src={firstPokemon.data?.sprites.front_default} className="w-full"/>
            <div className="text-xl text-center capitalize mt-[-2rem]">{firstPokemon.data?.name}</div>
          </div>
          <div className="text-2xl p-8">VS</div>
          <div className="w-32 h-32 flex flex-col">
            <img src={secondPokemon.data?.sprites.front_default} className="w-full"/>
            <div className="text-xl text-center capitalize mt-[-2rem]">{secondPokemon.data?.name}</div>
          </div>
        </div>
        <div className="p-2"/>
      </div>

      {/* <div className="w-screen min-h-screen flex flex-col justify-center items-center p-4 overflow-y-scroll">
        <h2 className="text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700">
          Create <span className="text-purple-300">T4</span> App
        </h2>
        <p className="text-2xl text-gray-700">This stack uses</p>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-rows-2 md:grid-rows-2 justify-center items-center lg:grid-cols-2 md:grid-cols-2 gap-3 mt-3 pt-3 w-full lg:w-2/3 md:w-full">
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">NextJS</h2>
            <p className="text-sm text-gray-600">
              The React framework for production
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">TypeScript</h2>
            <p className="text-sm text-gray-600">
              Strongly typed programming language that builds on JavaScript,
              giving you better tooling at any scale
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">TailwindCSS</h2>
            <p className="text-sm text-gray-600">
              Rapidly build modern websites without ever leaving your HTML
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">tRPC</h2>
            <p className="text-sm text-gray-600">
              End-to-end typesafe APIs made easy
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://trpc.io/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </div> */}
    </>
  );
};

export default Home;
