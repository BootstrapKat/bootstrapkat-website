import Layout from './components/Layout';
import Hero from './components/Hero';

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Hero />
      </main>
    </Layout>
  );
}
