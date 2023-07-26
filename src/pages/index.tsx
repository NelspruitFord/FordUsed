import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Home: NextPage = () => {

  const { data, isLoading } = api.car.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>

  if (!data) return (
    <h1>No team data found, add a new team <Link className="text-red-600" href="/add-car">HERE</Link></h1>
  )

  return (
    <>
      <Head>
        <title>Ford Used</title>
        <meta name="description" content="Ford Used Vehicles for Sale" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="overflow-auto no-scrollbar pb-3 bg-cover bg-no-repeat bg-[url('../../public/bg1.png')] w-full border-x border-slate-400 md:max-w-lg">

          <div className="w-full mt-24">
            {data.map((car) => (
              <div key={car.id} className="flex align-middle pl-1 pt-1 pb-1 border-b-4 border-white-400">
                <img src={car.image} alt="Car image"
                  className="object-contain border-solid border-4 border-slate-400"
                  width={196}
                  height={144}
                />
                <div className="ml-3">
                  <h1 className="underline">{car.model}</h1>
                  <p className="mt-1">{car.retail}</p>
                  <p className="mt-1">{car.mileage}</p>
                  <p className="mt-1">{car.features}</p>
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