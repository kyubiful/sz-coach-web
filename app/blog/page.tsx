import { getPostsMetadata } from '../../services/blog.services'
import Link from 'next/link'

const PostCard = (post: any) => {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <Link href={`/blog/${post.slug}`}>{post.slug}</Link>
    </div>
  )
}

export default async function BlogPage () {
  const postsMetadata = await getPostsMetadata()
  return (
    <div>
      {postsMetadata && postsMetadata.map((post: any, key) => <PostCard key={key} {...post} />)}
    </div>
  )
}
