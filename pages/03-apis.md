---
layout: image
image: '/images/cover-apis-anatomy.png'
preload: true
transition: slide-up
---

<div class="slidev-layout h-full grid section">
    <div class="my-auto">
        <h1 style="color: black; background-color: white; margin: 110px; padding-left: 14px; padding-right: 14px">anatomia delle API</h1>
    </div>
</div>

---
layout: default
---

# Anatomia delle API

<!-- | API | Scopo | Documentazione |
|-----|-------|----------------|
| **Summarizer API** | Riassume testi lunghi con pochi prompt | <https://developer.chrome.com/docs/ai/summarizer-api> |
| **Translator API** | Traduzione in tempo reale | <https://developer.chrome.com/docs/ai/translator-api> |
| **Language Detection** | Rileva lingua di input | <https://developer.chrome.com/docs/ai/language-detection> |
| **Prompt API** | Invia prompt in linguaggio naturale | <https://developer.chrome.com/docs/ai/prompt-api> |
| **Writer API** | Genera testo in stile editor | <https://developer.chrome.com/docs/ai/writer-api> |
| **Rewriter API** | Rephrase e miglioramento | <https://developer.chrome.com/docs/ai/rewriter-api> |
| **Proofreader API** | Correggi grammatica e stile | <https://developer.chrome.com/docs/ai/proofreader-api> | -->

| **API** | **Scopo** | **Spec** | 
|---------|-----------|----------|
| **Translator API** | Traduzione in tempo reale | Translation API |
| **Language Detection API** | Rileva lingua di input | Translation API |
| **Summarizer API** | Riassume testi lunghi con pochi prompt | Writing Assistance API |
| **Writer API** | Genera testo in stile editor | Writing Assistance API |
| **Rewriter API** | Rephrase e miglioramento | Writing Assistance API |
| **Prompt API** | Invia prompt in linguaggio naturale | Prompt API |
| **Proofreader API** | Correggi grammatica e stile | Proofreader API |

---
layout: default
---

# Anatomia delle API
## Stato delle API

| **API** | **Web** | **Extensions** |
|---|---|---|
| **Translator API** | Chrome 138 | Chrome 138 |
| **Language Detector API** | Chrome 138 | Chrome 138 |
| **Summarizer API** | Chrome 138 | Chrome 138 |
| **Writer API** | Developer trial | Developer trial |
| **Rewriter API** | Developer trial | Developer trial |
| **Prompt API** | Chrome 148 | Chrome 138 |
| | Origin trial for sampling parameters | Chrome 148 |
| **Proofreader API** | Developer trial | Developer trial |

---
layout: default
---

# Anatomia delle API
## Modelli

| **API**                    | **Model Type**  | **Modality**  |
|----------------------------|-----------------|-------------|
| **Translator API**         | Expert Model    | Text → Text |
| **Language Detector API**  | Expert Model    | Text → Text |
| **Summarizer API**         | Language Model  | Text → Text |
| **Writer API**             | Language Model  | Text → Text |
| **Rewriter API**           | Language Model  | Text → Text |
| **Prompt API**             | Language Model  | Multimodal  |
| **Proofreader API**        | Language Model  | Text → Text |

---
layout: image-right
image: '/images/apis-hardware-req.avif'
backgroundSize: contain
---

# Anatomia delle API
## Requisiti hardware & software

- GPU (+4GB RAM)

- CPU (+16GB RAM & 4 CPU)

- Linux,Windows,MacOS,ChromeOS

- No Android & iOS

---
layout: default
---

# Anatomia delle API
## Design API 

<v-clicks>

- ```.availabile()```

- ```.create()```

- ```.<action>()``` (promise-based)

- ```.<action>Streaming()``` (stream-based)

- ```.destroy()```

</v-clicks>

---
layout: default
---

# Anatomia delle API
## Security & Policy

<v-clicks>

- Non è supportate nei Web Worker

- top-level window (no cross-origin)

- configurazione permessi per iframe (cross-origin)

</v-clicks>

<v-after>

```html
<iframe src="https://cross-origin.valeriocomo.dev/" 
  allow="summarizer,language-model,language-detector,writer,rewriter,proofreader">
</iframe>
```

</v-after>

---
src: ./apis/translation-api.md
---

---
src: ./apis/writing-assistance-api.md
---

---
src: ./apis/prompt-api.md
---

---
src: ./apis/proofreader-api.md
---
