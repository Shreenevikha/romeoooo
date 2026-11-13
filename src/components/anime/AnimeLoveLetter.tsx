import { useState } from 'react'
import { Heart } from 'lucide-react'
import confetti from 'canvas-confetti'
import { romanticAudio } from '../../utils/audioEngine'

export function AnimeLoveLetter() {
  const [loved, setLoved] = useState(false)

  const handleCelebrate = () => {
    setLoved(true)
    romanticAudio.playSuccessTone()

    confetti({
      particleCount: 70,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ff2a6d', '#ffb7c5', '#ffd166', '#ffffff', '#e62b4c'],
    })

    setTimeout(() => setLoved(false), 3000)
  }

  return (
    <section className="py-16 px-4 sm:px-6 max-w-2xl mx-auto relative">
      <div className="p-8 sm:p-10 rounded-3xl glass-card-wine border-2 border-[#ff2a6d]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden text-center space-y-6">
        {/* Japanese Stamp in Top Corner */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#dfc17b]/40 bg-[#070a14]/70 text-[#ffd166] text-xs font-sans">
          <span>🌸</span>
          <span className="font-['Cinzel'] tracking-wider uppercase font-bold">A Note From My Heart</span>
          <span>🌸</span>
        </div>

        {/* Salutation */}
        <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#f5eedc]">
          To My Favorite Boy, Raghav
        </h3>

        {/* The Letter Body (Minimal, Punchy & Romantic) */}
        <div className="space-y-4 font-['Cormorant_Garamond'] italic text-lg sm:text-xl text-[#f7e7c4] leading-relaxed max-w-lg mx-auto">
          <p>
            “I don't need a hundred different lives, Raghav. I just want this one—messy, beautiful, full of silly laughs, late night conversations, and you holding my hand.”
          </p>
          <p>
            “Thank you for being my safe space, my biggest supporter, and the person who makes my heart skip a beat every single time you look at me.”
          </p>
        </div>

        <div className="pt-2">
          <p className="font-['Great_Vibes'] text-3xl sm:text-4xl text-[#ffd166]">
            Forever yours, Kanmani
          </p>
          <span className="text-xs font-sans text-[#ffb7c5] tracking-widest block mt-1">
            「永遠にあなたを愛しています」• Loved Forever
          </span>
        </div>

        {/* Big Celebration Love Button */}
        <div className="pt-4">
          <button
            onClick={handleCelebrate}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#ff2a6d] via-[#e62b4c] to-[#ff2a6d] hover:from-[#ff7597] hover:to-[#ff2a6d] text-white font-['Cinzel'] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(255,42,109,0.6)] transition-all hover:scale-105 flex items-center justify-center gap-2.5 mx-auto cursor-pointer"
          >
            <Heart className={`w-4 h-4 text-white fill-white ${loved ? 'animate-ping' : ''}`} />
            <span>{loved ? 'Raghav, I Love You So Much! 💕' : "You're My Favorite Human, Raghav 💕"}</span>
          </button>
        </div>
      </div>
    </section>
  )
}
