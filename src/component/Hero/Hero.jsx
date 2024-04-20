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
            <p className={styles.description}>I am an experienced Data Engineer and Software Developer with 2.5 years of specialized expertise in Python, Django, ETL pipelines, and Azure Databricks. My professional journey is marked by a dedication to streamlining data processes and enhancing software solutions. Please feel free to reach out if you're interested in learning more.</p>
            <a href='mailto:ppghoghari@gmail.com' className={styles.contactbtn}>Contact Me</a>
        </div>
        <img src ={getImageUrl("hero/heroImage.png")} alt="Her Image" className={styles.heroimg}></img>
        
        <div className={styles.bottomblur} />
        </section>
    )
}

export default Hero;