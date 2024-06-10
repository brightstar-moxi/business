// import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";
// import AdBanner from "./components/AdBanner";
// import Testimony from "./components/Testimony ";
// import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#14143d] "> 

<Navbar/>
<div className= "container mt-24 mx-auto px-12 py-4">
<HeroSection/>
<AchievementSection/>

<AboutSection />
<ProjectSection/>
{/* <Testimony/> */}
<EmailSection/>

</div>

<Footer/>
     </main>
  )
}
