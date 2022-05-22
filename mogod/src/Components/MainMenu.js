import React from 'react'
import {MdFavoriteBorder} from 'react-icons/md'
import {BsPlayFill} from 'react-icons/bs'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import pic from "../../src/Image/download.jpg";
import img1 from '../../src/Image/photo_2022-05-21_21-47-43.jpg'
import img2 from '../../src/Image/photo_2022-05-21_21-47-35.jpg'
import img3 from '../../src/Image/photo_2022-05-21_21-47-30.jpg'
import img4 from '../../src/Image/photo_2022-05-21_21-47-40.jpg'
import img5 from '../../src/Image/photo_2022-05-21_21-46-58.jpg'
import img6 from '../../src/Image/photo_2022-05-21_21-47-15.jpg'
import "../Styles/MainMenu.css"
import Categories from './Categories';
import MusicLoveCard from './MusicLoveCard';
const MainMenu = () => {
  return (
    
    // <div className='Container' style={{background:"#0B0C10",width:"100%" , overflowY: 'scroll', height: '100%'}  }>
    //     <div className='recentlyPlayed'>
    //         <h5>Recently Played</h5>
    //         <div className='imageContainer' > 
    //              <img className='recent_img' src={img6}  />
    //              <img className='recent_img' src={img6}  />
    //              <img className='recent_img' src={img6}  />
    //              <img className='recent_img'  src={img6} />
    //              <img className='recent_img'  src={img6} />
    //              <img className='recent_img'  src={img6} />
    //              <img className='recent_img'  src={img6} />
    //              <img className='recent_img'  src={img6} />
    //         </div>
    //     </div>

    //     <div className='MusicLove' style={{padding:"20px 10px 20px 20px"}}>
    //         <h5 style={{color:"white"}}>Music you'll love</h5>
    //         <div className='imageContainer' style={{display:"flex"}}> 
    //     <img src={img1} style={{width:"300px",height:"300px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/>
    //      <img src={img1} style={{width:"300px",height:"300px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/>
    //      <img src={img1} style={{width:"300px",height:"300px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/>
    //      <img src={img1} style={{width:"300px",height:"300px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/></div>
    //      </div>
    
    //         <div className='artistLove ' style={{padding:"20px 10px 20px 20px"}}>
    //         <h5 style={{color:"white"}}>You might love </h5>
    //         <div className='imageContainer' style={{display:"flex"}}> 
    //         <img src={img2} style={{width:"300px",height:"300px",padding:"10px 5px 10px 20px",borderRadius:"50%" }}/>
    //         <img src={img2} style={{width:"300px",height:"300px",padding:"10px 5px 10px 20px",borderRadius:"50%" }}/>
    //         <img src={img2} style={{width:"300px",height:"300px",padding:"10px 5px 10px 20px",borderRadius:"50%" }}/>
    //         <img src={img2} style={{width:"300px",height:"300px",padding:"10px 5px 10px 20px",borderRadius:"50%" }}/></div>
    //         </div>
    //         <div className='allCategories' style={{padding:"20px 10px 20px 20px"}}>
    //         <h5 style={{color:"white"}}>All categories </h5>
    //         <div className='imageContainer' style={{display:"flex"}}> 
    //         <img src={img3} style={{width:"350px",height:"100px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/>
    //         <img src={img3} style={{width:"350px",height:"100px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/>
    //         <img src={img3} style={{width:"350px",height:"100px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/>
    //         <img src={img3} style={{width:"350px",height:"100px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/></div>
    //         </div>
    //         <div className='newRelease' style={{padding:"20px 10px 20px 20px"}}>
    //         <h5 style={{color:"white"}}>New Release for you </h5>
    //         <div className='imageContainer' style={{display:"flex"}}> 
    //         <img src={img4} style={{width:"300px",height:"300px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/>
    //         <img src={img4} style={{width:"300px",height:"300px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/>
    //         <img src={img4} style={{width:"300px",height:"300px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/>
    //         <img src={img4} style={{width:"300px",height:"300px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/></div>
    //         </div>
    //         <div className='geners' style={{padding:"20px 10px 20px 20px"}}>
    //         <h5 style={{color:"white"}}>All categories </h5>
    //         <div className='imageContainer' style={{display:"flex"}}> 
    //         <img src={img5} style={{width:"350px",height:"150px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/>
    //         <img src={img5} style={{width:"350px",height:"150px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/>
    //         <img src={img5} style={{width:"350px",height:"150px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/>
    //         <img src={img5} style={{width:"350px",height:"150px",padding:"10px 5px 10px 20px",borderRadius:"5%" }}/></div>
    //         </div>
    //     <div className='cart_image'>
    //         <img src={pic}/>
    //     </div>
        
    //     <BsPlayFill/>
    //     <MdFavoriteBorder/>
    //     <BiDotsHorizontalRounded/>
    //     <h2>Ethiopa</h2>
    //     <p>By Teddy Afro0</p>
    //     <p>Released on 05/02/2012</p>
    // </div>
    <div className='mainContainer' style={{background:"white", overflowY: 'scroll', }} >
        <Categories/>
        <MusicLoveCard/>
        </div>
    
  )
}

export default MainMenu