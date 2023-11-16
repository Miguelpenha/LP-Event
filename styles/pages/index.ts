import styled from 'styled-components'
import CountdownRaw from 'react-countdown'
import Link from 'next/link'
import Image from 'next/image'
import { InstagramEmbed as InstagramEmbedRaw } from 'react-social-media-embed'

export const Container = styled.main`
    display: flex;
`

export const Countdown = styled(CountdownRaw)`
    font-size: 2em;
    color: #000000;
    margin-top: 2em;
    align-self: center;
`

export const CountdownMessage = styled.span`
    font-size: 2em;
    color: #000000;
    margin-top: 2em;
    align-self: center;
`

export const Blogs = styled.div`
    width: 90%;
    gap: 2.5em;
    display: flex;
    flex-wrap: wrap;
    margin-top: 5em;
    align-self: center;
    flex-direction: row;
`

export const Blog = styled(Link)`
    width: 18em;
    text-decoration: none;
`

export const ImageBlog = styled(Image)`
    width: 18em;
    height: 12em;
    object-fit: cover;
    border-radius: 10px;
    object-position: center;
`

export const TitleBlog = styled.h3`
    color: #000000;
    font-size: 1.4em;
    font-weight: 400;
    margin-top: 0.5em;
`

export const More = styled.div`
    color: #000000;
    font-size: 1em;
    font-weight: 400;
    margin-top: 1.2em;
    width: fit-content;
    margin-right: auto;

    :hover {
        text-decoration: underline;
    }
`

export const InstagramEmbed = styled(InstagramEmbedRaw)`
    width: 30em;
    align-self: center;

    && {
        iframe {
            .HoverCard {
                display: none !important;
            }
            background-color: red !important;
        }
        
    }
`