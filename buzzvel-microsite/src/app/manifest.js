export default function manifest() {
  return {
    name: 'My career at Buzzvel',
    short_name: 'RafaDFB career',
    description: 'An microsite made for Buzzvel team about my working experience.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D0D0D',
    theme_color: '#0D0D0D',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}