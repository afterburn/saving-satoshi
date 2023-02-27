import { usePathname } from 'next/navigation'

export const useLang = () => {
  const pathName = usePathname()
  const parts = pathName.split('/').filter((p) => p)

  if (parts[0] === 'nl') {
    return parts.shift()
  } else {
    parts.unshift('en')
    return parts.shift()
  }
}
