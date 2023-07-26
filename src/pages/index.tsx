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
        <div className="overflow-auto no-scrollbar pb-3 bg-[#0009B4] bg-cover bg-no-repeat bg-[url('../../public/index.png')] w-full border-x border-slate-400 md:max-w-lg">
          <div className="w-full mt-14">
            {data.map((car) => (
              <div key={car.id} className="flex align-middle pl-1 pt-2 pb-1 border-b-4 border-white-400">
                <img src={car.image} alt="Car image"
                  className="border-solid border-4 border-slate-400"
                  width={195}
                />
                <div className="ml-3 overflow-auto h-28">
                  <h1 className="underline">{car.model}</h1>
                  <p className="mt-1">Retail: R {car.retail}</p>
                  <p className="mt-1">Mileage: {car.mileage} Km</p>
                  <p className="mt-1">{car.features}</p>
                </div>
              </div>
            ))}
            <div className="ml-2 mt-2 text-[#25d366]">
              <Link href={"https://wa.me/27763408289?text=I%27m%20interested%20in%20your%20car%20for%20sale"}>
                <img width={195} src='https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png' />
                Whatsapp us!
              </Link>
            </div>
            {/* <div className="relative">
              <Link href={"https://wa.me/27763408289?text=I%27m%20interested%20in%20your%20car%20for%20sale"} className="bg-[url('https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png')] w-16 h-16 bg-cover"></Link>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;