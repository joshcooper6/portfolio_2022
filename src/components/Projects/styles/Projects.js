import styled from 'styled-components'
import image from '/Users/Queen/Documents/GitHub/portfolio_2022/src/uclinventorygif.gif'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-self: center;
    align-self: center;
    background-color: rgba(0, 0, 0, .6);
`

export const Title = styled.h1``

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    padding: 2em 0;
    width: 90%;
    height: 100%;
    max-width: 700px;
    grid-gap: 1em;

    @media (min-width: 700px) {
        flex-direction: row;
    }
`

export const Image = styled.img`
    object-fit: cover;
    align-self: center;
    width: 300px;
    height: 200px;
    border-radius: 1em;
    border: 2px solid white;
    opacity: .5;
`

export const ProjectTitle = styled.a`
    font-size: 3em;
    align-self: center;
    width: 30%;
    font-family: 'Licorice';
    font-weight: bold;
    animation: flash 500ms infinite alternate;

    @keyframes flash {
        from {
            color: #AAAAAA;
        }
        to {
            color: #FFFFFF;
        }
    }
`

export const DescWrapper = styled.div`
    width: 90%;
    align-self: center;

    @media (min-width: 500px) {
        
    }
`

export const ProjectDesc = styled.p``

export const IconWrapper = styled.div`
    display: flex;
    grid-gap: 1em;
    justify-content: center;
`

export const Icon = styled.i`
    font-size: 3em;

    :nth-of-type(even) {
        color: grey;
    }
`