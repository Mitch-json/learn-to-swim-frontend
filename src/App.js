import './App.css';
import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import useIntersection from './helpers/useIntersection.js'
import Footbar from './components/Footbar';

import { Oval } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(false)

    const [heroImageLink, setHeroImageLink] = useState("")
    const [contactImageLink, setContactImageLink] = useState("")
    const [galleryImages, setGalleryImages] = useState([])
    const [sliderImages, setSliderImages] = useState([])
    let sliderImage = [];

    let image = []
  useEffect(() => {
    AOS.init();
    setLoading(true)
    fetch(`${process.env.REACT_APP_BACKEND_URL}/images/section-images`)
      .then(response => response.json())
      .then(data => {
          if(data.pictures){
              data.pictures.map(img =>{
                  if(img.section === '6484efb8a876c783cac0a348'){
                      setHeroImageLink(img.link)
                  }
                  if(img.section === '6484f32c64ab1e085fc494c7'){
                      setContactImageLink(img.link)
                  }
                  if(img.section === '6484f35e64ab1e085fc494ca'){
                      image.push({src: img.link, width: 320, height: 212})
                      setGalleryImages(image)
                  }
                  if(img.section === '6484f2ff64ab1e085fc494c4'){
                      sliderImage.push({original: img.link, thumbnail: img.link})
                      setSliderImages(sliderImage)
                  }
              })
              setLoading(false)
              
          }
    }).catch(error =>{
      toast.error("Network connection error")
      setLoading(false)
  })
  }, [])
  
  return (
    <div className="App">
      <ToastContainer 
          theme="dark"
      />
      <Navbar navbarStick={{height: 100}} />
      {
          loading ?
            <div className="row d-flex justify-content-center" style={{height: '80vh'}}>
                <div className="col-md-18 flex-container2">
                    <Oval
                        color="#106eea"
                        height={50}
                        width={50}
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="black"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                        backgroundColor="#fcf9f9"
                    />

                </div>
            </div>
          :
            <Main
              heroImageLink={heroImageLink}
              contactImageLink={contactImageLink}
              galleryImages={galleryImages}
              sliderImages={sliderImages}
            />
      }
      <Footbar />
      
    </div>
  );
}

export default App;
