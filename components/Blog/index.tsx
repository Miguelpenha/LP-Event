import { IBlog } from '../../types'
import { FC } from 'react'
import useDate from './useDate'
import { Title, DatePublish, Image, Content } from './style'
import { StructuredText } from 'react-datocms'

interface IProps {
    blog: IBlog
}

const Blog: FC<IProps> = ({ blog }) => {
    const date = useDate(blog.date)

    return (
        <>
            <Title>{blog.title}</Title>
            <DatePublish>Publicado em: {date}</DatePublish>
            <Image
                alt=""
                placeholder="blur"
                src={blog.image.url}
                width={blog.image.width}
                height={blog.image.height}
                blurDataURL={blog.image.blurUpThumb}
            />
            <Content>
                <StructuredText
                    data={blog.content}
                    renderBlock={({ record }) => {
                        switch (record.__typename) {
                            case 'ImageRecord':
                                return (
                                    <Image
                                        alt=""
                                        placeholder="blur"
                                        src={(record as any).image.url}
                                        width={(record as any).image.width}
                                        height={(record as any).image.height}
                                        blurDataURL={(record as any).image.blurUpThumb}
                                    />
                                )
                            default: 
                                return null
                        }
                    }}
                />
            </Content>
        </>
    )
}

export default Blog