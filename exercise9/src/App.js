import MyInfo from './components/MyInfo';
import SimpleCard from './components/Exercise4/SimpleCard';
import Header from './components/Exercise5/Header';
import About from './components/Exercise5/About';
import Contact from './components/Exercise5/Contact';
import Footer from './components/Exercise5/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import fptLogo from './assets/images/fpt-logo.png';

const cardData = {
  title: 'Hoai Nguyen - FPT DaNang',
  description: '0982827763',
  imageUrl: fptLogo,
};

function App() {
  return (
    <div>
      <MyInfo />
      <SimpleCard item={cardData} />
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
