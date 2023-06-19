import React, { useEffect, useState } from 'react'

import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from 'react-image-gallery';


function Slider(props) {
  const [images, setImages] = useState([])
    useEffect(() => {
      setImages(props.images)
      
    }, [])
    return (
        <div>
            <ImageGallery 
                autoPlay={true}
                showNav={false}
                showFullscreenButton={false}
                slideDuration={450}
                slideInterval={3000}
                items={images} 
            />
        </div>
    )
}

export default Slider
