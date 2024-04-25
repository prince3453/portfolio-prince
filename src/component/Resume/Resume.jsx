import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Resume.module.css";

export const Resume = () => {
    return(
        <div id="Resume" className={styles.textother}>
          <a className={styles.otherlink} href={getImageUrl('resume/Prince_Ghoghari.pdf')} download="Prince_Ghoghari's Resume.pdf">
        Download Resume</a>
        </div>
    );
}

export default Resume;