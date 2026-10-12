---
layout: image
image: '/images/cover-case-study.png'
preload: true
transition: slide-up
---

<div class="slidev-layout h-full grid section">
    <div class="my-auto">
        <h1 style="color: black; background-color: white; margin: 110px; padding-left: 80px; padding-right: 80px">Casi di studio</h1>
    </div>
</div>

---
layout: section
---

# Editoria

---
layout: image
image: "/images/uc-summarize.gif"
---

---
layout: default
---

# Editoria
### Generare sintesi

- usa Summarize API

- possibilità di generare *key-points* o *tldr* 


---
layout: image
image: "/images/uc-summarize-terra.gif"
---

---
layout: default
---

# Editoria
### Modificare contenuti

- genera un riassunto in una lingua non supportata

- uso combinato di Translation API e Summarize API


---
layout: section
---

# Recensioni

---
layout: image
image: "/images/uc-summarize-reviews.gif"
---

---
layout: two-cols-header
---

# Recensioni
### Riassumere recensioni

::left::

- riassumere le review usando Summarize API

- context-driven summarization

::right::

<v-click>

```javascript
 const promptContext =
      'Summarize the following reviews in 30 words or less.' +
      'Focus on key positives and negatives, such as comfort, maintenance,' +
      'pricing, and cleanliness. Reviews are separated by {end}.' +
      'Give the summary in just one paragraph.';

const reviewSummary = await summarizer.summarize(reviews, {
    context: promptContext
});
```

</v-click>

---
layout: default
audienceHidden: prompt-api
---

# Altri casi d'uso
### Creazione contenuti

- migliorare creazione di contenuti (blog)

- uso combinato di Translation API e Summarize API

- supporto multilingua interattivo

- supporto traduzioni

---
layout: section
---

# Altri casi d'uso

---
layout: full
---

<iframe
  src="https://valeriocomo.dev/blog/2023-05-23-create-more-time/"
  class="absolute inset-0 w-full h-full border-0"
  allow="summarizer"
></iframe>

---
layout: two-cols
---

# Distila

::left::

- Chrome extension

- Features

    - Summarizer

    - Chat (work in progress)


https://bit.ly/distila    

::right::

<img src="/images/distila.png" class="w-full h-full object-contain" />
