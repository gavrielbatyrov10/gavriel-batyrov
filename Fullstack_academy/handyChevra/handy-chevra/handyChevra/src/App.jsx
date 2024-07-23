import React from "react";
import "./App.css";
import Navbar from "./NAvbar";
import Header from "./Header";
import ServiceList from "./ServiceList";
import ServiceDetail from "./ServiceDetail";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import Landing from "./Landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Landing />
      <ServiceList />
      <ServiceDetail />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
