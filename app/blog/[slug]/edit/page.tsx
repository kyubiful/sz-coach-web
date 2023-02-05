import { PostEditor } from './components/PostEditor'
import { getPostDataBySlug } from '../../../../services/blog.services'
import Link from 'next/link'

type Props = {
  params: {
    slug: string
  }
}

export default function PostEditPage ({ params }: Props) {
  const { content, data } = getPostDataBySlug(params.slug)

  return (
    <div>
      <Link href={`/blog/${params.slug}`} prefetch={false}>Atrás</Link>
      <h1>Edit Post Page</h1>
      <PostEditor content={content} slug={params.slug} data={data} />
    </div>
  )
}
