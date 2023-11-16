import IBlog from '../types/blog'
import { FC, useState } from 'react'
import Head from 'next/head'
import { Container, Countdown, CountdownMessage, Blogs, Blog, ImageBlog, TitleBlog, More, InstagramEmbed } from '../styles/pages'
import { GetServerSideProps } from 'next'
import requestCMS from '../services/datoCMS'
import queryBlogs from '../services/queries/queryBlogs'

interface IProps {
    blogs: IBlog[]
}

const Home: FC<IProps> = ({ blogs }) => {
    const date = new Date('12-15-2023').getTime()
    const [completed, setCompleted] = useState(false)

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
            {!completed ? <Countdown onComplete={() => setCompleted(true)} date={date}/> : (
                <CountdownMessage>O evento começou! 🥳</CountdownMessage>
            )}
            <Blogs>
                {blogs.map(blog => 
                    <Blog href={`/blog/${blog.slug}`} key={blog.id}>
                        <ImageBlog
                            alt=""
                            placeholder="blur"
                            src={blog.image.url}
                            width={blog.image.width}
                            height={blog.image.height}
                            blurDataURL={blog.image.blurUpThumb}
                        />
                        <TitleBlog>{blog.title}</TitleBlog>
                        <More>Ler post</More>
                    </Blog>
                )}
            </Blogs>
            <InstagramEmbed url="https://www.instagram.com/p/CzpAOmcPU1e"/>
        </Container>
    </>
}

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
    const blogsRaw: any = await requestCMS({
        query: queryBlogs
    })

    return { props: { blogs: blogsRaw.allBlogs } }
}

export default Home