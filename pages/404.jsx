import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Úvodní stránka | MVČR</title>
        <meta
          name="description"
          content="Ministerstvo vnitra České republiky je ústřední orgán státní správy pro vnitřní věci státu, zejména pro veřejný pořádek a další věci vnitřního pořádku a bezpečnosti."
        />
      </Head>
      <section className="vw-screen">
        <h1 className="text-3xl font-bold mb-4">404</h1>
        <p className="text-lg font-semibold mb-4">Stránka nenalezena</p>
        <Link href="/">
          <a className="inline-block px-8 py-3 border text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 md:text-lg">
            Zpět na domovskou stránku
          </a>
        </Link>
      </section>
    </>
  );
}
