
import Header from "@/components/Header";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Process from "@/components/Process";
import Services from "@/components/Services";
import TechSection from "@/components/TechSection";

export default function Page(): JSX.Element {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <TechSection />
      <Process />
      <div className="mx-6 md:mx-0">
        {" "}
        <Form />
      </div>
      <Footer />
    </>
  );
}
