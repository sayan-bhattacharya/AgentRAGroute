import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Your Name - AI Engineer & Consultant</title>
        <meta name="description" content="AI Engineer specializing in LLMs and autonomous agents" />
      </Head>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}