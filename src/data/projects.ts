import questionary1 from '../assets/Questionary1.jpg'
import questionary2 from '../assets/Questionary2.jpg'
import questionary3 from '../assets/Questionary3.jpg'
import wordcrate1 from '../assets/Wordcrate1.jpg'
import wordcrate2 from '../assets/Wordcrate2.jpg'
import wordcrate3 from '../assets/Wordcrate3.jpg'
import wordcrate4 from '../assets/Wordcrate4.jpg'
import wordcrate5 from '../assets/Wordcrate5.jpg'
import getALawyer from '../assets/getalawyer.jpg'

export type StoreLink = { label: string; href: string }

export type Project = {
  slug: string
  name: string
  tagline: string
  builtWith: string
  cover: { src: string; alt: string }
  screenshots: { src: string; alt: string }[]
  stores: StoreLink[]
  privacyPath: string
  description: string[]
}

export const projects: Project[] = [
  {
    slug: 'wordcrate',
    name: 'Word Crate',
    tagline: 'A fast-paced daily word puzzle for iOS and Android.',
    builtWith: 'Flutter',
    cover: { src: wordcrate4, alt: 'Word Crate mid-game with the seed word BROWSE and the timer running' },
    screenshots: [
      { src: wordcrate1, alt: 'Word Crate title screen' },
      { src: wordcrate2, alt: 'Word Crate how-to-play instructions' },
      { src: wordcrate3, alt: 'Word Crate empty puzzle grid ready to start' },
      { src: wordcrate4, alt: 'Word Crate mid-game with the seed word BROWSE and the timer running' },
      { src: wordcrate5, alt: 'Word Crate game complete screen showing the words found and score' },
    ],
    stores: [
      { label: 'App Store', href: 'https://apps.apple.com/app/id6783220698' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.silentmonkey.wordcrate' },
    ],
    privacyPath: '/wordcrate/privacy-policy',
    description: [
      'Start with a seed word of five, six or seven letters. Each letter becomes the start of a column, and you have 60 seconds to build a new word in every column before the timer runs out.',
      'Correct words earn points, repeats and mistakes lose them, and a fresh puzzle arrives every day. No ads, no distractions.',
    ],
  },
  {
    slug: 'questionary',
    name: 'Questionary',
    tagline: 'Conversation starters for language learners and curious people.',
    builtWith: 'React Native and Firebase',
    cover: { src: questionary2, alt: 'Questionary category picker with topics like Education, Sport and Dreams' },
    screenshots: [
      { src: questionary1, alt: 'Questionary welcome screen' },
      { src: questionary2, alt: 'Questionary category picker with topics like Education, Sport and Dreams' },
      { src: questionary3, alt: 'Questionary showing a random question for the chosen topic' },
    ],
    stores: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.jatinpuri.Questionary' },
    ],
    privacyPath: '/questionary/privacy-policy',
    description: [
      'Choose a topic such as Education, Environment, Sports or Dreams and receive a random, thought-provoking question to discuss or reflect on.',
      'Whether you are getting to know someone or practising English, Questionary makes the conversation more interesting.',
    ],
  },
]

export type ClientProject = {
  slug: string
  name: string
  client: string
  tagline: string
  builtWith: string
  cover: { src: string; alt: string }
  link: { label: string; href: string }
  description: string[]
}

export const clientWork: ClientProject[] = [
  {
    slug: 'getalawyer',
    name: 'Get A Lawyer',
    client: 'Get A Lawyer NZ',
    tagline: 'An AI-assisted legal marketplace that matches New Zealanders with the right law firm.',
    builtWith: 'Next.js, TypeScript, Tailwind CSS, Claude API and Resend, hosted on Vercel',
    cover: { src: getALawyer, alt: 'Get A Lawyer NZ homepage on desktop and mobile' },
    link: { label: 'Visit getalawyer.co.nz', href: 'https://www.getalawyer.co.nz/' },
    description: [
      'People describe their legal matter once and are connected with trusted firms who can help. Firms receive a summary by email and follow up directly.',
      'Built from the first conversation with the client through to launch: requirements, design, the matching flow, firm onboarding, and email delivery.',
    ],
  },
]
