import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Navbar from './component/Navbar';
import PdfBox from './component/PdfBox';
import Social from './component/Social';
import TextArea from './component/TextArea';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <PdfBox />
      {/* <TextArea /> */}
      <Social />
      <Footer />
    </div>
  );
}

export default App;
