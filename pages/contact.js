import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
      </Head>
      <Header />
      <main>
        <h1>Contact</h1>
        <p>Get in touch with me here.</p>
      </main>
      <Footer />
    </div>
  );
}