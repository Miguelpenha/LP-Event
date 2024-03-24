import IBlog from '../types/blog'
import { FC, useState, useEffect } from 'react'
import Head from 'next/head'
import { Container, Countdown, CountdownMessage, Blogs, Blog, ImageBlog, TitleBlog, More } from '../styles/pages'
import { GetServerSideProps } from 'next'
import requestCMS from '../services/datoCMS'
import queryBlogs from '../services/queries/queryBlogs'

interface IProps {
    blogs: IBlog[]
}

const Home: FC<IProps> = ({ blogs }) => {
    const [isLoad, setIsLoad] = useState(false)
    const dateNow = new Date().toLocaleDateString('pt-br').split('/')
    const date = new Date(`${dateNow[1]}-${Number(dateNow[0])+2}-${dateNow[2]}`).getTime()

    useEffect(() => {
        setIsLoad(true)
    }, [])

    return <>
        <Head>
            <title>LP Event</title>
            <meta name="language" content="pt-BR"/>
            <meta property="og:title" content="LP Event"/>
            <meta property="og:description" content="LP Event"/>
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta name="twitter:title" content="LP Event"/>
            <meta name="twitter:description" content="LP Event"/>
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta name="description" content="LP Event"/>
            <meta name="theme-color" content="#F9B956"/>
        </Head>
        <Container>
            {isLoad && (
                <Countdown date={date}>
                    <CountdownMessage>O evento começou! 🥳</CountdownMessage>
                </Countdown>
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