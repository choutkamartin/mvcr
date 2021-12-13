import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEuroSign,
  faInfoCircle,
  faLaptop,
  faPhone,
  faProjectDiagram,
  faQuestionCircle,
  faScroll,
  faTasks,
  faUsers,
  faTimes,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import Language from "components/Language";

const solutions = [
  {
    name: "O nás",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "o-nas",
    icon: faQuestionCircle,
    children: [
      {
        name: "Ministerstvo",
        href: "ministerstvo",
      },
      {
        name: "Azyl, migrace a integrace",
        href: "azyl-migrace-integrace",
      },
      {
        name: "Bezpečnostní politika",
        href: "bezpecnostni-politika",
      },
      {
        name: "Prevence kriminality",
        href: "prevence-kriminality",
      },
      {
        name: "Veřejná správa",
        href: "verejna-sprava",
      },
      {
        name: "Státní služba",
        href: "statni-sluzba",
      },
      {
        name: "Bezpečnostní výzkum",
        href: "bezpecnostni-vyzkum",
      },
      {
        name: "Policejní vzdělávání",
        href: "policejni-vzdelavani",
      },
      {
        name: "Archivnictví a spisová služba",
        href: "archivnictvi-spisova-sluzba",
      },
      {
        name: "Nadace policistů a hasičů",
        href: "nadace-policistu-hasicu",
      },
      {
        name: "Ochrana osobních údajů",
        href: "ochrana-osobnich-udaju",
      },
      {
        name: "Protikorupční program MV",
        href: "protikorupcni-program",
      },
      {
        name: "Politika rovných příležitostí",
        href: "politika-rovnych-prilezitosti",
      },
      {
        name: "CTHH",
        href: "cthh",
      },
      {
        name: "Norské fondy",
        href: "norske-fondy",
      },
      {
        name: "Program švýcarsko-české spolupráce",
        href: "program-svycarsko-ceske-spoluprace",
      },
    ],
  },
  {
    name: "Služby pro veřejnost",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: faUsers,
    children: [
      {
        name: "Formuláře",
        href: "formulare",
      },
      {
        name: "Neplatné doklady",
        href: "neplatne-doklady",
      },
      {
        name: "Rady a služby",
        href: "rady-a-sluzby",
      },
      {
        name: "Informace podle zákona 106",
        href: "informace-podle-zakona-106",
      },
      {
        name: "Adresy v ČR a číselníky",
        href: "adresy-cr-ciselniky",
      },
      {
        name: "Rejstřík politických stran a politických hnutí",
        href: "rejstrik-politickych-stran-hnuti",
      },
      {
        name: "Seznam veřejných stránek",
        href: "seznam-verejnych-stranek",
      },
      {
        name: "Informace pro cizince",
        href: "informace-pro-cizince",
      },
      {
        name: "Dobrovolnická služba",
        href: "dobrovolnicka-sluzba",
      },
      {
        name: "Psychologická služba",
        href: "psychologicka-sluzba",
      },
      {
        name: "Finanční arbitr ČR",
        href: "financni-arbitr",
      },
      {
        name: "Úřední deska orgánu nemocenského pojištění MV",
        href: "uredni-deska-organu-nemocenskeho-pojisteni",
      },
      {
        name: "Úřední deska sociálního zabezpečení MV",
        href: "uredni-deska-organu-socialniho-zabezpeceni",
      },
    ],
  },
  {
    name: "Informační servis",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: faInfoCircle,
    children: [
      {
        name: "Tiskové zprávy",
        href: "tiskove-zpravy",
      },
      {
        name: "Avíza",
        href: "aviza",
      },
      {
        name: "Reakce na nepřesnosti v médiích",
        href: "reakce-na-nepresnosti-v-mediich",
      },
      {
        name: "Úřední deska",
        href: "uredni-deska",
      },
      {
        name: "Videozpravodajství",
        href: "videozpravodajstvi",
      },
      {
        name: "Fotogalerie",
        href: "fotogalerie",
      },
      {
        name: "Dopravní informace",
        href: "dopravni-informace",
      },
      {
        name: "Statistiky",
        href: "statistiky",
      },
      {
        name: "Volby",
        href: "volby",
      },
      {
        name: "Státní symboly ČR",
        href: "statni-symboly",
      },
      {
        name: "Soutěže a výstavy",
        href: "souteze-vystavy",
      },
      {
        name: "Časopisy",
        href: "casopisy",
      },
      {
        name: "Sport",
        href: "sport",
      },
      {
        name: "Mimořádné události",
        href: "mimoradne-udalosti",
      },
      {
        name: "Digitální televizní vysílání",
        href: "digitalni-televizni-vysilani",
      },
    ],
  },
  {
    name: "eGovernment",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: faLaptop,
    children: [
      {
        name: "Novinky v eGovernmentu",
        href: "novinky-egovernmentu",
      },
      {
        name: "Agenda odboru hlavního architekta eGovernmentu",
        href: "agenda-oboru-hlavniho-architekta-governmentu",
      },
      {
        name: "Základní registry",
        href: "zakladni-registry",
      },
      {
        name: "Czech POINT",
        href: "czech-point",
      },
      {
        name: "Datové schránky",
        href: "datove-schranky",
      },
      {
        name: "Komunikační infrastruktura veřejné správy a centrální místa služeb KIVS/CMS",
        href: "komunikacni-infrastruktura",
      },
      {
        name: "Portál veřejné správy",
        href: "portal-verejne-spravy",
      },
      {
        name: "Portál občana",
        href: "portal-obcana",
      },
    ],
  },
  {
    name: "EU",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: faEuroSign,
    children: [
      {
        name: "Agenda EU na MV",
        href: "#",
      },
      {
        name: "Salcburské fórum",
        href: "#",
      },
      {
        name: "Fondy EU v oblasti vnitřních věcí",
        href: "#",
      },
      {
        name: "Obecný program Solidarita",
        href: "#",
      },
      {
        name: "Strukturální fondy",
        href: "#",
      },
      {
        name: "Programy EU",
        href: "#",
      },
      {
        name: "Schengen",
        href: "#",
      },
      {
        name: "OP Lidské zdroje a zaměstnanost",
        href: "#",
      },
      {
        name: "Evropská občanská iniciativa",
        href: "#",
      },
      {
        name: "Výzvy ESIF",
        href: "#",
      },
      {
        name: "Evropské politické strany a evropské politické nadace",
        href: "#",
      },
    ],
  },
  {
    name: "Nabídky a zakázky",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: faProjectDiagram,
    children: [
      {
        name: "Nabídka služebních míst",
        href: "#",
      },
      {
        name: "Nabídka ostatních míst",
        href: "#",
      },
      {
        name: "Nabídka majetku",
        href: "#",
      },
      {
        name: "Veřejné zakázky",
        href: "#",
      },
      {
        name: "Dotační tituly",
        href: "#",
      },
      {
        name: "Granty",
        href: "#",
      },
      {
        name: "Předběžné tržní konzultace",
        href: "#",
      },
      {
        name: "Průzkum trhu",
        href: "#",
      },
    ],
  },
  {
    name: "Projekty",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: faTasks,
    children: [
      {
        name: "GIS aktivitz",
        href: "#",
      },
      {
        name: "Zrušení víz do USA",
        href: "#",
      },
      {
        name: "Efektivní veřejná správa",
        href: "#",
      },
      {
        name: "Pátrání po pohřešovaných dětech",
        href: "#",
      },
      {
        name: "MEDEVAC a Pomoc na místě",
        href: "#",
      },
      {
        name: "Vzděláváací projekty v Africe",
        href: "#",
      },
      {
        name: "PEGAS",
        href: "#",
      },
    ],
  },
  {
    name: "Legislativa",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: faScroll,
    children: [
      {
        name: "Sbírka zákonů",
        href: "#",
      },
      {
        name: "Sbírka mezinárodních smluv",
        href: "#",
      },
      {
        name: "Správní řád",
        href: "#",
      },
      {
        name: "Věstníky pro kraje a obce",
        href: "#",
      },
      {
        name: "Věstník Ministerstva vnitra",
        href: "#",
      },
      {
        name: "Přestupky",
        href: "#",
      },
    ],
  },
  {
    name: "Kontakty",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: faPhone,
    children: [
      {
        name: "Základní kontakty",
        href: "#",
      },
      {
        name: "Kontakty pro média",
        href: "#",
      },
      {
        name: "Odbory a součásti MVČR",
        href: "#",
      },
      {
        name: "Organizační složky",
        href: "#",
      },
      {
        name: "Tísňová volání",
        href: "#",
      },
      {
        name: "Inspekce Policie ČR",
        href: "#",
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [click, setClick] = useState();

  function clickHandler(item) {
    if (item != click) {
      setClick(item);
    } else {
      setClick(null);
    }
  }

  return (
    <Popover as="header" className="relative bg-white z-10 shadow-sm">
      <div className="lg:px-48 2xl:px-72 mx-auto px-4 sm:px-6">
        <div className="flex flex-col py-6">
          <div className="flex justify-between lg:mb-6">
            <div className="flex justify-start shrink-0">
              <Link href="/">
                <a>
                  <span className="sr-only">Ministerstvo vnitra ČR</span>
                  <Image
                    width={150}
                    height={41}
                    src="/images/mv-logo.svg"
                    alt="Ministerstvo vnitra ČR"
                  />
                </a>
              </Link>
            </div>
            <div className="flex items-center gap-x-4">
              <Language />
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                  <span className="sr-only">Otevřít menu</span>
                  <FontAwesomeIcon
                    icon={faBars}
                    className="h-6 w-6"
                    aria-hidden="true"
                    fixedWidth
                  />
                </Popover.Button>
              </div>
            </div>
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex gap-4 flex-wrap justify-between"
          >
            {solutions.map((item) => {
              return (
                <Popover className="relative" key={item.name}>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        onClick={() => clickHandler(item.name)}
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-sm inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-sky-400"
                        )}
                      >
                        <span>{item.name}</span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-5 lg:left-1/2 lg:-translate-x-1/2">
                          <div className="rounded shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-4 bg-white px-4 py-4 sm:gap-2 sm:p-8">
                              {item.children.map((child) => (
                                <a
                                  key={child.name}
                                  href={child.href}
                                  className="-m-2 p-2 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  {child.icon && (
                                    <FontAwesomeIcon
                                      icon={child.icon}
                                      size="xs"
                                      className="flex-shrink-0 h-6 w-6 text-sky-500"
                                      aria-hidden="true"
                                    />
                                  )}
                                  <div className="">
                                    <p className="text-base font-medium text-gray-900">
                                      {child.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {child.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              );
            })}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    width={150}
                    height={41}
                    src="/images/mv-logo.svg"
                    alt="Ministerstvo vnitra ČR"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-400">
                    <span className="sr-only">Zavřít menu</span>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="h-6 w-6"
                      aria-hidden="true"
                      fixedWidth
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-12">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <div key={item.name}>
                      {item.children != undefined ? (
                        <div
                          className={classNames(
                            click == item.name ? "gap-y-4" : "text-gray-400",
                            "flex flex-col"
                          )}
                        >
                          <button
                            key={item.name}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                            onClick={() => clickHandler(item.name)}
                          >
                            {item.icon && (
                              <FontAwesomeIcon
                                icon={item.icon}
                                size="lg"
                                className="flex-shrink-0 h-6 w-6 text-sky-500"
                                aria-hidden="true"
                                fixedWidth
                              />
                            )}
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className={classNames(
                                click == item.name
                                  ? "text-gray-600"
                                  : "text-gray-400",
                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                              )}
                              aria-hidden="true"
                            />
                          </button>
                          <div className="flex flex-col">
                            {click == item.name &&
                              item.children.map((child) => (
                                <Link key={child.name} href={child.href}>
                                  <a>{child.name}</a>
                                </Link>
                              ))}
                          </div>
                        </div>
                      ) : (
                        <Link key={item.name} href={item.href}>
                          <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                            {item.icon && (
                              <FontAwesomeIcon
                                icon={item.icon}
                                size="lg"
                                className="lex-shrink-0 h-6 w-6 text-sky-500"
                                aria-hidden="true"
                                fixedWidth
                              />
                            )}
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              className={
                                "text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                              }
                              aria-hidden="true"
                            />
                          </a>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Policie ČR
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Hasiči ČR
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
