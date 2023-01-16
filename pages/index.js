import Page5 from "../components/ClientsSection/ClientsSection";
import FirstSection from "../components/FirstSection/FirstSection";
import Footer from "../components/Footer/Footer";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import SecondSection from "../components/SecondSection/SecondSection";
import SocialMediaSection from "../components/SocialMediaSection/SocialMediaSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";

export default function Home() {
  return (
    <div className="p-0 m-0 w-full">
      <FirstSection/>
      <SecondSection/>
      <ProjectsSection/>
      <TestimonialsSection/>
      <Page5/>
      <SocialMediaSection/>
      <Footer/>
    </div>
  )
}
