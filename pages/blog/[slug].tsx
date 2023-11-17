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
        <title>LP Event</title>
            <meta name="language" content="pt-BR"/>
            <meta property="og:title" content={blog.title}/>
            <meta property="og:description" content={`Publicado em: ${new Date(blog.date).toLocaleDateString('pt-br', {timeZone: 'UTC'})}`}/>
            <meta property="og:image" content={blog.image.url}/>
            <meta property="og:url" content={`${process.env.NEXT_PUBLIC_DOMAIN}/blog/${blog.slug}`}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:url" content={`${process.env.NEXT_PUBLIC_DOMAIN}/blog/${blog.slug}`}/>
            <meta name="twitter:title" content={blog.title}/>
            <meta name="twitter:description" content={`Publicado em: ${new Date(blog.date).toLocaleDateString('pt-br', {timeZone: 'UTC'})}`}/>
            <meta name="twitter:image" content={blog.image.url}/>
            <meta name="description" content={`Publicado em: ${new Date(blog.date).toLocaleDateString('pt-br', {timeZone: 'UTC'})}`}/>
            <meta name="theme-color" content="#F9B956"/>
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