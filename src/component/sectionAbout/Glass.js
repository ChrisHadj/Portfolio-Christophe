import React, { memo } from 'react'
import styled from 'styled-components';
import { useSpring, animated, config} from 'react-spring';
import { CallReceived } from '@material-ui/icons';
import Img from "../../image/lukasz-szmigiel-jfcviyfycus-unsplash.jpg"


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: config.default
    }))
    return (
        <Cont>
        <Container 
            onMouseMove={({
                clientX: x,
                clientY: y}) => (set({xys: calc(x, y)}))}
                onMouseLeave={() => set({xys:[0, 0, 1]})}
                style={{
                    transform: props.xys.interpolate(trans)
                }}
        >
        <StyledImg/>
            <StyledH1>Ashutosh Hathidara</StyledH1>
            <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3>
        
        </Container>
        </Cont>
    )
}

export default GlassCard;

const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
height: 150px;
width: 350px;
box-shadow: 10px 10px 5px 0px rgba(82,82,82,0.75);
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(5px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
`;


const StyledImg = styled.img`
    width: 200px;
    height: auto;
    border: 2px solid #000;
    border-radius: 50%;
`;

const StyledH1 = styled.h1`
    line-height: 1.5;
    letter-spacing: 1.5;
    font-family: "Gilroy";
`;

const StyledH3 = styled.h3`
    line-height: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
`;

const Cont = styled.div`
    background-image: url(${Img});
    height: 95vh;
    display: flex;
justify-content: center;
align-items: center;
`;