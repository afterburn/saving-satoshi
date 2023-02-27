'use client'

import Link from 'next/link'

import { siteConfig } from 'config/site'
import { NavItem } from 'types'
import UserButton from './Navbar/UserButton'
import { useLang } from 'hooks'
import { i18n } from 'config/i18n'

export default function Topbar({ items }: { items: NavItem[] }) {
  const lang = useLang()
  return (
    <div className="absolute left-0 top-0 w-full">
      <div className="m-auto flex items-center justify-between px-6 py-4 text-white">
        <Link
          href={`/${lang === i18n.defaultLocale ? '' : lang}`}
          className="transition duration-150 ease-in-out hover:opacity-75"
        >
          <h1 className="text-xl md:text-3xl">{siteConfig.name}</h1>
        </Link>
        <nav className="flex items-center text-xl md:text-2xl">
          {items?.length
            ? items?.map((item, idx) => (
                <Link
                  key={idx}
                  href={
                    `${lang === i18n.defaultLocale ? '' : lang}` + item.href
                  }
                  className="mr-2 text-white text-opacity-75 transition duration-150 ease-in-out hover:text-opacity-100"
                >
                  {item.title}
                </Link>
              ))
            : null}
          <UserButton />
        </nav>
      </div>
    </div>
  )
}
