import './App.css';
import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import useIntersection from './helpers/useIntersection.js'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className="App">
      <Navbar navbarStick={{height: 100}} />
      <Main />
      
    </div>
  );
}

export default App;
