import React from "react";
import { About } from "../styles";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import {scrollReveal } from "../animation";

//Now we want to toogle the answers and we can use onClick but it would be too complicated for a simple toogle as it would have object and each 
//object will have its active state, title etc and desining it will be very complicated so we use reusable components.
const FaqSection = () => {
    const [element , controls] = useScroll();
    return (
        <Faq ref = {element} variants = {scrollReveal} animate = {controls} initial = "hidden">
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>

            
                <Toggle title = "How do I Start">
                
                        <div className="answers">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
            
                </Toggle>
                <Toggle title = "Daily Schedule">
                
                
                        <div className="answers">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                
            
                </Toggle>
                <Toggle title = "Different Payment Methods">

            
                        <div className="answers">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
    
                </Toggle>

                <Toggle title = "What products do you offer.">
        
            
                        <div className="answers">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}

//Styles
const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;

    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;
export default FaqSection;