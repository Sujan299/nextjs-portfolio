'use client'
import '../styles/navbar.scss'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/logo/sujan-high-resolution-logo-black-transparent.png'
import Link from 'next/link'
function Header() {
    const [classList, setClassList] = useState("hiddenBtn");
    // const [Scroll, setScroll] = useState("false");
    // window.onscroll = function () {
    //         setScroll('true');
    //         if(Scroll === 'true'){
    //             setClassList('hiddenBtn');
    //         }
    // }
    const handleButtonClick = function () {
        if (classList === 'hiddenBtn') {
            setClassList("showBtn");
        }
        else {
            setClassList("hiddenBtn");
        }
    }

    return (
        <div className="container container-background">
            <nav className="nav-list">
                <h1><Link href='/'><Image src={logo} className='logo' alt=''/></Link></h1>
                <p onClick={handleButtonClick} className='option'>|||</p>
                <ul className={classList}>
                    <Link href='/articles' onClick={handleButtonClick}>Articles</Link>
                    <Link href='/about' onClick={handleButtonClick}>My Journey</Link>
                    <Link href='/contact' onClick={handleButtonClick}>Contact</Link>
                </ul>
            </nav>
        </div>
    )
}
export default Header;