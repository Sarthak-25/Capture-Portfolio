//Test
//use in view let us mess up with anything when scroll in view 
import { useInView } from "react-intersection-observer";
//use Animation let us decide when an element should start animating
import { useAnimation } from "framer-motion";

import { fade } from "../animation";

export const useScroll = () =>{
    const controls = useAnimation();
    const [element , view] = useInView();
    if(view){
        controls.start("show");
    }
    else{
        controls.start("hidden");
    }
    return [element , controls];
};

