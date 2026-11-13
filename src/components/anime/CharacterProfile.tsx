import { Zap, Sparkles, Heart } from 'lucide-react'
import { RAGHAV_STATS } from '../../data/animeContent'

export function CharacterProfile() {
  return (
    <section className="py-14 px-4 sm:px-6 max-w-3xl mx-auto relative">
      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[#ff2a6d]/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
        {/* Top Gamer Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a6d] animate-ping" />
            <span className="font-['Cinzel'] text-xs font-bold uppercase tracking-wider text-[#dfc17b]">
              CHARACTER STATUS • PROFILE
            </span>
          </div>

          <span className="text-[11px] font-sans px-3 py-1 rounded-full bg-[#540f21]/70 border border-[#ff2a6d]/40 text-[#ffb7c5] font-semibold">
            {RAGHAV_STATS.title}
          </span>
        </div>

        {/* Player Name and Level */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#f5eedc]">
                {RAGHAV_STATS.playerName}
              </h2>
              <span className="font-sans text-lg text-[#ff7597] font-bold">
                {RAGHAV_STATS.japaneseName}
              </span>
            </div>
            <p className="text-xs text-[#dfc17b] font-sans mt-0.5">
              Guild: {RAGHAV_STATS.guild}
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#070a14]/90 border border-[#dfc17b]/30">
            <Sparkles className="w-4 h-4 text-[#ffd166]" />
            <span className="font-['Cinzel'] text-xs font-bold text-[#ffd166]">
              RANK: S-TIER BOYFRIEND
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {RAGHAV_STATS.stats.map((st, idx) => (
            <div key={idx} className="p-3 rounded-2xl bg-[#070a14]/70 border border-white/5 text-center">
              <span className="text-[10px] uppercase font-sans text-[#f5eedc]/60 block mb-1">
                {st.name}
              </span>
              <span className="font-['Cinzel'] text-lg font-bold text-[#ffd166] block">
                {st.value}
              </span>
              <span className="text-[9px] font-mono text-[#ff7597] font-semibold">
                [{st.level}]
              </span>
            </div>
          ))}
        </div>

        {/* Special Moves / Passives */}
        <div className="space-y-3">
          <span className="font-['Cinzel'] text-xs uppercase tracking-wider text-[#dfc17b] font-bold block mb-2 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#ff2a6d]" />
            Equipped Passives & Special Moves
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {RAGHAV_STATS.abilities.map((ab, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-[#070a14]/80 border border-white/5">
                <span className="text-xs font-bold text-[#f5eedc] block mb-1">
                  {ab.name}
                </span>
                <p className="text-[11px] text-[#f5eedc]/70 leading-relaxed font-sans">
                  {ab.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Ribbon */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#dfc17b]">
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-[#ff2a6d] fill-current" />
            100% Irreplaceable in My Heart
          </span>
          <span className="font-mono text-[10px] text-white/40">
            SYSTEM: DESTINED MATCH
          </span>
        </div>
      </div>
    </section>
  )
}
