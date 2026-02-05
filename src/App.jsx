import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="meteor" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }} />
          ))}
        </div>

        <div className="fade-in">
          <h1 className="title gradient-text">
            React Bits Demo
          </h1>
        </div>

        <div className="fade-in" style={{animationDelay: '0.2s'}}>
          <p className="subtitle typewriter">
            Beautiful animated components for modern React apps
          </p>
        </div>

        <div className="fade-in button-group" style={{animationDelay: '0.4s'}}>
          <button className="shiny-button" onClick={() => setCount(count + 1)}>
            Click me! ({count})
          </button>
          <button className="magnetic-button">
            Magnetic Effect
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards">
        <div className="card glowing-card fade-in" style={{animationDelay: '0.6s'}}>
          <h3>✨ Animated Components</h3>
          <p>Beautiful pre-built components with smooth animations and modern effects.</p>
        </div>

        <div className="card glowing-card fade-in" style={{animationDelay: '0.8s'}}>
          <h3>🎨 Gradient Effects</h3>
          <p>Eye-catching gradients and color transitions that make your UI pop.</p>
        </div>

        <div className="card glowing-card fade-in" style={{animationDelay: '1s'}}>
          <h3>🚀 Easy to Use</h3>
          <p>Drop-in components that work out of the box with minimal configuration.</p>
        </div>
      </section>

      {/* Ripple Effect */}
      <section className="ripple-section">
        <div className="ripple-effect">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="ripple-circle" style={{animationDelay: `${i * 0.5}s`}} />
          ))}
        </div>
        <div className="ripple-content">
          <h2>Interactive Effects</h2>
          <p>Hover and click to see the magic</p>
        </div>
      </section>

      {/* Floating Dock */}
      <nav className="floating-dock">
        {[
          { icon: '🏠', label: 'Home' },
          { icon: '📊', label: 'Dashboard' },
          { icon: '⚙️', label: 'Settings' },
          { icon: '💬', label: 'Chat' },
        ].map((item, i) => (
          <button key={i} className="dock-item" title={item.label}>
            {item.icon}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
