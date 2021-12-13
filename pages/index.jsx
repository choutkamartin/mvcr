import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const articles = [
  {
    name: "Ministerstvo vnitra je na facebooku",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ducimus",
    author: "Jan Novák",
    photo: "/images/person-1.jpg",
    date: "12.12.2021",
  },
  {
    name: "Bankovní identitu má skoro polovina Čechů. Roste i zájem o datové schránky",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ducimus",
    author: "Jan Novák",
    photo: "/images/person-1.jpg",
    date: "08.12.2021",
  },
  {
    name: "Ústřední krizový štáb: povinné očkování pro vybrané profese a občany nad 60 let",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ducimus",
    author: "Jan Novák",
    photo: "/images/person-1.jpg",
    date: "08.12.2021",
  },
  {
    name: "Ministr vnitra Jan Hamáček: Nevidím důvod pro celostátní nouzový stav",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ducimus",
    author: "Jan Novák",
    photo: "/images/person-1.jpg",
    date: "08.12.2021",
  },
  {
    name: "Ministerstvo vnitra vyjelo se starosty obcí poradit občanům, jak žádat o odškodné za výbuchy ve Vrběticích",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ducimus",
    author: "Jan Novák",
    photo: "/images/person-1.jpg",
    date: "08.12.2021",
  },
  {
    name: "Česko znovu pomáhá v boji proti koronaviru. Lotyšsku pošle plicní ventilátory i dýchací masky",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ducimus",
    author: "Jan Novák",
    photo: "/images/person-1.jpg",
    date: "08.12.2021",
  },
];

export default function Index() {
  return (
    <>
      <Head>
        <title>Úvodní stránka | MVČR</title>
        <meta
          name="description"
          content="Ministerstvo vnitra České republiky je ústřední orgán státní správy pro vnitřní věci státu, zejména pro veřejný pořádek a další věci vnitřního pořádku a bezpečnosti."
        />
      </Head>
      <p>Vítejte</p>
      <h1 className="text-3xl font-bold mb-8">
        Ministerstvo vnitra
        <br /> České republiky
      </h1>
      <section className="mb-14">
        <div className="flex flex-col items-start gap-y-6">
          <div className="flex flex-col items-start gap-y-4">
            <div className="w-full border bg-red-700 text-white rounded-md p-4">
              V poslední době jsme zaznamenali šíření falešného příjezdového
              formuláře. V případě, že po vás formulář požaduje platbu, v žádném
              případě ji nehraďte, jedná se o podvod. Příjezdový formulář{" "}
              <a
                href="https://plf.uzis.cz/"
                className="underline hover:text-slate-100"
              >
                stahujte zde
              </a>
              .
            </div>
            <Link href="/koronavirus">
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-600 md:py-4 md:text-xl md:px-10"
              >
                Koronavirus
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-4">
            <Link href="/cizinci">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-xl md:px-10">
                Cizinci
              </a>
            </Link>
            <Link href="/obcane">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-xl md:px-10">
                Občané
              </a>
            </Link>
            <Link href="/verejnost-media">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:py-4 md:text-xl md:px-10">
                Veřejnost / Média
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-4 w-full">
            <a
              href="https://www.policie.cz/"
              target="_blank"
              className="flex gap-x-2 items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-700 md:py-4 md:text-xl md:px-10"
            >
              Policie ČR{" "}
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                size="xs"
                className="flex-shrink-0"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://www.hzscr.cz/"
              target="_blank"
              className="flex gap-x-2 items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-700 md:py-4 md:text-xl md:px-10"
            >
              Hasiči ČR{" "}
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                size="xs"
                className="flex-shrink-0"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Zpravodajství</h2>
        <div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-4 xl:gap-4 mb-8">
            {articles.map((item) => {
              return (
                <article key={item.name} className="rounded shadow-md p-4 flex flex-col bg-white">
                  <Link href="/novinky">
                    <h3 className="text-xl font-semibold mb truncate">
                      {item.name}
                    </h3>
                  </Link>
                  <div className="mb-4">
                    <p>{item.description}</p>
                    <a className="underline hover:text-gray-500 cursor-pointer">
                      Číst více
                    </a>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="relative rounded-full overflow-hidden w-8 h-8">
                      <Image
                        src={item.photo}
                        alt="Picture of the author"
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                    <p>{item.author}</p>
                    <p>{item.date}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <Link href="/novinky">
            <a className="flex justify-center items-center underline hover:text-gray-600">
              Více →
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}
