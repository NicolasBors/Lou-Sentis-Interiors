import styled, { css } from 'styled-components'

const openMobileNavbarStyles = css`
height: 100vh;
border-bottom: 1px solid black;
transition: ease 0.5s;
`

const closeMobileNavbarStyles = css`
height: 0;
`

const greyStyles = css`
color: #4d4d4d;
`

const blackStyles = css`
color: black;
`

const regularArrowStyles = css`
opacity: 0.6;
`

const invertedArrowStyles = css`
transform: rotateX(180deg);
transition: transform ease 200ms;
opacity: 1;
`

const openSubItemStyles = css`
height: auto;
`

const closeSubItemStyles = css`
height: 0;
`

const getMobileNavbarStyles = ({ visible }) => {
    return visible ? openMobileNavbarStyles : closeMobileNavbarStyles
}

const getArrowStyles = ({ subMenu }) => {
    return subMenu ? invertedArrowStyles : regularArrowStyles
}

const getSubItemStyles = ({ subMenu }) => {
    return subMenu ?
        openSubItemStyles
        :
        closeSubItemStyles
}

const getTitleStyles = ({ subMenu }) => {
    return subMenu ?
        blackStyles
        :
        greyStyles
}

export const MobileNavbarContainer = styled.div`
position: fixed;
z-index: 150;
top: 0;
width: 100vw;  
background: linear-gradient(to top, rgba(255, 255, 255, 0.6) 70%, white 100%);
overflow-x: hidden;
padding: 0;
margin-top: 175px;
display: flex;
flex-direction: column;
text-align: center;
font-family: 'Avenir';
${getMobileNavbarStyles}
`

export const ItemContainer = styled.div`
padding: 10px 0;
`

export const Title = styled.p`
position: relative;
margin: 0;
letter-spacing: 0.2rem;
cursor: pointer;
font-weight: normal;
${getTitleStyles}
`

export const ArrowContainer = styled.div`
img {
    width: 16px;
    padding-left: 10px;
${getArrowStyles}
}
`

export const TitleContainer = styled.div`
display: inline-flex;
cursor: pointer;
&:hover {
    ${Title} {
    transition: ease 0.25s;
    color: black;
    }
    ${ArrowContainer} img {
    transition: opacity ease 200ms;
    opacity: 1;
    }
}
`

export const SubItemContainer = styled.div`
position: relative;
z-index: 100;
left: 50%;
transform: translateX(-50%);
background-color: transparent;
overflow-x: hidden;
width: max-content;
letter-spacing: 0px;
margin-top: 0px;
${getSubItemStyles}
`

export const SubItem = styled.p`
cursor: pointer;
color: #4d4d4d;
letter-spacing: 0.2rem;
&:hover {
    cursor: pointer;
    transition: color ease 0.25s;
    color: black;
}
`