// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { NavigationLinkType } from 'src/types'

export const SITE_TITLE = 'Alex. - Aleksandra Lazarević - UI UX Developer'
export const SITE_TITLE_PREFIX = 'Alex. -'
export const SITE_DESCRIPTION = 'Aleksandra Lazarević - alexuix - UI UX Developer'
export const SITE_OWNER = 'Aleksandra Lazarević'
export const NAVIGATION_LINKS: NavigationLinkType[] = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/#work' },
]
export const CONTACT_EMAIL_ADDRESS = 'hello@alexuix.design'
export const FOOTER_LINKS = [
  { label: 'Dribble', href: 'https://dribbble.com/aleksandralazarevic' },
  { label: 'Behance', href: 'https://www.behance.net/alexuix' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexlazarevic/' },
]
export const SITE_URL = import.meta.env.ASTRO_WEBSITE_URL
