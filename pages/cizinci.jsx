import Head from "next/head";
import Link from "next/link";

const media = [
  {
    name: "Uzavření pracoviště oddělení mezinárodní ochrany",
    href: "novinka",
    date: "06.12.2021",
    highlight: true,
  },
  {
    name: "Nová pravidla pro návštěvy v přijímacích a pobytových azylových střediscích ministerstva vnitra",
    href: "novinka",
    date: "03.12.2021",
  },
  {
    name: "Změny v zákoně o pobytu cizinců",
    href: "novinka",
    date: "02.12.2021",
  },
  {
    name: "Zkouška z českého jazyka - A2",
    href: "novinka",
    date: "01.12.2021",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  return (
    <>
      <Head>
        <title>Cizinci | MVČR</title>
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
          <a className="underline">Cizinci</a>
        </Link>
      </p>
      <h1 className="text-2xl font-bold mb-8">Cizinci</h1>
      <section className="mb-14">
        <div className="flex flex-col items-start gap-y-6">
          <div className="w-full border bg-red-700 text-white rounded-md p-4">
            <Link href="#">
              <a className="underline">
                Řešení pobytových záležitostí cizinců na území České republiky v
                souvislosti s koronavirem
              </a>
            </Link>
          </div>
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
          >
            Informace o stavu řízení
          </a>
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
          >
            Občané EU a rodinní příslušníci
          </a>
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
          >
            Občané třetích zemí
          </a>
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
          >
            Koronavirus
          </a>
          <section className="w-full">
            <h2 className="text-xl font-semibold mb-2">Informace pro:</h2>
            <div className="grid grid-cols-2 gap-2 w-full">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
              >
                Školy
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
              >
                Ubytovatele
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
              >
                Zaměstnavatele
              </a>
            </div>
          </section>
          <div className="grid grid-cols-1 gap-2 w-full">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              Kontakty
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
            >
              Mezinárodní ochrana
            </a>
          </div>
          <section className="w-full">
            <h2 className="text-xl font-semibold mb-2">
              Aktuality a upozornění
            </h2>
            <ul className="list-disc list-inside mb-4">
              {media.map((item) => (
                <li key={item.name} className="truncate">
                  <span>{item.date} - </span>
                  <Link href={item.href}>
                    <a
                      className={classNames(
                        item.highlight && "font-semibold text-red-700",
                        "underline"
                      )}
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="novinky">
              <a className="flex justify-center items-center underline">
                Více →
              </a>
            </Link>
          </section>
        </div>
      </section>
      <section></section>
    </>
  );
}
