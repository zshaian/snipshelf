import Contribute from '@/components/landing/contribute-section';
import Features from '@/components/landing/features';
import Hero from '@/components/landing/hero';
import Navbar from '@/components/navbar/navbar';

export default function LandingPage() {
  return (
    // import and use the necessary components in here
    //  navbar, hero section, features of the landing page
    // put it inside of the main element
    <main>
      <Navbar />
      {/* hero section conatiner */}
      <Hero />
      {/* features section container */}
      <Features />
      {/* contribute button section container */}
      <Contribute />
      <div></div>
    </main>
  );
}
