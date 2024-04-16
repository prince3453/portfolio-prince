import React, { useState, useEffect, useRef } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';


export const Hero = () =>{
    const text = "Hii, I'm Prince";
    const [typedText, setTypedText] = useState('');
    const index = useRef(0);  // Use useRef to persist the index value

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (index.current < text.length) {
                setTypedText(prevTypedText => prevTypedText + text.charAt(index.current));
                index.current++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Adjust typing speed (milliseconds)

        return () => {
            clearInterval(typingInterval); // Clear interval on component unmount
            setTypedText(''); // Optionally reset typedText on component unmount
            index.current = 0; // Reset index on component unmount
        };
    }, []); 

    return(
        <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{typedText}</h1>
            <p className={styles.description}>I am Data Engineer and software developer for the 2.5 years of Experience in the Python, Django, ETL pipeline, and Azure Databricks. Reach out if you would like to learn more!</p>
            <a href='mailto:ppghoghari@gmail.com' className={styles.contactbtn}>Contact Me</a>
        </div>
        <img src ={getImageUrl("hero/heroImage.png")} alt="Her Image" className={styles.heroimg}></img>
        <div className={styles.topblur} />
        <div className={styles.bottomblur} />
        </section>
    )
}

export default Hero;