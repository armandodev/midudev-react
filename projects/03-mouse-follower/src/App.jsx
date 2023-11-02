import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Pointer move
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      setPosition({ x: 0, y: 0 })
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  })

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgb(0 0 0 / 50%)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
