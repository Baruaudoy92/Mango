import React from 'react'
import "./herobanner.css";
import renVed from '../assets/blogs/rengoku.mp4';
import BannerCard from './BannerCard';

const videoPosterImgSrc = "url_to_your_video_poster_image.jpg"; // Define video poster image URL

function Banner() {
  return (
    <div className='bannerglobal'>
        <div className='banner-1'>
            {/* left side */}
            <h2 className='details'>
            Démon slayer train de l'infini 
                <br></br>
                <span className='span_1'> Kyojuro Rengoku 煉れん獄ごく 杏きょう寿じゅ郎ろう</span>
                <br></br>
                <span className='span'> Akaza 猗あ窩か座ざ </span>
            </h2>
            <br></br>
            <br></br>
            <video autoPlay muted loop controls className='video_ren' poster={videoPosterImgSrc} /* Add other video attributes as needed */>
                    <source src={renVed} type="video/mp4" /> {/* https://animeclips.online/vinland-saga/ */}
                </video>
            <br></br>
            <p className='lorem'> 顧客がアディピシングのプロセスに注意を払うことは非常にです。結はるでしょう 結果、全体。彼は離婚の痛、時間と賢さの痛み、痛みを決して受け入れませんが、区別の結果は許しとそれです客がアデ がアディピシングのプロセスに を払うことはピシングのプロセスに注意を払うことは、彼が逃げるからすべては終わりです、そうでなければあなたはこれを見逃して泣き始 め結はるでょう</p>
            <br></br>
            <br></br>
            <div>

        </div>
        </div>
        {/* right side */}
        <div className='bannerCard'>
            <BannerCard />
        </div>
    </div>
  )
}

export default Banner;