export interface MemoryPhoto {
  id: string
  title: string
  caption: string
  emoji: string
  image: string
  rotation: string
}

// You can easily change these image paths in code to your own photos!
// Example: '/photos/our-photo-1.jpg' or any image URL / local asset
export const COUPLE_PHOTOS: MemoryPhoto[] = [
  {
    id: 'photo-1',
    title: 'The Unfair Smile',
    caption: 'The way your eyes crinkle when you laugh at my silly jokes 🌸',
    emoji: '✨',
    image: '/photo1.jpg',
    rotation: '-rotate-2',
  },
  {
    id: 'photo-2',
    title: 'Late Night Chats',
    caption: 'Talking until 3 AM and neither of us wanting to hang up first 🌙',
    emoji: '🍙',
    image: '/photo2.jpg',
    rotation: 'rotate-2',
  },
  {
    id: 'photo-3',
    title: 'Endless Selfies, Forever Us 🤍',
    caption: 'Countless mirror selfies still loading until our eyes close forever. So stay healthy and get ready for a lifetime of them!🤍',
    emoji: '🏮',
    image: '/photo3.jpg',
    rotation: '-rotate-1',
  },
  {
    id: 'photo-4',
    title: 'Just Us Being Us',
    caption: 'My favorite person, my best friend, and my greatest plot twist 🍜',
    emoji: '💫',
    image: '/photo4.jpg',
    rotation: 'rotate-3',
  },
]

export const RAGHAV_STATS = {
  playerName: "Raghav",
  japaneseName: "ラガヴ",
  title: "S-Rank Player • My Ultimate Boyfriend",
  guild: "Destined Couple • Party of Two",
  stats: [
    { name: "Heart Rate Multiplier", value: "100%", level: "MAX" },
    { name: "Cuteness When Sleepy", value: "9999+", level: "OVERPOWERED" },
    { name: "Patience With Me", value: "100%", level: "IMMENSE" },
    { name: "Cuddle Quality", value: "S-Tier", level: "PERFECT" },
  ],
  abilities: [
    {
      name: "⚡ Unfair Eye Crinkle",
      desc: "Deals 100% emotional damage whenever he looks at me with that smile.",
    },
    {
      name: "🛡️ Safe Haven Aura",
      desc: "Instantly cures 100% of my anxiety with just one hug or voice note.",
    },
    {
      name: "🍙 Food Thief Passive",
      desc: "He proudly claims he’s hungry, eats his food and mine too — an absolute food factory, and somehow the cutest one! 😂❤️.",
    },
  ],
}

export const LOVE_CAPSULES = [
  {
    id: 'cap-1',
    frontIcon: '💌',
    frontTag: 'Secret Thought',
    frontTitle: 'When did I know you were the one?',
    backTitle: 'Vulnerable & Honest',
    backMessage: "It took me some time to fall in love, Raghav... but now, I think I fell in love with you more than myself, and maybe even more than you love me. I can be so happy with you, but to be completely honest... sometimes I do feel alone or lonely with you. I felt that recently, and all I wanted was for us to hold each other closer.",
  },
  {
    id: 'cap-2',
    frontIcon: '🎧',
    frontTag: 'Soundtrack',
    frontTitle: 'What plays in my head when I see you?',
    backTitle: 'My Saiyaara',
    backMessage: "The Saiyaara melody... watching you walk toward me with that soft smile. My most lovable one, my quiet sanctuary, my Saiyaara—that’s my Raghav.",
  },
  {
    id: 'cap-3',
    frontIcon: '🌙',
    frontTag: 'My Weakness',
    frontTitle: 'My favorite thing you do without knowing',
    backTitle: 'The Little Things',
    backMessage: "The way you hold my hand while driving the car, the unexpected flowers, that silent eye contact that says everything, and the nights we speak our thoughts openly with zero filters.",
  },
  {
    id: 'cap-4',
    frontIcon: '🌸',
    frontTag: 'Vow to You',
    frontTitle: 'One promise I will keep forever',
    backTitle: 'Written in the Stars',
    backMessage: "Through every good day, every stressful deadline, and every quiet night when words fall short, I will always choose you, listen to you, and stand by you. You are my person, Raghav.",
  },
]
