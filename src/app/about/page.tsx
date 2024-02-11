'use client'
import '../styles/about.scss'
import Image from 'next/image'
import image1 from '../../../public/assets/images/three.png'
import image2 from '../../../public/assets/images/three.png'
import image3 from '../../../public/assets/images/three.png'
import image4 from '../../../public/assets/images/three.png'
import { useState } from 'react';
export default function About() {
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const images = [image1,image2, image3, image4]
    const handleImageClick = (image) => {
        setFullscreenImage(image);
    };

    const handleCloseFullscreen = () => {
        setFullscreenImage(null);
    };
    return (
        <div className="container margin-top">
            <h2>I am...</h2>
            <div className="image-container">
                {images.map((image, index) => (
                    <Image
                        className='image'
                        key={index}
                        src={image}
                        width={300}
                        height={300}
                        alt={`Image ${index + 1}`}
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
            {fullscreenImage && (
                <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
                    <div className="fullscreen-image">
                        <Image className='overlayImage' src={fullscreenImage} alt="Fullscreen" />
                    </div>
                </div>
            )}
            <h1>Click image for bigger image.....</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempore veniam eaque voluptate quod! Reiciendis ea maiores facere eius, earum at rerum rem adipisci corrupti delectus voluptate magnam aspernatur tempora?</p>
        </div>
    )
}
// pages/index.js


