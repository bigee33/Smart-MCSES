import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
  'https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/306160199_569121535008726_7463868766861219295_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=dykvf9BfI18Q7kNvgEKhQ_g&_nc_oc=Adj_eR-JEQoqnzShsyZB_NhcgyTpIOOILb-mxmhKQ_N4enIMoZWhzxmJEtowegCtJ3ceMbrTgJhJwCmuxQDpvitT&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=ABf12nKl5M-U4APuUqBvhZH&oh=00_AYAayD-PIVLGlSyzrZ3HoeuPDod903KmX3ghEH6hwMGvgw&oe=6781DA14',
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
