import React from 'react'
import ReactDOM from 'react-dom/client'
import { SparklesText } from './components/ui/sparkles-text'
import './index.css'

function SparklesDemo() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#1A1208',
      gap: '3rem',
      padding: '2rem'
    }}>
      <SparklesText text="Magic UI" />

      <SparklesText
        text="KakiSplit"
        colors={{ first: "#B8FF00", second: "#FF2D7A" }}
        className="text-5xl"
      />

      <SparklesText
        text="Split Bills Lah"
        colors={{ first: "#00FFD1", second: "#FF6B1A" }}
        sparklesCount={15}
        className="text-4xl"
      />

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p style={{ color: '#F5F0E8', fontSize: '0.9rem', marginBottom: '1rem' }}>
          ✅ SparklesText component installed successfully!
        </p>
        <p style={{ color: '#8C7B65', fontSize: '0.8rem' }}>
          Import it in your App.jsx: <code style={{ background: '#2a1f0f', padding: '2px 6px', borderRadius: '3px' }}>
            import &#123; SparklesText &#125; from './components/ui/sparkles-text'
          </code>
        </p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SparklesDemo />
  </React.StrictMode>,
)
