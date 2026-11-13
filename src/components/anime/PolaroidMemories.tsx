import { Camera } from 'lucide-react'
import { COUPLE_PHOTOS } from '../../data/animeContent'

export function PolaroidMemories() {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto relative">
      {/* Header */}
      <div className="text-center space-y-2 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#ff2a6d]/30 bg-[#070a14]/80 text-[#ff7597] text-xs font-sans tracking-widest uppercase">
          <Camera className="w-3.5 h-3.5 text-[#ff2a6d]" />
          <span>OUR CORE MEMORIES • 📸</span>
        </div>

        <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#f5eedc]">
          Snapshots of You & Me
        </h2>

        <p className="font-['Cormorant_Garamond'] italic text-base sm:text-lg text-[#ffd166]/90 max-w-md mx-auto">
          “Every second spent with you is a memory I never want to forget.”
        </p>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-items-center">
        {COUPLE_PHOTOS.map((item) => (
          <div
            key={item.id}
            className={`w-full max-w-[310px] bg-[#fbf9f5] text-[#1a1a24] p-4 pb-6 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.85)] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 relative group ${item.rotation}`}
          >
            {/* Washi Tape Graphic */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#ff2a6d]/30 backdrop-blur-xs border-y border-[#ff2a6d]/40 rotate-1 rounded-xs pointer-events-none" />

            {/* Photo Frame Container */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#161b2e] mb-3 shadow-inner">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget
                  if (!target.src.includes('/images/')) {
                    target.src = `/images${item.image}`
                  } else if (!target.src.endsWith('.jpeg')) {
                    target.src = `${target.src}.jpeg`
                  }
                }}
              />
            </div>

            {/* Polaroid Handwritten Caption */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-['Cinzel'] font-bold text-sm text-[#11131c]">
                  {item.title}
                </span>
                <span className="text-base">{item.emoji}</span>
              </div>

              <p className="font-['Caveat'] text-lg text-[#4a4254] leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
