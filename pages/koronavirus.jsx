import Head from "next/head";
import Link from "next/link";

export default function Koronavirus() {
  return (
    <>
      <Head>
        <title>Koronavirus | MVČR</title>
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
          <a className="underline">Koronavirus</a>
        </Link>
      </p>
      <h1 className="text-2xl font-bold mb-4">Koronavirus</h1>
      <div className="w-full border bg-red-700 text-white rounded-md p-4 mb-4">
        V poslední době jsme zaznamenali šíření falešného příjezdového
        formuláře. V případě, že po vás formulář požaduje platbu, v žádném
        případě ji nehraďte, jedná se o podvod. Příjezdový formulář{" "}
        <a href="https://plf.uzis.cz/" className="underline">
          stahujte zde
        </a>
        .
      </div>
      <section>
        <h3 className="text-lg font-semibold mb">Aktuálně platící nařízení</h3>
        <p className="mb-3">
          Občanům důrazně doporučujeme sledovat aktuálně platící nařízení na
          webu{" "}
          <a href="https://covid.gov.cz/" target="_blank" className="underline">
            covid.gov.cz
          </a>
          , který je jediným platným zdrojem informací a nařízení.
        </p>
        <p className="mb-3">
          Celou vyhlášku lze stahovat na{" "}
          <a href="" className="underline">
            tomto odkaze
          </a>
          .
        </p>
        <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-lg md:px-10">
          Covid Portál
        </a>
      </section>
    </>
  );
}
