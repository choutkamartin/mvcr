import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import ScrollToTop from "components/ScrollToTop";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100">
      <Head>
      </Head>
      <Header />
      <div className="p-4 lg:p-8 lg:px-48 2xl:px-72">{children}</div>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
