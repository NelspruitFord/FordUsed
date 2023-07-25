import { type NextPage } from "next";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { api } from "~/utils/api";

const Home: NextPage = () => {

  const { data, isLoading } = api.car.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>

  if (!data) return (
    <h1>No team data found, add a new team <Link href="/add-car">HERE</Link></h1>
  )

  return (
    <>
      <Head>
        <title>Ford Used</title>
        <meta name="description" content="Ford Used Vehicles for Sale" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="overflow-auto no-scrollbar pb-3 bg-cover bg-[url('../../public/bg1.png')] w-full border-x border-slate-400 md:max-w-lg">

          <div className="w-full mt-24">
            {data.map((car) => (
              <div id={car.id} className="flex align-middle pl-1 pt-1 pb-1 border-b-4 border-white-400">
                <img src={car.image} alt="Car image"
                  width={196}
                  className="border-solid border-4 border-slate-400"
                />
                <div className="ml-4">
                  <h1 className="underline">{car.model}</h1>
                  <p className="mt-3">{car.details}</p>
                  <p className="mt-3">{car.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;