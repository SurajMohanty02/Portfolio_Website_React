import "./App.css";
import About from "./Components/About/About";

import Banner from "./Components/Banner/Banner";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Price from "./Components/Price/Price";
import Services from "./Components/Service/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <About />
      <Price />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
