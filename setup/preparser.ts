// setup/preparser.ts
import { definePreparserSetup } from '@slidev/types'

function toList(value: unknown): string[] {
  if (value == null)
    return []
  return (Array.isArray(value) ? value : [value]).map(String)
}

export default definePreparserSetup(() => {
  const audience = process.env.SLIDEV_AUDIENCE
  return [
    {
      async transformSlide(content, frontmatter) {
        const allowed = toList(frontmatter.audienceAllowed)
        const hidden = toList(frontmatter.audienceHidden)

        // se audienceAllowed è definito, serve il match
        const isAllowed = allowed.length === 0
          || allowed.includes('all')
          || (!!audience && allowed.includes(audience))

        const isHidden = !!audience && hidden.includes(audience)

        if (isHidden || !isAllowed)
          frontmatter.hide = true

        return content
      },
    },
  ]
})