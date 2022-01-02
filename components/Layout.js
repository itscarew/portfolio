import Head from "next/head";

const Layout = ({ children, className }) => (
  <div
    className={`layout min-h-screen lg:px-48 px-8 py-12 text-base font-body ${className} `}
  >
    <Head>
      <title>Olaonipekun Carew</title>
      <link rel="icon" href="/IMG_20191023_230251_609.jpg" />
    </Head>
    <div className="layout-children">{children}</div>
  </div>
);

export default Layout;
