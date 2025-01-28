import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Features from '@/app/components/Features';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';
import Reviews from './components/Reviews';
import Sobre from './components/Sobre';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Sobre />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}