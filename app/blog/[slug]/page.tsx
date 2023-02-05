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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href='/blog'>Atrás</Link>
        <Link href={`/blog/${slug}/edit`} prefetch={false}>Editar</Link>
      </div>
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
