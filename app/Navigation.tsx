import Link from 'next/link'
export function Navigation () {
  const LinkStyle = { color: 'white', textDecoration: 'none' }
  return (
    <nav style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '600px', display: 'flex', justifyContent: 'space-around' }}>
        <Link style={LinkStyle} href='/'>Inicio</Link>
        <Link style={LinkStyle} href='/personal'>Coach personal</Link>
        <Link style={LinkStyle} href='/executive'>Coach ejecutivo</Link>
        <Link style={LinkStyle} href='/blog'>Blog</Link>
        <Link style={LinkStyle} href='/about'>Sobre mi</Link>
        <Link style={LinkStyle} href='/contact'>Contacto</Link>
      </div>
    </nav>
  )
}
