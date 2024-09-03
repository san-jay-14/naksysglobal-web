import FirstHero from "./sections/FirstHero";
import Navbar from "./sections/Navbar";
import SecondHero from "./sections/SecondHero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstHero />
      <SecondHero />
    </div>
  );
}
