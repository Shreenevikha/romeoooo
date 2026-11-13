import { useState } from 'react'
import { Sparkles, Heart } from 'lucide-react'
import confetti from 'canvas-confetti'
import { romanticAudio } from '../../utils/audioEngine'

export function HeroAnime() {
  const [pulsing, setPulsing] = useState(false)
  const [pulseCount, setPulseCount] = useState(1)

  const handleHeartbeat = () => {
    setPulsing(true)
    setPulseCount((prev) => prev + 1)
    romanticAudio.playSparkle()

    confetti({
      particleCount: 50,
      spread: 75,
      origin: { y: 0.5 },
      colors: ['#ff2a6d', '#ffb7c5', '#ffd166', '#fff2d6'],
    })

    setTimeout(() => setPulsing(false), 500)
  }

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 pt-24 pb-12 overflow-hidden">
      {/* Anime Ribbon Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff2a6d]/40 bg-[#070a14]/80 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,42,109,0.3)] animate-in fade-in duration-700">
        <span className="text-xs font-bold text-[#ff2a6d]">🌸 運命</span>
        <span className="w-1 h-1 rounded-full bg-[#dfc17b]" />
        <span className="font-['Cinzel'] text-xs text-[#dfc17b] tracking-widest font-semibold uppercase">
          DESTINED FOR RAGHAV
        </span>
        <span className="text-xs text-[#ffb7c5]">✨</span>
      </div>

      {/* Main Title Header */}
      <div className="max-w-3xl mx-auto space-y-3">
        <p className="font-sans text-sm tracking-[0.25em] text-[#ff7597] font-semibold uppercase">
          「君と私の物語」• The Story of You & Me
        </p>

        <h1 className="font-['Cinzel'] text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f5eedc] leading-tight">
          Hey <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7597] via-[#ff2a6d] to-[#ffd166]">Raghav</span> ✨
        </h1>

        <p className="font-['Cormorant_Garamond'] italic text-xl sm:text-2xl text-[#f7e7c4]/90 max-w-xl mx-auto leading-relaxed pt-2">
          “In every anime universe, timeline, and plotline... I’d still fall for you every single time.”
        </p>
      </div>

      {/* Interactive Red String of Fate (赤い糸) Card */}
      <div className="mt-8 max-w-md mx-auto w-full px-4">
        <div
          onClick={handleHeartbeat}
          className={`cursor-pointer p-6 rounded-3xl glass-card border border-[#ff2a6d]/40 hover:border-[#ffd166]/70 transition-all duration-300 relative text-center group ${
            pulsing ? 'scale-105 shadow-[0_0_35px_rgba(255,42,109,0.6)]' : 'shadow-xl'
          }`}
        >
          {/* Subtle glowing thread across card */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ff2a6d]/60 to-transparent pointer-events-none -translate-y-1/2" />

          <div className="flex items-center justify-between mb-3 text-[11px] text-[#dfc17b] font-sans">
            <span className="flex items-center gap-1 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#ff2a6d]" />
              赤い糸 • Red String of Fate
            </span>
            <span className="text-[#ffb7c5]">Tap to pulse heart 💕</span>
          </div>

          {/* Connected Hearts */}
          <div className="py-2 flex items-center justify-center gap-4 relative z-10">
            <div className="flex flex-col items-center">
              <span className="text-xs font-['Cinzel'] text-[#dfc17b] font-bold">Raghav</span>
              <Heart className={`w-8 h-8 text-[#ff2a6d] fill-[#ff2a6d] transition-transform duration-200 ${pulsing ? 'scale-125' : 'group-hover:scale-110'}`} />
            </div>

            <div className="flex items-center gap-1">
              <div className="w-8 sm:w-12 h-0.5 bg-[#ff2a6d] animate-pulse" />
              <span className="text-xs text-[#ffd166]">∞</span>
              <div className="w-8 sm:w-12 h-0.5 bg-[#ff2a6d] animate-pulse" />
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs font-['Cinzel'] text-[#dfc17b] font-bold">Kanmani</span>
              <Heart className={`w-8 h-8 text-[#ff7597] fill-[#ff7597] transition-transform duration-200 ${pulsing ? 'scale-125' : 'group-hover:scale-110'}`} />
            </div>
          </div>

          <p className="mt-2 text-xs text-[#f5eedc]/75 font-sans">
            Sync Level: <strong className="text-[#ffd166]">{pulseCount * 10}% Connected</strong> • Connected by Destiny
          </p>
        </div>
      </div>
    </section>
  )
}

