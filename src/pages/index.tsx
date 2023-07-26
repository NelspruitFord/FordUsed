import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Home: NextPage = () => {

  const { data, isLoading } = api.car.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>

  if (!data) return (
    <h1>No car data found</h1>
  )

  return (
    <>
      <Head>
        <title>Produkta Motor Group Pre Owned Vehicles</title>
        <meta name="description" content="Produkta Pre Owned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <header className="absolute md:max-w-lg top -0 h-16 w-full bg-center bg-cover bg-no-repeat   bg-[url('../../public/header.png')]"></header>
        <div className="overflow-auto no-scrollbar pb-3 bg-[#0009B4] w-full border-x border-slate-400 md:max-w-lg">
          <div className="w-full mt-16">
            {data.map((car) => (
              <div key={car.id} className="flex align-middle pl-1 pt-2 pb-1 border-b-4 border-white-400">
                <img src={car.image} alt="Car image"
                  className="border-solid border-4 border-slate-400"
                  width={195}
                />
                <div className="ml-3 overflow-auto h-36">
                  <h1 className="underline"><Link href={`https://wa.me/27763408289?text=I%27m%20interested%20in%20your%20${car.model}%20for%20sale`}>{car.model}</Link></h1>
                  <p className="mt-1">Retail: R {car.retail}</p>
                  <p className="mt-1 mb-1">Mileage: {car.mileage} Km</p>
                  <hr />
                  <p className="mt-1">{car.features}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-center text-[#25d366]">
            </div>
          </div>
          <Link className="pb-14" href={"https://wa.me/27763408289?text=I%27m%20interested%20in%20your%20Raptor%20for%20sale"}>
            <img width={195} src='https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png' alt="Whatsapp button logo" />
            Whatsapp us!
          </Link>
          <footer className="absolute md:max-w-lg bottom-0 h-12 w-full bg-[url('../../public/footer.png')] bg-cover bg-no-repeat" />
        </div>
      </main >
    </>
  );
};

export default Home;