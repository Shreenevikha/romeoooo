import { useState } from 'react'
import { Volume2, VolumeX, Heart } from 'lucide-react'
import { romanticAudio } from '../../utils/audioEngine'
import confetti from 'canvas-confetti'

export function MinimalNavbar() {
  const [isAudioActive, setIsAudioActive] = useState(false)

  const toggleAudio = () => {
    const active = romanticAudio.toggle()
    setIsAudioActive(active)
    if (active) {
      romanticAudio.playSparkle()
    }
  }

  const triggerSparkle = () => {
    romanticAudio.playSparkle()
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.1 },
      colors: ['#ff2a6d', '#ffd166', '#ffb7c5'],
    })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 bg-[#060714]/75 backdrop-blur-md border-b border-[#ff2a6d]/15">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div
          onClick={triggerSparkle}
          className="flex items-center gap-2 cursor-pointer group"
          title="Tap to sparkle"
        >
          <div className="w-8 h-8 rounded-full border border-[#ff2a6d]/50 bg-[#540f21]/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Heart className="w-4 h-4 text-[#ff2a6d] fill-[#ff2a6d] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-['Cinzel'] text-xs font-bold text-[#ffd166] tracking-wider">
              For Raghav
            </span>
           
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleAudio}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border transition-all text-xs cursor-pointer ${
              isAudioActive
                ? 'border-[#ff2a6d] bg-[#ff2a6d]/20 text-[#ffd166] shadow-[0_0_15px_rgba(255,42,109,0.4)]'
                : 'border-white/10 bg-[#070a14]/60 text-[#f5eedc]/60 hover:text-[#ffd166]'
            }`}
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#ff2a6d] animate-bounce" />
                <span className="font-sans text-[11px] font-semibold">Sound On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="font-sans text-[11px]">Music</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
