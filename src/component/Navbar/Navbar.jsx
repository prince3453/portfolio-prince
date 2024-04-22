import React, {useState, useEffect} from 'react';
import styles from './Navbar.module.css';

import {getImageUrl} from '../../utils';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [logoSrc, setLogoSrc] = useState(getImageUrl("hero/Logo1.gif")); 
    const lastFrameSrc = getImageUrl("hero/Logo.png");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLogoSrc(lastFrameSrc);
        }, 1800);
        return () => clearTimeout(timeout);
}, []);

    return(
        <div>
            <nav className={styles.navbar}>
                <img src={logoSrc} alt="logo" className={styles.videoLogo} />
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
                            <a href="#Project">Project</a>
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