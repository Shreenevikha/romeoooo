// Ambient Web Audio Synthesizer for Raghav's Cinematic Experience

class RomanticAudioEngine {
  private ctx: AudioContext | null = null
  private gainNode: GainNode | null = null
  private isUnlocked = false
  private isMutedState = true
  private activeOscillators: OscillatorNode[] = []
  private ambientInterval: number | null = null

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      this.ctx = new AudioCtx()
      this.gainNode = this.ctx.createGain()
      this.gainNode.gain.setValueAtTime(0.04, this.ctx.currentTime)
      this.gainNode.connect(this.ctx.destination)
    }
  }

  public unlock() {
    this.initContext()
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
    this.isUnlocked = true
    this.isMutedState = false
    this.startAmbientHarmony()
  }

  public toggle(): boolean {
    if (!this.isUnlocked) {
      this.unlock()
      return true
    }
    if (this.isMutedState) {
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume()
      }
      this.isMutedState = false
      this.startAmbientHarmony()
      return true
    } else {
      this.isMutedState = true
      this.stopAmbientHarmony()
      return false
    }
  }

  public isMuted(): boolean {
    return this.isMutedState
  }

  public playChime(freq = 523.25, volume = 0.05, duration = 1.2) {
    if (this.isMutedState) return
    this.initContext()
    if (!this.ctx || !this.gainNode) return

    try {
      const osc = this.ctx.createOscillator()
      const noteGain = this.ctx.createGain()
      
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime)
      // Slight pitch sparkle
      osc.frequency.exponentialRampToValueAtTime(freq * 1.01, this.ctx.currentTime + duration)

      noteGain.gain.setValueAtTime(volume, this.ctx.currentTime)
      noteGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration)

      osc.connect(noteGain)
      noteGain.connect(this.gainNode)

      osc.start()
      osc.stop(this.ctx.currentTime + duration)
    } catch {
      // AudioContext policy safe guard
    }
  }

  public playSparkle() {
    const notes = [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 0.035, 1.4)
      }, idx * 110)
    })
  }

  public playSuccessTone() {
    const notes = [440, 554.37, 659.25, 880] // A4, C#5, E5, A5
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 0.04, 1.6)
      }, idx * 130)
    })
  }

  private startAmbientHarmony() {
    if (this.ambientInterval) return
    const chords = [
      [220, 277.18, 329.63, 440], // A major warm
      [196, 246.94, 293.66, 392], // G major
      [174.61, 220, 261.63, 349.23], // F major
      [164.81, 207.65, 246.94, 329.63], // E minor
    ]
    let chordIdx = 0

    const playStep = () => {
      if (this.isMutedState || !this.ctx || !this.gainNode) return
      const currentChord = chords[chordIdx % chords.length]
      chordIdx++

      // Play soft warm pad
      currentChord.forEach((freq) => {
        if (!this.ctx || !this.gainNode) return
        const osc = this.ctx.createOscillator()
        const g = this.ctx.createGain()
        osc.type = 'triangle'
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime)
        
        g.gain.setValueAtTime(0.0001, this.ctx.currentTime)
        g.gain.linearRampToValueAtTime(0.012, this.ctx.currentTime + 1.8)
        g.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 5.5)

        osc.connect(g)
        g.connect(this.gainNode)
        osc.start()
        osc.stop(this.ctx.currentTime + 5.6)
      })
    }

    playStep()
    this.ambientInterval = window.setInterval(playStep, 5800)
  }

  private stopAmbientHarmony() {
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval)
      this.ambientInterval = null
    }
    this.activeOscillators.forEach((osc) => {
      try {
        osc.stop()
      } catch {
        // Safe ignore
      }
    })
    this.activeOscillators = []
  }
}

export const romanticAudio = new RomanticAudioEngine()
