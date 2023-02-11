import React from "react";
import home1 from "../img/home1.png";
//Using styled components to style instea of scss...used in the same file as react
import styled from 'styled-components';
import { About , Description , Image , Hide} from "../styles";
//Framer motion
import {motion} from "framer-motion";
import { titleAnim , fade , photoAnim} from "../animation";
import Wave from "./Wave";

const AboutSection = () =>{
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dream</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fade}>Contact us for any photograph and videograph that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants = {photoAnim} src={home1} alt="man holding the camera"/>
            </Image>
            <Wave/>
        </About>
        
    );
}



//Style


export default AboutSection;