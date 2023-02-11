import { motion } from "framer-motion"; 
import React , {useState} from "react";

const Toggle = ({children , title}) =>{
    const [Toggle , setToggle] = useState(false);
    return(
        <motion.div layout className="question"   onClick={() => setToggle(!Toggle)}>
            <motion.h4 layout>{title}</motion.h4>
            {Toggle ? children : ""}
            <div className="faq-line"></div>
        </motion.div>
    );
}
export default Toggle;