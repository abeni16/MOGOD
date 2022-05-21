import React from 'react'
import "../Styles/LeftMenu.css"
import {FaEllipsisH, FoEllipsisH} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'
import pic from "../../src/Image/logo1.png";
import MenuList from './MenuList';
import Menu from './Menu';
import MenuPlayList from './MenuPlayList';
import TrackList from "./TrackList"
const LeftMenu = () => {
    return (
        <div className='leftMenu'>
            <div className='logoContainer'>
               <img  src={pic} />
                <h2>Awd</h2>
                <i>
                 <FaEllipsisH/>
                </i>
                </div>
            {/* <div className='searchBox'>
                <input text="text" placeholder='Search...'/>
                <i className='searchIcon'><BiSearchAlt/></i>
            </div> */}
            {console.log(MenuList)}
            <Menu title={'Menu'} MenuObject={MenuList}/>
            <MenuPlayList/>
            <TrackList/>
        </div>
    )
}

export default LeftMenu
