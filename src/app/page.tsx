import Card from "@/components/ProjectCards";
import Footer from "@/components/Footer";
import Hi from "@/components/Hi";
import Menos from "@/components/Menos";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Hi />
      <Tech />
      <Menos />
      <Projects />
      <Card />
      <Footer />
    </main>
  );
}
