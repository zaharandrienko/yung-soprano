import React from 'react';
import './Icons.css';
import { AiFillYoutube } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoVk } from "react-icons/io";

function Icons() {
    return (
        <div className="Icons">
            <div className='Naw'>
                <a className='contactLink' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com'>
                    <AiFillYoutube className='icon'></AiFillYoutube>
                </a>
                <a className='contactLink' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/_yung_soprano_/'>
                    <IoMdMail className='icon'></IoMdMail>
                </a>
                <a className='contactLink' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/_yung_soprano_/'>
                    <AiFillInstagram className='icon'></AiFillInstagram>
                </a>
                <a className='contactLink' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/_yung_soprano_/'>
                    <IoLogoVk className='icon'></IoLogoVk>
                </a>
            </div>
        </div>
    );
}

export default Icons;