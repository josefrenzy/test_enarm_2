import Head from "next/head";
import dbConnect from "../lib/dbConnect";
import Usuario from "../models/usuario";
import { COLOR_CONSTANTS } from "../constants/colors";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center  min-h-screen py-2">
      <main className="flex flex-col justify-center items-center w-full flex-1 px-  ">
        <p className="font-poppins text-2xl mb-3 text-gray-700"> REALIZA</p>
        <h1 className="font-poppins font-extrabold text-black  text-6xl">
          TU ENARM A LA PRIMERA
        </h1>
        <small className="font-poppins text-xl mt-2 text-gray-600">
          Cerca de 18 especialistas brindandote su conocimiento
        </small>

        <button className={`w-[300px] h-[60px] mt-7 bg-[#383B7A] rounded-full  text-white drop-shadow-3xl`}>
          <p className="font-poppins text-xl">Quiero conocerlos</p>
        </button>
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const conn = await dbConnect();
    conn
      ? console.log("database connected 🌽")
      : console.log("database not connected 🌽");
    const res = await Usuario.find({});

    const users = res.map((doc) => {
      const user = doc.toObject();
      user._id = `${user._id}`;
      return user;
    });
    //console.log(res);
    return { props: { users } };
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
