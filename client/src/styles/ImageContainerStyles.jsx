import styled from 'styled-components'

const getOddWidth = ({ oddWidth }) => {
    return oddWidth
}

const getEvenWidth = ({ evenWidth }) => {
    return evenWidth
}

export const ImageContainer = styled.div`
&:nth-of-type(odd) {
    width: ${getOddWidth}%;
}

&:nth-of-type(even) {
    width: ${getEvenWidth}%;
}
`