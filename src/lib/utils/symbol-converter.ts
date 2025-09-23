import tap from '../../assets/symbols/tap.png'
import black from '../../assets/symbols/black.png'
import blue from '../../assets/symbols/blue.png'
import green from '../../assets/symbols/green.png'
import red from '../../assets/symbols/red.png'
import white from '../../assets/symbols/white.png'
import symbol2 from '../../assets/symbols/symbol_2.png'

type SymbolKey = keyof typeof symbolMap

export function convertTextToSymbols(text: string, size = '1rem'): string {
  return text.replace(/{[^}]+}/g, (match) => {
    const key = match as SymbolKey
    const symbol = symbolMap[key]
    return symbol
      ? `<span class="inline-block"><img src=${symbol.symbol} alt=${symbol.label} class="rounded-full" style="height:${size};width:${size}" /></span>`
      : match
  })
}

const symbolMap = {
  '{T}': { label: 'Tap', symbol: tap },
  '{2}': { label: '2', symbol: symbol2 },
  '{W}': { label: 'White', symbol: white },
  '{U}': { label: 'Blue', symbol: blue },
  '{B}': { label: 'Black', symbol: black },
  '{R}': { label: 'Red', symbol: red },
  '{G}': { label: 'Green', symbol: green },
}
