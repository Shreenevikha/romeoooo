import { useEffect, useRef } from 'react'

export function AnimeSky() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Stars
    const starCount = 70
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.7,
      size: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.6 + 0.3,
      speed: Math.random() * 0.02 + 0.005,
    }))

    // Drifting Sakura Petals
    const petalCount = Math.min(25, Math.floor(width / 45))
    const petals = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 5 + 3,
      speedX: Math.random() * 0.8 + 0.3,
      speedY: Math.random() * 0.7 + 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      alpha: Math.random() * 0.5 + 0.3,
      color: Math.random() > 0.4 ? '#ffb7c5' : '#ffd1dc',
    }))

    // Shooting Stars (Your Name style meteor streaks)
    interface ShootingStar {
      x: number
      y: number
      len: number
      speed: number
      angle: number
      alpha: number
      life: number
      maxLife: number
    }

    let shootingStars: ShootingStar[] = []

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.8 + width * 0.1,
        y: Math.random() * height * 0.3,
        len: Math.random() * 80 + 70,
        speed: Math.random() * 7 + 9,
        angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2, // ~45 deg downward
        alpha: 1,
        life: 0,
        maxLife: Math.random() * 30 + 35,
      })
    }

    let nextShootTime = 80
    let time = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      time += 0.02

      // Twilight Indigo / Midnight Sky Gradient (Makoto Shinkai anime night)
      const sky = ctx.createLinearGradient(0, 0, 0, height)
      sky.addColorStop(0, '#060714')
      sky.addColorStop(0.5, '#0b0f26')
      sky.addColorStop(0.85, '#221028') // Warm sunset wine blush
      sky.addColorStop(1, '#090a16')
      ctx.fillStyle = sky
      ctx.fillRect(0, 0, width, height)

      // Ambient Horizon Glow (Warm wine & champagne dusk light)
      const glow = ctx.createRadialGradient(width * 0.5, height, 40, width * 0.5, height, width * 0.7)
      glow.addColorStop(0, 'rgba(230, 43, 76, 0.22)')
      glow.addColorStop(0.5, 'rgba(223, 193, 123, 0.08)')
      glow.addColorStop(1, 'rgba(6, 7, 20, 0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, width, height)

      // Render Twinkling Stars
      stars.forEach((s) => {
        const pulse = Math.sin(time * 60 * s.speed)
        const alpha = Math.max(0.15, s.alpha + pulse * 0.3)
        ctx.fillStyle = '#ffffff'
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalAlpha = 1.0

      // Spawn periodic shooting stars
      nextShootTime--
      if (nextShootTime <= 0) {
        createShootingStar()
        nextShootTime = Math.floor(Math.random() * 120 + 90) // Every few seconds
      }

      // Render Shooting Stars
      shootingStars = shootingStars.filter((st) => {
        st.life++
        st.x += Math.cos(st.angle) * st.speed
        st.y += Math.sin(st.angle) * st.speed
        st.alpha = Math.max(0, 1 - st.life / st.maxLife)

        const tailX = st.x - Math.cos(st.angle) * st.len
        const tailY = st.y - Math.sin(st.angle) * st.len

        const grad = ctx.createLinearGradient(tailX, tailY, st.x, st.y)
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)')
        grad.addColorStop(0.7, `rgba(255, 183, 197, ${st.alpha * 0.7})`)
        grad.addColorStop(1, `rgba(255, 255, 255, ${st.alpha})`)

        ctx.strokeStyle = grad
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(st.x, st.y)
        ctx.stroke()

        // Glistening star head
        ctx.fillStyle = `rgba(255, 255, 255, ${st.alpha})`
        ctx.beginPath()
        ctx.arc(st.x, st.y, 2, 0, Math.PI * 2)
        ctx.fill()

        return st.life < st.maxLife
      })

      // Render Floating Sakura Blossoms
      petals.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY
        p.rotation += p.rotSpeed

        if (p.x > width + 20) p.x = -20
        if (p.y > height + 20) {
          p.y = -20
          p.x = Math.random() * width
        }

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha

        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.quadraticCurveTo(p.size, -p.size * 0.6, p.size * 1.5, 0)
        ctx.quadraticCurveTo(p.size, p.size * 0.6, 0, 0)
        ctx.fill()
        ctx.restore()
      })
      ctx.globalAlpha = 1.0

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}

