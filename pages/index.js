import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>My Home Page</title>
      </Head>
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Site</h1>
          <p className="text-xl text-gray-700">This is the home page content.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}