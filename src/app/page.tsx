import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Features from '@/app/components/Features';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}