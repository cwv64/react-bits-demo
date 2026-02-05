import { useState } from 'react'
import {
  GradientText,
  ShinyButton,
  BlurFade,
  AnimatedBeam,
  MagneticButton,
  GlowingCard,
  TypewriterEffect,
  FloatingDock,
  Meteors,
  Ripple,
} from 'react-bits'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <Meteors number={20} />
        <BlurFade delay={0.2}>
          <GradientText className="title">
            React Bits Demo
          </GradientText>
        </BlurFade>
        
        <BlurFade delay={0.4}>
          <TypewriterEffect
            words="Beautiful animated components for modern React apps"
            className="subtitle"
          />
        </BlurFade>

        <BlurFade delay={0.6}>
          <div className="button-group">
            <ShinyButton onClick={() => setCount(count + 1)}>
              Click me! ({count})
            </ShinyButton>
            <MagneticButton>
              Magnetic Effect
            </MagneticButton>
          </div>
        </BlurFade>
      </section>

      {/* Cards Section */}
      <section className="cards">
        <BlurFade delay={0.8}>
          <GlowingCard className="card">
            <h3>✨ Animated Components</h3>
            <p>Beautiful pre-built components with smooth animations and modern effects.</p>
          </GlowingCard>
        </BlurFade>

        <BlurFade delay={1.0}>
          <GlowingCard className="card">
            <h3>🎨 Gradient Effects</h3>
            <p>Eye-catching gradients and color transitions that make your UI pop.</p>
          </GlowingCard>
        </BlurFade>

        <BlurFade delay={1.2}>
          <GlowingCard className="card">
            <h3>🚀 Easy to Use</h3>
            <p>Drop-in components that work out of the box with minimal configuration.</p>
          </GlowingCard>
        </BlurFade>
      </section>

      {/* Ripple Effect */}
      <section className="ripple-section">
        <Ripple />
        <div className="ripple-content">
          <h2>Interactive Effects</h2>
          <p>Hover and click to see the magic</p>
        </div>
      </section>

      {/* Floating Dock */}
      <FloatingDock
        items={[
          { icon: '🏠', label: 'Home', href: '#' },
          { icon: '📊', label: 'Dashboard', href: '#' },
          { icon: '⚙️', label: 'Settings', href: '#' },
          { icon: '💬', label: 'Chat', href: '#' },
        ]}
      />
    </div>
  )
}

export default App
