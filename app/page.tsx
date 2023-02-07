'use client'
import Header from "@/components/Header";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Process from "@/components/Process";
import Services from "@/components/Services";
import TechSection from "@/components/TechSection";
import Loading from "@/common/Loading";
import { useState, useEffect } from "react";
export default function Page(): JSX.Element {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
        <Loading />
        </div>
      ) : (
        <>
          {" "}
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
          <Footer />{" "}
        </>
      )}
    </>
  );
}

