import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main>
        <div className="flex flex-col md:flex-row py-10 px-10 justify-center gap-20 items-center">
          <div className="">
            <Image
              src={"/writer.svg"}
              width={540}
              height={300}
              alt="myblog writer"
            />
          </div>
         
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold text-wrap ">
              Temukan Inspirasi dan Bagikan Ceritamu{" "}
            </h1>
            <p className="text-gray-600 font-thin py-2">
              Blog tempat kamu berbagi ide, pengalaman, dan wawasan yang
              berarti.
            </p>
            <div className="flex gap-x-3 items-center justify-start mt-3 ">
              <Link
                href={"/artikel"}
                className="text-sm font-semibold text-green-500 px-2.5 py-2.5 rounded-full border border-gray-200 hover:text-green-600 hover:bg-slate-50"
              >
                Mulai membaca
              </Link>
              <span className="text-gray-600 font-thin">atau</span>
              <button className="text-sm font-semibold bg-green-500 px-2.5 py-2.5 rounded-full text-white hover:bg-green-600">
                Gabung Sekarang
              </button>
            </div>
          </div>
          <span className="absolute top-[20%] right-[40%] translate-x-44 z-[-1]">
            <Image src={"/light-bulb-idea.svg"} width={180} height={180} alt="idea" className="object-cover" />
          </span>
        </div>
      </main>
      <Footer />
    </div>
  );
}
