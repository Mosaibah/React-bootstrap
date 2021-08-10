import './css/styles.css';
import './js/scripts.js';

import Navbar from './layouts/Navbar';
import Header from './layouts/Header';
import SectionOne from './sections/SectionOne';
import SectionTwo from './sections/SectionTwo';
import SectionThree from './sections/SectionThree';
import Footer from './layouts/Footer';
import Modals from './layouts/Modals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="page-top">

        <Switch>
        <Route path="/" exact>
            <Navbar/>
              <Header/>
            <Footer/>
          </Route>
          <Route path="/Portfolio" exact>
            <Navbar/>
            <SectionOne/>
            <Modals/>
            <Footer/>
          </Route>
          <Route path="/about" exact>
            <Navbar/>
            <SectionTwo/>
            <Footer/>
          </Route>
          <Route path="/contact" exact>
            <Navbar/>
              <SectionThree/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
