'use client'

import { MouseEvent, useState } from 'react'
import Editor from '@monaco-editor/react'
import { PostMetaData } from '../../../../../types'

type Props = {
  data: PostMetaData
  slug: string
  content: string
}

export function PostEditor ({ data, slug, content }: Props) {
  const [postContent, setPostContent] = useState(content)

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const content = postContent
    const body = { postData: content, slug }

    fetch('/api/post', { method: 'POST', body: JSON.stringify(body) })
      .then(d => d.json())
      .then(a => console.log(a))
    console.log(body)
  }

  return (
    <div style={{ display: 'flex' }}>
      <Editor
        height='90vh'
        width='70%'
        defaultLanguage='markdown'
        defaultValue={postContent}
        onChange={(e: any) => setPostContent(e)}
        theme='vs-dark'
        loading={<h1>Cargando...</h1>}
        options={{ minimap: { enabled: false } }}
      />
      <div style={{ margin: '0px 0px 10px 10px', width: '30%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <label style={{ marginBottom: 5 }}>Titulo</label>
          <input type='text' value={data.title} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <label style={{ marginBottom: 5 }}>Descripción</label>
          <input type='text' value={data.description} />
        </div>
        <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', marginBottom: 10 }}>
          <label>Activo</label>
          <input type='checkbox' defaultChecked={data.active} />
        </div>
        <button onClick={handleClick}>Guardar</button>
      </div>
    </div>

  )
}
