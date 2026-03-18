import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import EducationalProgram from './components/EducationalProgram';
import ExtraActivities from './components/ExtraActivities';
import WhyChooseUs from './components/WhyChooseUs';
import DailyCare from './components/DailyCare';
import EchipaInscriere from './components/EchipaInscriere';
import KindergartenLife from './components/KindergartenLife';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Credibility from './components/Credibility';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: '#FDFCFB' }}>
      <Hero />
      <TrustIntro />
      <AboutUs />
      <Services />
      <EducationalProgram />
      <ExtraActivities />
      <WhyChooseUs />
      <DailyCare />
      <EchipaInscriere />
      <KindergartenLife />
      <FAQ />
      <Contact />
      <Credibility />
      <Footer />
    </div>
  );
}
