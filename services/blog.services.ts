import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { PostData, PostMetaData } from '../types'

const root = process.cwd()
const postsFolder = path.join(root, 'posts')

export const getPostsMetadata = () => {
  const posts = fs.readdirSync(postsFolder).filter(file => file.endsWith('.md'))
  return posts.map(post => {
    const postData = fs.readFileSync(path.join(postsFolder, post))
    const { data } = matter(postData)
    return { ...data as PostMetaData, slug: post.replace('.md', '') }
  })
}

export const getPostDataBySlug = (slug: string): PostData => {
  const post = fs.readFileSync(path.join(postsFolder, slug + '.md'), 'utf-8')
  const { data, content } = matter(post)
  return { data, content } as PostData
}

export const savePostDataBySlug = (slug: string, postData: string): void => {
  fs.unlink(path.join(postsFolder, slug + '.md'), () => {
    fs.writeFileSync(path.join(postsFolder, slug + '.md'), postData, { encoding: 'utf-8' })
  })
}
