import './css/styles.css';
import './js/scripts.js';

import Navbar from './layouts/Navbar';
import Header from './layouts/Header';
import SectionOne from './sections/SectionOne';
import SectionTwo from './sections/SectionTwo';
import SectionThree from './sections/SectionThree';
import Footer from './layouts/Footer';
import Modals from './layouts/Modals';

function App() {
  return (
    <div id="page-top">
        <Navbar/>
        <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <Footer/>
        <Modals/>
    </div>
  );
}

export default App;
