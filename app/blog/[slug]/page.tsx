import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import { getPostDataBySlug } from '../../../services/blog.services'

type Props = {
  params: {
    slug: string
  }
}

export default function PostPage ({ params }: Props) {
  const slug = params.slug
  const postData = getPostDataBySlug(slug)
  return (
    <>
      <Link href='/blog'>Atrás</Link>
      <h1>{postData.data.title}</h1>
      <Markdown
        options={{
          overrides: {
            Link: {
              component: Link
            }
          }
        }}
      >{postData.content}
      </Markdown>
    </>
  )
}
