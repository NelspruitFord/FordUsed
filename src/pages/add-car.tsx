import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { api } from "~/utils/api";

const CreateTeamWizard = () => {
   const [imageURL, setImageURL] = useState("");
   const [modelName, setModelName] = useState("");
   const [retail, setRetail] = useState("");
   const [mileage, setMileage] = useState("");
   const [features, setFeatures] = useState("");

   const [insertFlag, setInsertFlag] = useState(false);

   const { mutate } = api.insertCar.appendCar.useMutation();

   if (insertFlag) return (
      <div>
         <h1 className="pt-10">Submission Succesfull!</h1>
         <br />
         <h1>Return home <Link className="text-red-400" href={"/"}>HERE</Link></h1>
      </div>
   )

   return (
      <div className="pb-3 bg-cover bg-[url('../../public/index.png')] w-full border-x border-slate-400 md:max-w-lg">
         <div className="mt-24 flex pl-1 pt-1 pb-1 border-b border-slate-400">
            <nav>
               <Link href="/">Home</Link>
            </nav>
         </div>
         <h1 className="ml-1 pt-4">Add a new car below:</h1>

         <br />

         <div className="ml-1">Image URL:
            <input className="bg-black shadow appearance-none border rounded ml-4 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
               id="playerNames" type="text"
               value={imageURL}
               onChange={(e) => setImageURL(e.target.value)}
            />
         </div>

         <div className="ml-1">Model:
            <input className="bg-black shadow appearance-none border rounded ml-12 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
               id="TeamName" type="text"
               value={modelName}
               onChange={(e) => setModelName(e.target.value)}
            />
         </div>

         <br />

         <div className="ml-1">Retail:
            <input className="bg-black shadow appearance-none border rounded ml-14 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
               id="details"
               value={retail}
               onChange={(e) => setRetail(e.target.value)}
            />
         </div>
         <div className="ml-1">Mileage:
            <input className="bg-black shadow appearance-none border rounded ml-10 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
               id="details"
               value={mileage}
               onChange={(e) => setMileage(e.target.value)}
            />
         </div>

         <div className="ml-1">Features:
            <textarea className="bg-black shadow appearance-none border rounded ml-9 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
               id="features"
               value={features}
               onChange={(e) => setFeatures(e.target.value)}
            />
         </div>

         <br />

         <button
            onClick={() => {
               mutate({ image: imageURL, model: modelName, retail: retail, mileage: mileage, features: features })
               setInsertFlag(true)
            }}

            className="ml-1 bg-green-700 hover:bg-green-800 py-2 px-4 border border-lime-900 rounded">
            Insert new vehicle
         </button>
      </div>
   )
}

const Insert = () => {

   return (
      <>
         <Head>
            <title>Produkta Motor Group Pre Owned Vehicles</title>
            <meta name="description" content="Produkta Pre Owned" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className="flex h-screen justify-center">
            <CreateTeamWizard />
            <footer className="absolute  md:max-w-lg bottom-0 h-12 w-full bg-[url('../../public/footer.png')] bg-cover bg-no-repeat" />
         </main>
      </>
   )
}

export default Insert;