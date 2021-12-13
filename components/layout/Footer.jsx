import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const services = [
  {
    name: "Státní služba",
    href: "/statni-sluzba",
  },
  {
    name: "Registr smluv",
    href: "/registr-smluv",
  },
  {
    name: "eObčanka",
    href: "/e-obcanka",
  },
  {
    name: "Osobní doklady",
    href: "/osobni-doklady",
  },
];

const information = [
  {
    name: "Úřední deska",
    href: "/uredni-deska",
  },
  {
    name: "Mapa serveru",
    href: "/mapa-serveru",
  },
  {
    name: "Webmaster",
    href: "/webmaster",
  },
  {
    name: "Kontakty",
    href: "/kontakty",
  },
];

const covid = [
  {
    name: "Příjezdový formulář",
    href: "/prijezdovy-formular",
  },
  {
    name: "Covid Portál",
    href: "/covid-portal",
  },
];

export default function Footer() {
  return (
    <footer className="p-4 lg:px-48 2xl:px-72 grid grid-cols-1 border-t border-slate-300 bg-slate-100">
      <section className="mb-6">
        <h4 className="text-lg font-medium">Sociální sítě</h4>
        <div className="flex gap-x-2">
          <a
            href="https://www.facebook.com/vnitro_cz"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-sky-600 hover:text-sky-500"
              size="lg"
              fixedWidth
            />
          </a>
          <a
            href="https://twitter.com/vnitro"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-sky-500 hover:text-sky-600"
              size="lg"
              fixedWidth
            />
          </a>
          <a
            href="https://www.youtube.com/user/MinisterstvoVnitraCR/featured"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
            aria-label="YouTube"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-red-500 hover:text-red-600"
              size="lg"
              fixedWidth
            />
          </a>
        </div>
      </section>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <section>
          <h4 className="text-lg font-medium">Služby</h4>
          <ul>
            {services.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <a className="underline hover:text-gray-600">{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h4 className="text-lg font-medium">Informace</h4>
          <ul>
            {information.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <a className="underline hover:text-gray-600">{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h4 className="text-lg font-medium">Koronavirus</h4>
          <ul>
            {covid.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <a className="underline hover:text-gray-600">{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section>
        © 2021 Ministerstvo vnitra České republiky, všechna práva vyhrazena
      </section>
    </footer>
  );
}
