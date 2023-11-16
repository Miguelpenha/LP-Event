import styled from 'styled-components'
import ImageRaw from 'next/image'

export const Title = styled.h1`
    color: #000000;
    font-size: 1.9em;
    font-weight: 100;
    text-transform: uppercase;
`

export const DatePublish = styled.h1`
    color: #000000;
    font-size: 1em;
    font-weight: 100;
    margin-top: 0.5em;
`

export const Image = styled(ImageRaw)`
    width: 100%;
    height: auto;
    margin-top: 2em;
    margin-bottom: 2em;
    align-self: center;
    border-radius: 20px;
`

export const Content = styled.div`
    margin-bottom: 5em;

    p {
        color: #000000;
        font-size: 1em;
        font-weight: 100;
        line-height: 1.3em;
        margin-bottom: 1em;
    }

    h2 {
        color: #000000;
        font-size: 1.8em;
        font-weight: 100;
        margin-bottom: 0.5em;
    }

    h3 {
        color: #000000;
        font-size: 1.5em;
        font-weight: 100;
        margin-bottom: 0.5em;
    }

    a {
        color: #000000;
    }


    strong {
        color: #000000;
        font-weight: 500;
    }
`