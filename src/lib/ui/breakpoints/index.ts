const bp = ["375px", "768px", "1024px", "1280px", "1920px"] as const

export const breakpoints = Object.assign(bp, {
  mobile: bp[breakpointNameToOrderIndex("mobile")],
  portrait: bp[breakpointNameToOrderIndex("portrait")],
  tablet: bp[breakpointNameToOrderIndex("tablet")],
  laptop: bp[breakpointNameToOrderIndex("laptop")],
  desktop: bp[breakpointNameToOrderIndex("desktop")],
})

export const breakpointMediaQueries = {
  desktop: "(min-width: 1920px)",
  laptop: "(min-width: 1280px) and (max-width: 1919.99px)",
  tablet: "(min-width: 1024px) and (max-width: 1279.99px)",
  portrait: "(min-width: 768px) and (max-width: 1023.99px)",
  mobile: "(max-width: 767.99px)",
} as const

export type BreakpointName = keyof typeof breakpointMediaQueries

export function breakpointNameToOrderIndex(name: BreakpointName) {
  if (name === "desktop") return 4
  if (name === "laptop") return 3
  if (name === "tablet") return 2
  if (name === "portrait") return 1
  if (name === "mobile") return 0
  throw new Error(`Unknown breakpoint name: ${name}`)
}

export function up(breakpoint: BreakpointName) {
  const index = breakpointNameToOrderIndex(breakpoint)
  if (index === 4) return `(min-width: ${breakpoints[index]})`
  return `(min-width: ${breakpoints[index + 1]})`
}
