import React, { useState } from 'react';
import axios from 'axios';
import './banner.css';
import kmsImg from '../assets/images/kms.jpg';
import vinLogo from '../assets/images/vinlogo.png';
import gtoImg from '../assets/images/gto.jpg';
import goldenImg from '../assets/images/goldenboi.jpg';
import deathImg from '../assets/images/death.jpg';
import fightVed from '../assets/blogs/fight.mp4';
import fightdemon from '../assets/blogs/train.mp4';
import logodemonslayer from '../assets/images/demon_slayer.png';
import titans from '../assets/blogs/aot.mp4';
import Shingeki_no_Kyojin from '../assets/images/Shingeki_no_Kyojin_(anime)_Logo.png'
import Jujusu from '../assets/blogs/jk.mp4'
import jkjkjk from '../assets/images/jkjkjk.png'
import raygen from '../assets/blogs/raygen.mp4'
import moblogo from '../assets/images/moblogo.png'
import Homecontact from '../components/Homecontact';
import Footer from './Footer';

function Banner() {
    const [mangas, setMangas] = useState([]);

    // axios.get('http://localhost:4000/mangas/mangas') // Replace '/mangas' with your actual API endpoint
    //   .then(response => setMangas(response.data))
    //   .catch((error) => console.log(error.data))

    console.log(mangas);
    const videoPosterImgSrc = "url_to_your_video_poster_image.jpg"; // Define video poster image URL

    return (
        <div className='banner'>
            <div className='manga'>
                <img src={kmsImg} alt='background img' className='bgImg active' />
                <img src={gtoImg} alt='background img' className='bgImg active' />
                <img src={goldenImg} alt='background img' className='bgImg active' />
                <img src={deathImg} alt='background img' className='bgImg active' />
            </div>

                {/* Video Element */}
                <video autoPlay loop muted controls className='video' poster={videoPosterImgSrc} /* Add other video attributes as needed */>
                    <source src={fightVed} type="video/mp4" /> {/* https://animeclips.online/vinland-saga/ */}
                </video>
                <video autoPlay loop muted controls className='video_1' poster={videoPosterImgSrc} /* Add other video attributes as needed */>
                    <source src={fightdemon} type="video/mp4" /> {/* https://animeclips.online/demon-slayer/ */}
                </video>
                <video autoPlay loop muted controls className='video_2' poster={videoPosterImgSrc} /* Add other video attributes as needed */>
                    <source src={titans} type="video/mp4" /> {/* https://animeclips.online/demon-slayer/ */}
                </video>
                <video autoPlay loop muted controls className='video_3' poster={videoPosterImgSrc} /* Add other video attributes as needed */>
                    <source src={Jujusu} type="video/mp4" /> {/* https://animeclips.online/demon-slayer/ */}
                </video>
                <video autoPlay loop muted controls className='video_4' poster={videoPosterImgSrc} /* Add other video attributes as needed */>
                    <source src={raygen} type="video/mp4" /> {/* https://animeclips.online/demon-slayer/ */}
                </video>

                <div className='container-fluid'>
                            <div className='content active'>
                            <img src={moblogo} alt='' className='movie-title' style={{marginTop:'50px'}} />
                                <h4>
                                    <span>Vinrando Saga</span>
                                    <span>Historique/WAR</span>
                                    <span>Makoto Yukimura</span>
                                    <span>	8 juillet 2019 – Ongoing</span>
                                    <span>15</span>
                                </h4>   
                                <img src={logodemonslayer} alt='' className='movie-title_1' style={{marginTop:'115px'}} />
                                <h4>
                                    <span>Demon Slayer</span>
                                    <span>Horror/DEMON</span>
                                    <span>	Koyoharu Gotōge</span>
                                    <span>	30 Novembre 2019 – Ongoing</span>
                                    <span>18</span>
                                </h4>
                                <img src={Shingeki_no_Kyojin} alt='' className='movie-title_1' style={{marginTop:'200px'}} />
                                <h4>
                                    <span>Attack on Titan</span>
                                    <span>Horror/TITANS</span>
                                    <span>	Koyoharu Gotōge</span>
                                    <span>	10  Juin 2013 – 20 janvier 2024</span>
                                    <span>15</span>
                                </h4>
                                <img src={jkjkjk} alt='' className='movie-title_1' style={{marginTop:'200px'}} />
                                <h4>
                                    <span>Jujutsu kaisen</span>
                                    <span>Horror/Dark fantasy</span>
                                    <span>	Gege Akutami </span>
                                    <span>		28 avril 2017 – Ongoing</span>
                                    <span>10</span>
                                </h4>
                                <img src={vinLogo} alt='' className='movie-title' style={{marginTop:'50px'}} />
                                <h4>
                                    <span>Vinrando Saga</span>
                                    <span>Historique/WAR</span>
                                    <span>Makoto Yukimura</span>
                                    <span>	8 juillet 2019 – Ongoing</span>
                                    <span>15</span>
                                </h4>
                                <Homecontact/>
                            </div>
                            <Footer />
                        </div>
                    </div>
    );
}

export default Banner;
