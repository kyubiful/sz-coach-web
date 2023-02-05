'use client'

import { ChangeEvent, MouseEvent, useState } from 'react'
import Editor from '@monaco-editor/react'
import { PostMetaData } from '../../../../../types'

type Props = {
  data: PostMetaData
  slug: string
  content: string
}

export function PostEditor ({ data, slug, content }: Props) {
  const [postContent, setPostContent] = useState(content)
  const [postTitle, setPostTitle] = useState(data.title)
  const [postDescription, setPostDescription] = useState(data.description)
  const [postActive, setPostActive] = useState(data.active)
  const [responseCode, setResponseCode] = useState(undefined)

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const content = postContent
    const body = { postData: content, slug, title: postTitle, description: postDescription, active: postActive }

    fetch('/api/posts', { method: 'POST', body: JSON.stringify(body) })
      .then(d => d.json())
      .then(a => {
        setResponseCode(a.status)
        setTimeout(() => {
          setResponseCode(undefined)
        }, 1000)
      })
      .catch(e => console.log(e))
  }

  const editTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value)
  }

  const editDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setPostDescription(e.target.value)
  }

  const editActive = () => {
    setPostActive(!postActive)
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
          <input name='title' type='text' value={postTitle} onChange={(e: ChangeEvent<HTMLInputElement>) => editTitle(e)} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <label style={{ marginBottom: 5 }}>Descripción</label>
          <input name='description' type='text' value={postDescription} onChange={(e: ChangeEvent<HTMLInputElement>) => editDescription(e)} />
        </div>
        <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', marginBottom: 10 }}>
          <label>Activo</label>
          <input name='active' type='checkbox' defaultChecked={postActive} onChange={editActive} />
        </div>
        <button onClick={handleClick}>Guardar</button>
      </div>
      {
      responseCode === 200
        ? <div style={{ position: 'absolute', top: '50%', left: '50%', backgroundColor: 'white', padding: '20px 50px', borderRadius: 10, border: '1px solid black' }}>Guardado Correctamente</div>
        : null
      }
    </div>

  )
}
