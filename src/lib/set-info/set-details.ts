import { edgeOfEternities } from './sets/edge-of-eternities'

/**
 * @field examples = array of image paths for related cards
 */
type SetMechanic = {
  name: string
  description: string
  examples: string[]
}

type SetDetails = {
  [key: string]: {
    mechanics: SetMechanic[]
  }
}

const setDetails: SetDetails = {
  'Edge Of Eternities': edgeOfEternities,
}

export default setDetails
