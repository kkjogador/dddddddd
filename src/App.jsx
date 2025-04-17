import React, { useEffect, useState } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/team";
import { Contact } from "./components/contact";

import SmoothScroll from "smooth-scroll";
import JsonData from "./data/data.json";
import "./App.css";

// Inicializa o smooth scroll uma vez
new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(JsonData);
  }, []);

  return (
    <>
      <Navigation />
      <Header data={data.Header} />
      <main>
        <Features data={data.Features} />
        <About data={data.About} />
        <Services data={data.Services} />
        <Gallery data={data.Gallery} />
        <Testimonials data={data.Testimonials} />
        <Team data={data.Team} />
        <Contact data={data.Contact} />
      </main>
    </>
  );
};

export default App;
