import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me</title>
      </Head>
      <Header />
      <main>
        <h1>About</h1>
        <p>Here's some information about me.</p>
      </main>
      <Footer />
    </div>
  );
}