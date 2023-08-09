import Data from './components/data/Data';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Cloud from './components/cloud/Cloud'
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
    </div>
  );
}

export default App;
