import IBlog from '../../types/blog'
import { FC } from 'react'
import Head from 'next/head'
import { Container } from '../../styles/pages/blog'
import Blog from '../../components/Blog'
import { GetServerSideProps } from 'next'
import requestCMS from '../../services/datoCMS'
import queryBlogBySlug from '../../services/queries/queryBlogBySlug'

interface IProps {
    blog: IBlog
}

interface IQuery {
    slug: string
}

const Home: FC<IProps> = ({ blog }) => {
    return <>
        <Head>
            <title>Links Reinoceronte</title>
            <meta name="language" content="pt-BR"/>
            <meta property="og:type" content="company"/>
            <meta property="og:title" content="Links Reinoceronte"/>
            <meta property="og:description" content="Links Reinoceronte"/>
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta property="og:site_name" content="Reinoceronte"/>
            <meta property="fb:admins" content=""/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta name="twitter:title" content="Links Reinoceronte"/>
            <meta name="twitter:description" content="Links Reinoceronte"/>
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta name="author" content="Reinoceronte"/>
            <meta name="creator" content="Mp Tech"/>
            <meta name="publisher" content="Reinoceronte"/>
            <meta name="description" content="Links Reinoceronte"/>
            <meta name="copyright" content="©Reinoceronte. Todos os direitos reservados."/>
            <meta name="keywords" content="link Reinoceronte whatsapp"/>
            <meta name="rating" content="general"/>
            <meta name="robots" content="index, follow"/>
            <meta name="geo.region" content=""/>
            <meta name="geo.position" content=""/>
            <meta name="geo.placename" content="Reinoceronte"/>
            <meta name="msapplication-TileColor" content="#F9B956"/>
            <meta name="theme-color" content="#F9B956"/>
            <link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN} data-baseprotocol="https:" data-basehost={process.env.NEXT_PUBLIC_DOMAIN.replace('https://', '')}/>
        </Head>
        <Container>
            <Blog blog={blog}/>
        </Container>
    </>
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({ query }) => {
    const { slug } = query as unknown as IQuery

    const { blog }: any = await requestCMS({
        query: queryBlogBySlug,
        variables: {
            slug
        }
    })

    return { props: { blog } }
}

export default Home