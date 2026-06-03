export const metadata = { title: 'Yakında — Dimli' }

export default function Maintenance() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#0a0f1a',
      color: '#fff',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
          Dimli
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>Çok yakında sizlerleyiz.</p>
      </div>
    </div>
  )
}
