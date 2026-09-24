---
layout: section
---

# Prompt API 

---
layout: default
---

# Prompt API 
### Disponibilità

Abilitare i seguenti flag (< Chrome 148)

```text
chrome://flags/#optimization-guide-on-device-model
```

```text
chrome://flags/#prompt-api-for-gemini-nano-multimodal-input
```

Abilitare Gemma 4 (sperimentale)

```text
chrome://flags/#gemma4-for-built-in-ai
```


---
layout: default
---

# Prompt API 
### Esempio

````md magic-move

```javascript
const available = await LanguageModel.availability({
  expectedInputs: [{type: 'text', languages: ['en']}],
  expectedOutputs: [{type: 'text', languages: ['en']}],
});

const session = await LanguageModel.create();

const result = await session.prompt('Write me a short poem!');
console.log(result);

/*
A single raindrop, cool and clear,
Reflects the sky, dispelling fear.
A tiny jewel, a fleeting grace,
Washing worries from time and space. 

Then slips away, a silent fall,
Joining the stream, answering the call.
*/
```

```javascript
const available = await LanguageModel.availability({
  expectedInputs: [{type: 'text', languages: ['en']}],
  expectedOutputs: [{type: 'text', languages: ['en']}],
});

if (available !== 'unavailable') {
  const session = await LanguageModel.create();

  const result = await session.prompt('Write me a short poem!');
  console.log(result);
}
```

```javascript
const available = await LanguageModel.availability({
  expectedInputs: [{type: 'text', languages: ['en']}],
  expectedOutputs: [{type: 'text', languages: ['en']}],
});

if (available !== 'unavailable') {
  // user activation required to trigger the download
  const session = await LanguageModel.create({
    monitor(m) {
      m.addEventListener('downloadprogress', (e) => {
        console.log(`Downloaded ${e.loaded * 100}%`);
      });
    },
  });

  const result = await session.prompt('Write me a short poem!');
  console.log(result);
}
```

```javascript
const available = await LanguageModel.availability({
  expectedInputs: [{type: 'text', languages: ['en']}],
  expectedOutputs: [{type: 'text', languages: ['en']}],
});

if (available !== 'unavailable') {
  // user activation required to trigger the download
  const session = await LanguageModel.create({
    monitor(m) {
      m.addEventListener('downloadprogress', (e) => {
        console.log(`Downloaded ${e.loaded * 100}%`);
      });
    },
  });

  const stream = session.promptStreaming('Write me an extra-long poem!');
  for await (const chunk of stream) {
    console.log(chunk);
  }
}
```

````

---
layout: default
---

# Prompt API 
### Multimodale

````md magic-move

```javascript
const available = await LanguageModel.availability({
  expectedInputs: [
    {type: 'text', languages: ['en', 'ja', 'es']},
    {type: 'image'},
    {type: 'audio'},
  ],
  expectedOutputs: [{type: 'text', languages: ['en']}],
});

const session = await LanguageModel.create();
```

```javascript
const options = {
  expectedInputs: [
    {type: 'text', languages: ['en', 'ja', 'es']},
    {type: 'image'},
    {type: 'audio'},
  ],
  expectedOutputs: [{type: 'text', languages: ['en']}],
};

const available = await LanguageModel.availability(options);

const session = await LanguageModel.create(options);
```

```javascript
const options = {
  expectedInputs: [
    {type: 'text', languages: ['en', 'ja', 'es']},
    {type: 'image'},
    {type: 'audio'},
  ],
  expectedOutputs: [{type: 'text', languages: ['en']}],
};

const available = await LanguageModel.availability(options);

const session = await LanguageModel.create({
  ...options,
  initialPrompts: [
    { role: 'system', content: 'You are an art critic' }
  ]
});
```

```javascript
const options = {
  expectedInputs: [
    {type: 'text', languages: ['en', 'ja', 'es']},
    {type: 'image'},
    {type: 'audio'},
  ],
  expectedOutputs: [{type: 'text', languages: ['en']}],
};

const available = await LanguageModel.availability(options);

const session = await LanguageModel.create({
  ...options,
  initialPrompts: [
    { role: 'system', content: 'You are an art critic' },
    { role: 'user', content: 'Is impressionism the best movement ever? Answer just yes or no' },
    { role: 'assistant', content: 'No.'}
  ]
});

const response = await session.prompt('Is Monet an impressionist artist? Answer just yes or no')
// Yes.
```

```javascript
const session = await LanguageModel.create({
  ...options,
  initialPrompts: [
    { role: 'system', content: 'You are an art critic' },
    { role: 'user', content: 'Is impressionism the best movement ever? Answer just yes or no' },
    { role: 'assistant', content: 'No.'}
  ]
});

const response = await session.prompt([{
  role: 'user',
  content: [
    {
      type: 'text',
      value: `Write an art critique of this image`,
    },
    { type: 'image', value: fileUpload.files[0] },
  ],
}])
```

```javascript
const session = await LanguageModel.create({
  ...options,
  initialPrompts: [
    { role: 'system', content: 'You are an art critic' },
    { role: 'user', content: 'Is impressionism the best movement ever? Answer just yes or no' },
    { role: 'assistant', content: 'No.'}
  ]
});

const canvas = document.querySelector("canvas");

const response = await session.prompt([{
  role: 'user',
  content: [
    {
      type: 'text',
      value: `Write an art critique of this image`,
    },
    { type: 'image', value: canvas },
  ],
}])
```

```javascript
const session = await LanguageModel.create({
  ...options,
  initialPrompts: [
    { role: 'system', content: 'You are an art critic' },
    { role: 'user', content: 'Is impressionism the best movement ever? Answer just yes or no' },
    { role: 'assistant', content: 'No.'}
  ]
});

const image = await (await fetch("impressionism-sol-levant.jpeg")).blob();

const response = await session.prompt([{
  role: 'user',
  content: [
    {
      type: 'text',
      value: `Write an art critique of this image`,
    },
    { type: 'image', value: image },
  ],
}])
```

```javascript
const session = await LanguageModel.create({
  ...options,
  initialPrompts: [
    { role: 'system', content: 'You are an art critic' },
    { role: 'user', content: 'Is impressionism the best movement ever? Answer just yes or no' },
    { role: 'assistant', content: 'No.'}
  ]
});

const image = await (await fetch("impressionism-sol-levant.jpeg")).blob();
const canvas = document.querySelector("canvas");

const response = await session.prompt([{
  role: 'user',
  content: [
    {
      type: 'text',
      value: `Critique how well the second image matches the first`,
    },
    { type: 'image', value: image },
    { type: 'image', value: canvas },
  ],
}])
```

```javascript
const response = await session.prompt([{
  role: 'user',
  content: [
    {
      type: 'text',
      value: `Critique how well the second image matches the first`,
    },
    { type: 'image', value: image },
    { type: 'image', value: canvas },
  ],
}])

// audio input requires GPU
const audioBuffer = await captureMicrophoneInput({ seconds: 10 });
const userResponse = await session.prompt([
  {
    role: "user",
    content: [
      { type: "text", value: "My response to your critique:" },
      { type: "audio", value: audioBuffer },
    ],
  }
]);
```

```javascript
const session = await LanguageModel.create({
  ...options,
  initialPrompts: [
    { role: 'system', content: 'You are an art critic' },
  ]
});

fileUpload.onchange = async () => {
  await session.append([{
    role: 'user',
    content: [
      {
        type: 'text',
        value: `Here's one painting. Notes: ${notes.value}`,
      },
      { type: 'image', value: fileUpload.files[0] },
    ],
  }]);
};

analyzeButton.onclick = async () => {
  result.textContent = await session.prompt(question.value);
};
```

````

---
layout: default
---

# Prompt API
### Session Mgmt


````md magic-move

```javascript
const languageModel = await LanguageModel.create({
  initialPrompts: [{
    role: 'system',
    content: 'You are a helpful personal-finance assistant.'
  }]
});
```

```javascript
const languageModel = await LanguageModel.create({
  initialPrompts: [{
    role: 'system',
    content: 'You are a helpful personal-finance assistant.'
  }]
});
// clone a session
const s1 = await languageModel.clone();
const s2 = await languageModel.clone();
```

```javascript
const languageModel = await LanguageModel.create({
  initialPrompts: [{
    role: 'system',
    content: 'You are a helpful personal-finance assistant.'
  }]
});
// clone a session
const s1 = await languageModel.clone();
const s2 = await languageModel.clone();

const r1 = await s1.prompt('Is 1-ETF strategy a good strategy?')
const r2 = await s2.prompt('Talk me about the all-weather portfolio')
```

```javascript
const languageModel = await LanguageModel.create({
  initialPrompts: [{
    role: 'system',
    content: 'You are a helpful personal-finance assistant.'
  }]
});
// clone a session
const s1 = await languageModel.clone();
const s2 = await languageModel.clone();

const r1 = await s1.prompt('Is 1-ETF strategy a good strategy?')
const r2 = await s2.prompt('Talk me about the all-weather portfolio')
// contextWindowLeft = contextWindow - contextUsage
s1.contextUsage // 2471
s2.contextUsage // 1484
```

```javascript
const languageModel = await LanguageModel.create({
  initialPrompts: [{
    role: 'system',
    content: 'You are a helpful personal-finance assistant.'
  }]
});
// clone a session
const s1 = await languageModel.clone();
const s2 = await languageModel.clone();

const r1 = await s1.prompt('Is 1-ETF strategy a good strategy?')
const r2 = await s2.prompt('Talk me about the all-weather portfolio')
// contextWindowLeft = contextWindow - contextUsage
s1.contextUsage // 2471
s2.contextUsage // 1484

s1.destroy();
s2.destroy();
```

````

---
layout: default
---

# Prompt API
### Structured Output

````md magic-move

```javascript
const session = await LanguageModel.create({
  ...options,
  initialPrompts: [
    { role: 'system', content: 'You are an art critic. Answer just yes or no to my prompt' }
  ]
});
```

```javascript
const session = await LanguageModel.create({
  ...options,
  initialPrompts: [
    { role: 'system', content: 'You are an art critic. Answer just yes or no to my prompt' }
  ]
});

const result = await session.prompt('Is Monet an impressionist artist?')
// "Yes."
```

```javascript
const schema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "YesNoResponse",
  "description": "An object that contains a yes/no answer",
  "type": "object",
  "properties": {
    "answer": {
      "type": "string",
      "enum": ["yes", "no"],
      "description": "Answer: yes or no"
    }
  },
  "required": ["answer"],
  "additionalProperties": false
}

const result = await session.prompt('Is Monet an impressionist artist?', {
  responseConstraint: schema,
});

console.log(JSON.parse(result))
// { answer: "yes" }
```

```javascript
const schema = { /* YesNoResponse */ };
const question = 'Is Monet an impressionist artist?';

// the schema is sent to the model: it uses the context window
const tokens = await session.measureContextUsage(question, {
  responseConstraint: schema,
});

const result = await session.prompt(question, {
  responseConstraint: schema,
});
```

```javascript
const schema = { /* YesNoResponse */ };

// the schema is NOT sent: describe the format in the prompt
const result = await session.prompt(`
  Is Monet an impressionist artist?
  Only output a JSON object { answer } whose value is "yes" or "no".
`, {
  responseConstraint: schema,
  omitResponseConstraintInput: true,
});
```

```javascript
const schema = { /* YesNoResponse */ };

const stream = session.promptStreaming('Is Monet an impressionist artist?', {
  responseConstraint: schema,
});

let result = '';
for await (const chunk of stream) {
  result += chunk;
}

console.log(JSON.parse(result))
// { answer: "yes" }
```

```javascript
const result = await session.prompt('Is Monet an impressionist artist?', {
  responseConstraint: /^(yes|no)$/,
});

console.log(result)
// "yes"
```

```javascript
const result = await session.prompt([
  {
    role: 'user',
    content: 'Describe Monet as a TOML artist sheet',
  },
  {
    role: 'assistant',
    content: '```toml\n',
    prefix: true,
  },
]);
```

````
