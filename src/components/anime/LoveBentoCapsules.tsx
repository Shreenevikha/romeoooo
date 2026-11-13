import { useState } from 'react'
import { Sparkles, Heart } from 'lucide-react'
import { LOVE_CAPSULES } from '../../data/animeContent'
import { romanticAudio } from '../../utils/audioEngine'

export function LoveBentoCapsules() {
  const [flippedIds, setFlippedIds] = useState<Record<string, boolean>>({})

  const handleFlip = (id: string) => {
    setFlippedIds((prev) => ({ ...prev, [id]: !prev[id] }))
    romanticAudio.playChime(587.33, 0.03, 0.5)
  }

  return (
    <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto relative">
      {/* Header */}
      <div className="text-center space-y-2 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#ff2a6d]/30 bg-[#070a14]/80 text-[#ff7597] text-xs font-sans tracking-widest uppercase">
          <span>🍱 秘密 • SECRET BENTO CAPSULES</span>
        </div>

        <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#f5eedc]">
          Tap to Open My Whispers
        </h2>

        <p className="font-['Cormorant_Garamond'] italic text-base sm:text-lg text-[#ffd166]/90 max-w-md mx-auto">
          “Four little secrets saved exclusively for Raghav’s eyes.”
        </p>
      </div>

      {/* 4 Flip Bento Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {LOVE_CAPSULES.map((cap) => {
          const isFlipped = !!flippedIds[cap.id]

          return (
            <div
              key={cap.id}
              onClick={() => handleFlip(cap.id)}
              className="cursor-pointer perspective-[1000px] min-h-[230px] sm:min-h-[250px] flex"
              title="Tap to flip capsule"
            >
              <div
                className={`relative w-full h-full rounded-3xl transition-transform duration-500 [transform-style:preserve-3d] flex flex-col ${isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
              >
                {/* FRONT (Mystery Bento) */}
                <div className="absolute inset-0 [backface-visibility:hidden] p-6 rounded-3xl glass-card border border-[#ff2a6d]/30 flex flex-col justify-between hover:border-[#ffd166]/60 transition-all shadow-lg group">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{cap.frontIcon}</span>
                    <span className="text-[10px] uppercase font-['Cinzel'] tracking-wider text-[#dfc17b] px-2.5 py-0.5 rounded-full bg-[#dfc17b]/10 border border-[#dfc17b]/20">
                      {cap.frontTag}
                    </span>
                  </div>

                  <div className="my-auto py-2">
                    <h3 className="font-['Cinzel'] text-lg sm:text-xl font-bold text-[#f5eedc] group-hover:text-[#ffd166] transition-colors leading-snug">
                      {cap.frontTitle}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#ff7597] font-sans pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#ff2a6d]" />
                      Tap to unwrap
                    </span>
                    <span>→</span>
                  </div>
                </div>

                {/* BACK (Revealed Love Message) */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 rounded-3xl glass-card-wine border-2 border-[#ff2a6d]/50 flex flex-col justify-between shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-['Cinzel'] text-xs font-bold text-[#ffd166] uppercase tracking-wider">
                      {cap.backTitle}
                    </span>
                    <Heart className="w-3.5 h-3.5 text-[#ff2a6d] fill-current" />
                  </div>

                  <p className="font-['Cormorant_Garamond'] italic text-sm sm:text-base text-[#fff2d6] leading-relaxed my-auto py-2">
                    “{cap.backMessage}”
                  </p>

                  <div className="text-[10px] text-[#ffb7c5] font-sans text-right pt-2 border-t border-white/5">
                    Tap to flip back ↩
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
