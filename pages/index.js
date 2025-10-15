import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ProjectsPreview from "../components/ProjectsPreview";
import ContactBar from "../components/ContactBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <main>
        <Services />
        <ProjectsPreview />
        <ContactBar />
      </main>
      <Footer />
    </div>
  );
}
