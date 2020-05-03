import styled, { css } from 'styled-components'

const barStyles = css`
opacity: 1;
`

const openBarStyles = css`
opacity: 0;
`

const positiveRotation = css`
transform: rotate(45deg);
`

const negativeRotation = css`
transform: rotate(-45deg);
`

const getBarStyles = ({ visible }) => {
    return visible ? openBarStyles : barStyles
}

const getRotation = ({ visible, inverted }) => {
    return visible ? inverted ? negativeRotation : positiveRotation : null
}

export const BurgerBar = styled.div`
border-radius: 3px;
position: relative;
width: 35px;
height: 2px;
background-color: #4d4d4d;
transition: 0.2s;
align-self: center;
${getBarStyles}
`

export const MediumBurgerBarContainer = styled.div`
position: relative;
width: 35px;
height: 2px;
margin: 8px 0;
transition: 0.2s;
align-self: center;
`

export const MediumBurgerBar = styled.div`
border-radius: 5px;
position: absolute;
width: 35px;
height: 2px;
background-color: #4d4d4d;
transition: 0.5s;
${getRotation}
`

export const BurgerContainer = styled.div`
right: 10vw;
position: fixed;
top: 60px;
cursor: pointer;
display: inline-block;
z-index: 155;
background-color: white;
border-radius: 50%;
height: 60px;
width: 60px;
display: flex;
flex-direction: column;
justify-content: center;
&:hover {
    ${BurgerBar}, ${MediumBurgerBar} {
    background-color: black;
    }
}
`