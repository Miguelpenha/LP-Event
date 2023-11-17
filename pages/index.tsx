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