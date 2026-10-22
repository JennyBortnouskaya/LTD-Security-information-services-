import Carousel from './components/Carousel';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Advantages from './components/Advantages';
import ContactInformation from './components/ContactInformation';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container__header">
      <Carousel />
      <div className="main container">
        <div className="carousel"></div>
        <div className="infomation">
          <AboutUs />
          <Services />
          <Advantages />
        </div>
        <ContactInformation />
        <Map />
        <Footer />
      </div>
    </div>
  );
}

export default App;
