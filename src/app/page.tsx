import Layout from './components/Layout';
import Hero from './components/Hero';
import LinkTout from './components/LinkTout';
import WindDownBanner from './components/WindDownBanner';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center lg:border-l lg:border-r border-x-black">
        <Hero />
        <LinkTout />
        <WindDownBanner />
      </div>
    </Layout>
  );
}
