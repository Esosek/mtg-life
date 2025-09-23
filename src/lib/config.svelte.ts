type Config = {
  language: 'en' | 'cs'
}

const config = $state<Config>({ language: 'en' })

export default config
