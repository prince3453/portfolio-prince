import React, {useState} from 'react';
import styles from './Navbar.module.css';

import {getImageUrl} from '../../utils';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    return(
        <div>
            <nav className={styles.navbar}>
            {!videoEnded ? (
                        <video
                        className={styles.videoLogo}
                        autoPlay
                        muted
                        onEnded={handleVideoEnd}
                        >
                        <source src={getImageUrl("hero/Logo.mp4")} type="video/mp4" />
                        </video>
                    ) : (
                        <img src={getImageUrl("hero/Logo.png")} alt="logo" className={styles.staticLogo} />
                    )}
                <div className={styles.menu}>
                    <img src={ menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png") }
                    onClick={() => setMenuOpen(!menuOpen)} alt="menu-btn" className={styles.menuicon} style={{width:menuOpen ? '20px' : '32px'}}/>
                    <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
                        <li >
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Experience">Experience</a>
                        </li>
                        <li>
                            <a href="#Resume">Resume</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;