import Head from "next/head";
// import "./layout.scss";

const Layout = ({ children, className }) => (
  <div className={`layout ${className} `}>
    <Head>
      <title>Olaonipekun Carew</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="layout-children">{children}</div>
  </div>
);

export default Layout;
