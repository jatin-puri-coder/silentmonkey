import { useEffect } from 'react'

const SITE = 'Silent Monkey'

/** Sets document.title for the current page and restores the site default on unmount. */
export function useTitle(title?: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title ? `${title} · ${SITE}` : `${SITE} · Apps and websites by Jatin Puri`
    return () => {
      document.title = previous
    }
  }, [title])
}
