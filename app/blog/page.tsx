import { getPostsMetadata } from '../../services/blog.services'
import Link from 'next/link'

const PostCard = (post: any) => {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <div style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: 20, padding: '20px 50px', width: '500px', marginBottom: 10 }}>
        <p style={{ color: 'black', fontSize: '30px' }}>{post.title}</p>
        <p style={{ color: 'black', fontSize: '16px' }}>{post.description}</p>
      </div>
    </Link>
  )
}

export default async function BlogPage () {
  const postsMetadata = getPostsMetadata()
  return (
    <div style={{ padding: '20px' }}>
      {postsMetadata && postsMetadata.map((post: any, key) => <PostCard key={key} {...post} />)}
    </div>
  )
}
