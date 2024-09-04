import FirstHero from "./sections/FirstHero";
import Navbar from "./sections/Navbar";
import SecondHero from "./sections/SecondHero";
import ContactBanner1 from "./sections/ContactBanner1";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstHero />
      <SecondHero />
      <ContactBanner1 />
    </div>
  );
}
