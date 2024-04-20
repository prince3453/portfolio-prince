import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact =() => {
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.txt}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img className={styles.imgsr} src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:ppghoghari@gmail.com">ppghoghari@gmail.com</a>    
                </li>
                <li className={styles.link}>
                    <img className={styles.imgsr} src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/prince3453/">linkedin.com/princeghoghari</a>    
                </li>
                <li className={styles.link}>
                    <img className={styles.imgsr} src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/prince3453">github.com/princeghoghari</a>    
                </li>
            </ul>
        </footer>
    );
};

export default Contact;