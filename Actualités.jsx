import React from 'react'
import vinVed from '../assets/blogs/vinland.mp4';
import "./actualités.css";
import Banner from './Herobanner';
import Footer from '../pages/Footer';

const videoPosterImgSrc = "url_to_your_video_poster_image.jpg"; // Define video poster image URL

function Actualités() {
  return (
    <>
    <div className='blog'>
    <div className='headers'>
    <div className="headerTitless">
     
    </div>
    <div className='headerImgs'>
         {/* Video Element */}
         <video autoPlay loop muted controls className='video_acc' poster={videoPosterImgSrc} >
              <source src={vinVed} type="video/mp4" /> {/* https://animeclips.online/vinland-saga/ */}
            </video>
    </div>
    <div> <Banner/> </div>
   
 </div>
 <div className="post">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/d2/3c/a5/d23ca53a07f645068dabf61103cc50ac.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">HORROR</span>
                <span className="postCat">MONIKA  </span>
            </div>
            <span className="postTitle">湘南純愛組, est un shōnen manga de Tōru Fujisawa</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Monika raconte la jeunesse d'Eikichi Onizuka (personnage principal de Monika) et de son meilleur ami Ryuji Danma.</p>
    </div>
    <div className="post-1">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/02/d2/d6/02d2d615d46f7f7d63a5d6484036c8a6.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">ASSASSINS</span>
                <span className="postCat">HUNTER X HUNTER</span>
            </div>
            <span className="postTitle">Dragon Boy</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc"> Killua est le deuxième enfant d'une famille d'assassins connus, la famille Zoldyck. Très prometteur dès sa naissance, Killua a déjà maîtrisé de nombreuses techniques de meurtre à un âge très jeune, et est destiné à devenir l'un des meilleurs assassins que la famille ait jamais produit.</p>
    </div>
    <div className="post-2">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/06/37/a5/0637a563959c3c8387af94c49187089f.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">FIGHT</span>
                <span className="postCat">BAKI</span>
            </div>
            <span className="postTitle">Baki グラップラー刃牙</span>
            <hr />
            <span className="postDate">3 hour ago</span>
        </div>
        <p className="postDesc"> Baki Hanma possédant des capacités physiques incroyables héritées de son père, Yujiro Hanma, « la créature la plus forte du monde », aussi appelé « l'Ogre ».</p>
    </div>
    <div>
    <img className="headerImgs" src="https://i.pinimg.com/originals/fb/49/ee/fb49eeba2e686240a99729766cf72bf3.gif" alt="gojo"/>
 </div>
 <div className="post-3">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/ce/eb/bb/ceebbb8a42d5004a1c505adeb965c143.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">École d'Exorcisme de Tokyo</span>
                <span className="postCat">JUJUTSU KAISEN</span>
            </div>
            <span className="postTitle">羂けん索じゃく, Kenjaku Jujutsu Kaisen.</span>
            <hr />
            <span className="postDate">5 hour ago</span>
        </div>
        <p className="postDesc"> Tu m'entends, Sukuna ? C'est parti ! Je vais de nouveau instaurer l'âge d'or de l'exorcisme !</p>
    </div>
    <div className="post-4">
            <img className="postImg" 
            src="https://pbs.twimg.com/media/FMQaDU2VgAAkWGl?format=jpg&name=medium" alt=" "
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">HISTORIC</span>
                    <span className="postCat">The Founding TITAN </span>
                </div>
                <span className="postTitle">Le Titan Fondateur.</span>
                <hr />
                <span className="postDate">6 hour ago</span>
            </div>
            <p className="postDesc">始祖の巨人 Shiso no Kyojin Un des Neuf Titans qui appartenait autrefois à la famille Reiss, qui l'a transmis de génération en génération.[2][1] Ses cris peuvent altérer l'esprit des humains et des Titans, mais dans le cas des premiers, certaines lignées sont exemptées de son pouvoir, mais ce pouvoir n'a historiquement pu être utilisé que par les membres de la famille royale. famille.</p>
        </div>
        <div className="post-5">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/2d/47/48/2d4748c50da16ce9c1e418aa1b9b0d0e.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">THRILLING</span>
                <span className="postCat">DEMON SLAYER </span>
            </div>
            <span className="postTitle"> UPPER ONE.</span>
            <hr />
            <span className="postDate">8 hour ago</span>
        </div>
        <p className="postDesc">"Je ne dis pas ça pour toi. Cela perturbe le classement. Même moi, je crains que des fissures ne se forment dans la hiérarchie."</p>
    </div>
 </div>
 <Footer />
 </>
  )
}

export default Actualités;