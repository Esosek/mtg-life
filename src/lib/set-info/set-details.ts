import { edgeOfEternities } from './sets/edge-of-eternities'

export type SetDetail = {
  mechanics: SetMechanic[]
  archetypes: SetArchetype[]
}

/**
 * @field examples = array of image paths for related cards
 */
type SetMechanic = {
  name: string
  description: { en: string; cs?: string }
  examples: string[]
}

type SetArchetype = {
  colors: '{W}{U}' | '{U}{B}' | '{B}{R}' | '{R}{G}' | '{G}{W}' | '{W}{B}' | '{U}{R}' | '{B}{G}' | '{R}{W}' | '{G}{U}'
  name: {
    en: string
    cs?: string
  }
  keywords: {
    en: string[]
    cs?: string[]
  }
  description: {
    en: string
    cs?: string
  }
  signatureCards: string[]
}

const setDetails: { [key: string]: SetDetail } = {
  'Edge Of Eternities': edgeOfEternities,
}

export default setDetails
