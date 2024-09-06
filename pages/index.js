import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Home Page</title>
      </Head>
      <Header />
      <main>
        <h1>Welcome to My Site</h1>
        <p>This is the home page content.</p>
      </main>
      <Footer />
    </div>
  );
}