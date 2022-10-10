import Header from "./header/header";
import Navbar from "./nav/nav";
import Home from "./home/home";
import About from "./about/about";
import Members from "./members/members";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

function WebContent() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Members />
      <Contact />
      <Footer />
    </>
  );
}

export default WebContent;
