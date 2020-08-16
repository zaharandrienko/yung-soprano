import React from 'react';
import './Footor.css';
import { AiFillYoutube } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoVk } from "react-icons/io";


function Footor() {
    return (
        <div className="Footor">
            <div className='Naw1'>
                <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com'>
                    <AiFillYoutube className='icon1'></AiFillYoutube>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/_yung_soprano_/'>
                    <IoMdMail className='icon1'></IoMdMail>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/_yung_soprano_/'>
                    <AiFillInstagram className='icon1'></AiFillInstagram>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/_yung_soprano_/'>
                    <IoLogoVk className='icon1'></IoLogoVk>
                </a>
            </div>
        </div>

    );
}

export default Footor;