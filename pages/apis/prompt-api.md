---
layout: section
---

# Prompt API 

---
layout: default
---

# Prompt API 
### Setup

Abilitare i seguenti flag

```text
chrome://flags/#optimization-guide-on-device-model
```

```text
chrome://flags/#prompt-api-for-gemini-nano-multimodal-input
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

const session = await LanguageModel.create();

const result = await session.prompt('Write me a short poem!');
```


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
    { role: 'system', content: 'You are a fine-art critique' }
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
    { role: 'system', content: 'You are a fine-art critique' },
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
    { role: 'system', content: 'You are a fine-art critique' },
    { role: 'user', content: 'Is impressionism the best movement ever? Answer just yes or no' },
    { role: 'assistant', content: 'No.'}
  ]
});

const response = await session.prompt([{
  role: 'user',
  content: [
    {
      type: 'text',
      value: `Express a fine-art critique about this image`,
    },
    { type: 'image', value: fileUpload.files[0] },
  ],
}])
```

```javascript
const session = await LanguageModel.create({
  ...options,
   initialPrompts: [
    { role: 'system', content: 'You are a fine-art critique' },
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
      value: `Express a fine-art critique about this image`,
    },
    { type: 'image', value: canvas },
  ],
}])
```

```javascript
const session = await LanguageModel.create({
  ...options,
   initialPrompts: [
    { role: 'system', content: 'You are a fine-art critique' },
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
      value: `Express a fine-art critique about this image`,
    },
    { type: 'image', value: image },
  ],
}])
```

```javascript
const image = await (await fetch("impressionism-sol-levant.jpeg")).blob();
const response = await session.prompt([{
  role: 'user',
  content: [
    {
      type: 'text',
      value: `Express a fine-art critique about this image`,
    },
    { type: 'image', value: image },
  ],
}])
console.log(response)

const audioBuffer = functionThatGetAudioFromMic()
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

const r1 = s1.prompt('Is 1-ETF strategy a good strategy?')
const r2 = s2.prompt('Talk me about the all-weather portfolio')
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

const r1 = s1.prompt('Is 1-ETF strategy a good strategy?')
const r2 = s2.prompt('Talk me about the all-weather portfolio')
// contextWindow - contextUsage
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

const r1 = s1.prompt('Is 1-ETF strategy a good strategy?')
const r2 = s2.prompt('Talk me about the all-weather portfolio')
// contextWindow - contextUsage
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
    { role: 'system', content: 'You are a fine-art critique. Answer just yes or no to my prompt' }
  ]
});
```

```javascript
const session = await LanguageModel.create({
  ...options,
   initialPrompts: [
    { role: 'system', content: 'You are a fine-art critique. Answer just yes or no to my prompt' }
  ]
});

const result = await session.prompt('Is Monet an impressionist artist ever?')
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

const result = await session.prompt('Is Monet an impressionist artist ever?', { responseConstraint: schema })
// '{"answer": "yes"}'
```

````