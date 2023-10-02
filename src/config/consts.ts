// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { NavigationLinkType } from 'src/types'

export const SITE_TITLE = 'Aleksandra Lazarević - alexuix - UI UX Developer'
export const SITE_DESCRIPTION = 'UI UX Developer'
export const SITE_OWNER = 'Aleksandra Lazarević'
export const NAVIGATION_LINKS: NavigationLinkType[] = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/project' },
  { label: 'Blog', href: '/blog' },
]
export const CONTACT_EMAIL_ADDRESS = 'aleksandra@alexuix.design'
export const FOOTER_LINKS = [
  { label: 'Dribble', href: 'https://dribbble.com/aleksandralazarevic' },
  { label: 'Behance', href: 'https://www.behance.net/alexuix' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexlazarevic/' },
]
export const SITE_URL = import.meta.env.ASTRO_WEBSITE_URL
