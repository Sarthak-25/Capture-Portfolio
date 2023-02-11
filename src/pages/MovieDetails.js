import React , {useState , useEffect} from "react";
import styled from "styled-components";
import {useNavigate , useLocation} from "react-router-dom";
import { MovieState } from "../movieState";
// Provides info about the curr state...such as the url which we can compare with the original derived from the object.
//Animation
import {motion} from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetails = () =>{

    const history = useLocation();
    const url = history.pathname;
    const [movies , setMovies] = useState(MovieState);
    const [movie , setMovie] = useState(null);

    useEffect(() =>{
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    } , [movies , url]);


    return (
        <>
            {movie && (
                <Details variants={pageAnimation} initial = "hidden" animate = "show" exit = "exit" >
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="" />
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award title = {award.title} description = {award.description} key = {award.title}/>
                        ))};
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="image" />
                    </ImageDisplay>
                </Details>

            )}
            
        </>
        
    );
}

const Details = styled(motion.div)`
    color: white;
`;
const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50% , -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const AwardStyle = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 50%;
        height: 0.5rem;
        margin: 1rem 0rem;
        background: #23d997;
    }
`
const ImageDisplay = styled.div`
    min-height: 50vh;
      img{
        height: 100vh;
        width: 100%;
        object-fit: cover;
      }
`;

//Award Component
const Award = ({title , description}) =>{
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    );
}

export default MovieDetails;