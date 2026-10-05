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
        // variabile non definita: mostra tutto
        if (!audience)
          return content

        const allowed = toList(frontmatter.audienceAllowed)
        const hidden = toList(frontmatter.audienceHidden)

        const isHidden = hidden.includes(audience)
        const isAllowed = allowed.length === 0
          || allowed.includes('all')
          || allowed.includes(audience)

        if (isHidden || !isAllowed)
          frontmatter.hide = true

        return content
      },
    },
  ]
})