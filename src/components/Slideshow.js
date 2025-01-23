import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
  'https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/438099441_939692601284949_7723776103455940165_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CgKZCldcc_AQ7kNvgGdUGSP&_nc_oc=AdhGnAlc-GR6EuKSdBADKOTXdUFl_Jbpvj5TcRjNOsXS7ERg4tdGwfN80eBHPp4FJo_1lOtyJY8x1kwL96TGjQDu&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=AzQ2jkh5llmbKI8ZspxIvAt&oh=00_AYBvp0asJE5jl4yBmcjsze5L2PDaRV45a2nVXzV32HeIJA&oe=6797EE5C',
  'https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/372900198_3264890820476529_2561630056992774374_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oNco0Q-CZHsQ7kNvgEJGeqO&_nc_oc=Adhm395hxagoCGLfO4e_tE67JAGRxuPv9otaTfG1WHQFB6fWRr-e4D2au8WD5G673994PfgVh0OOs1fsq0TgCHww&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=A5SF4YmvcWrE9znbSaSFjGj&oh=00_AYD_cKBBMkDAHDg6Je__45yZxKImHc5IxknjAhEBJhxRxw&oe=6781C89D',
  'https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/426563747_3373392869626323_6963065207385007330_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DOi2rBgstogQ7kNvgEqn9Ot&_nc_oc=AdiVdAD7FReAVNbXmslkuSC6jeRDIw6tga10KtOHqIF0pZ6z6RI3i0_tX1ALOwHWF4xhJD6XhQsPn2PYcuimMK-r&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=A9cZUe-NFLRh806OhxRL3PJ&oh=00_AYBD76Db1WbUTZB7dQEPFZJX2rCRvZYy4s4_ZxeyHb7eHg&oe=6781CFA7',
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="slideshow">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="slideshow-image"
      />
    </div>
  );
};

export default Slideshow;
