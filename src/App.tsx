import { AnimeSky } from './components/effects/AnimeSky'
import { MinimalNavbar } from './components/anime/MinimalNavbar'
import { HeroAnime } from './components/anime/HeroAnime'
import { CharacterProfile } from './components/anime/CharacterProfile'
import { PolaroidMemories } from './components/anime/PolaroidMemories'
import { LoveBentoCapsules } from './components/anime/LoveBentoCapsules'
import { AnimeLoveLetter } from './components/anime/AnimeLoveLetter'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#060714] text-[#f5eedc] selection:bg-[#ff2a6d] selection:text-[#ffffff] pb-12">
      {/* Anime Sky Animation: Shooting Stars & Floating Sakura Petals */}
      <AnimeSky />

      {/* Sleek Floating Navbar */}
      <MinimalNavbar />

      {/* Main Minimal Flow */}
      <main className="relative z-10 space-y-4">
        {/* Hero: Red String of Fate & Personal Intro */}
        <HeroAnime />

        {/* Raghav's Anime Character Card */}
        <CharacterProfile />

        {/* Interactive Memory Polaroids (With Real Photo Upload Option) */}
        <PolaroidMemories />

        {/* Secret Love Bento Capsules (Tap to Flip) */}
        <LoveBentoCapsules />

        {/* Sweet Heartfelt Note & Confetti Seal */}
        <AnimeLoveLetter />
      </main>

      {/* Simple Sweet Footer */}
      <footer className="relative z-10 text-center py-8 text-xs text-[#dfc17b]/60 font-sans border-t border-white/5 mt-16">
        <p>Made with love for Raghav • 「君のことが大好き」</p>
      </footer>
    </div>
  )
}
