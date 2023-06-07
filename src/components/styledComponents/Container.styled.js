import styled from "styled-components";
import backimage from "../../ProjectFiles/pexels-jess-md.png";

export const Background = styled.div`
@media(max-width: 768px) {
color: white;
background: url(${backimage}) center no-repeat;

p{
    padding-bottom: 200px;
    position: relative;
    top: 105px;
    font-weight: 600;

}

Form::placeholder{
    color: white;
}

}
`

export const Container = styled.div`

`

export const SplashLogo = styled.img`
height: 48px;
width: 128px;
position: relative;
top: 105px;
margin-top: -30px;
`

export const ParaWater = styled.h1`
p{
    height: 23px;
    width: 110px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
}
`