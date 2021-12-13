import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Občané | MVČR</title>
        <meta
          name="description"
          content="Občané mohou na této webové stránce nalézt informace o portálu občana, veřejné správy, eObčanky či koronaviru."
        />
      </Head>
      <p>
        <Link href="/">
          <a className="underline">Úvodní stránka</a>
        </Link>{" "}
        →{" "}
        <Link href="/">
          <a className="underline">Občané</a>
        </Link>
      </p>
      <h1 className="text-2xl font-bold mb-8">Občané</h1>
      <section className="mb-14">
        <div className="flex flex-col items-start gap-y-6">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
          >
            Portál veřejné správy
          </a>
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
          >
            Portál občana
          </a>
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
          >
            eObčanka
          </a>
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-600 md:py-4 md:text-lg md:px-10"
          >
            Koronavirus
          </a>
          <div className="grid grid-cols-2 gap-2 w-full">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              Formuláře
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              Dopravní informace
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              Volby
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              Neplatné doklady
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              Neplatné průkazy
            </a>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
}
