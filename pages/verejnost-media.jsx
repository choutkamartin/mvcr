import Head from "next/head";
import Link from "next/link";

const press = [
  {
    name: "ÚKŠ: v nemocnicích a sociálních službách pomůžou dobrovolní hasiči",
    href: "novinka",
    date: "06.12.2021",
  },
  {
    name: "Ministerstvo vnitra je na facebooku",
    href: "novinka",
    date: "03.12.2021",
  },
  {
    name: "Bankovní identitu má skoro polovina Čechů. Roste i zájem o datové schránky",
    href: "novinka",
    date: "02.12.2021",
  },
  {
    name: "Reakce Ministerstva vnitra na článek serveru Neovlivní.cz",
    href: "novinka",
    date: "01.12.2021",
  },
];

const media = [
  {
    name: "Reakce na informace v článku „eObčanka má bezpečnostní trhliny. Hrozí krádeže identit“",
    href: "novinka",
    date: "06.12.2021",
  },
  {
    name: "Reakce Ministerstva vnitra na zavádějící článek Hospodářských novin k novele archivní vyhlášky",
    href: "novinka",
    date: "03.12.2021",
  },
  {
    name: "Vyjádření Ministerstva vnitra k reportáži TV Seznam",
    href: "novinka",
    date: "02.12.2021",
  },
  {
    name: "Ústřední krizový štáb: povinné očkování pro vybrané profese a občany nad 60 let",
    href: "novinka",
    date: "01.12.2021",
  },
];

export default function VerejnostMedia() {
  return (
    <>
      <Head>
        <title>Veřejnost a média | MVČR</title>
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
          <a className="underline">Veřejnost a média</a>
        </Link>
      </p>
      <h1 className="text-2xl font-bold mb-8">Veřejnost a média</h1>
      <section className="mb-14">
        <div className="flex flex-col items-start gap-y-6">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
          >
            Nabídky a zakázky
          </a>
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
          >
            Projekty
          </a>
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
          >
            Legislativa
          </a>
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
          >
            Kontakty
          </a>
          <div className="grid grid-cols-2 gap-2 w-full">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              EU
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              O ministerstvu
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              Mimořádné události
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              Avíza
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              Tiskové zprávy
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              Úřední deska
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              Fotogalerie / Video
            </a>
          </div>
        </div>
      </section>
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-2">Tiskové zprávy</h2>
        <ul className="list-disc list-inside mb-4">
          {press.map((item) => (
            <li key={item.name} className="truncate">
              <span>{item.date} - </span>
              <Link href={item.href}>
                <a className="underline">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="novinky">
          <a className="flex justify-center items-center underline">Více →</a>
        </Link>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Reakce na nepřesnosti v médiích
        </h2>
        <ul className="list-disc list-inside mb-4">
          {media.map((item) => (
            <li key={item.name} className="truncate">
              <span>{item.date} - </span>
              <Link href={item.href}>
                <a className="underline">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="novinky">
          <a className="flex justify-center items-center underline">Více →</a>
        </Link>
      </section>
    </>
  );
}
