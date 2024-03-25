import React from 'react';
import './aboutus.css';

import ContactCard from "../components/ContactCard"; 
import Footer from './Footer';

function Aboutus() {
  return (
    <div className='allabout'>
    <div className="aboutus">
      <h1 className='mango'>MANGO</h1>
      <ContactCard
        contact={{
          imgUrl:
            "https://i.pinimg.com/564x/8f/d2/41/8fd2418a1abbbe4930d42716cf5a55ed.jpg",
          name: "Eiichirō Oda",
          phone: "(237)-875-6627",
          email: "Odairo@gmail.jr"
        }}
      />
      <div className="aboutus">
      <ContactCard
        contact={{
          imgUrl:
            "https://comicvine.gamespot.com/a/uploads/scale_small/6/62070/1781838-toriyama.jpg",
          name: "Akira Toriyama",
          phone: "(237)-875-6627",
          email: "Toriyama@gmail.jr"
        }}
      />
      </div>
      <div className="aboutus">
      <ContactCard
      contact ={{
        imgUrl:
          "https://www.animesenpai.net/wp-content/uploads/2022/09/PicsArt_09-28-01.20.13_compress19-1536x864.jpg.webp",
        name: "Hajime Isayama",
        phone: "(237)-875-6627",
        email: "Isayama@gmail.jr"
      }}
    />
    </div>
    <div className="aboutus">
    <ContactCard
        contact={{
          imgUrl:
            "https://i.pinimg.com/564x/a2/a7/e2/a2a7e28ab1a502240ecd1f6a1a842cd9.jpg",
          name: "Barua Udoy",
          phone: "0652483992",
          email: "tyronbar92@gmail.com"
        }}
      />
    </div>
    </div>
    <Footer />
    </div>
  );
}
export default Aboutus;
