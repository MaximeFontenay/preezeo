# Preezeo

## 🚀 La borne qu'il vous faut ! 


### 🧞 Structure
```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                          |
| :------------------------ | :-----------------------------------------------|
| `pnpm install`            | Installs dependencies                           |
| `pnpm run dev`            | Starts local dev server at `localhost:4321`     |
| `pnpm run build`          | Build your production site to `./dist/`         |


### 🧞 CI / CD

Branche `staging` is linked with preview on [Vercel](https://preezeo.vercel.app/){:target="_blank"}

### 🧞 Deployment

After `pnpm run build`, copy everything inside **dist/** folder to the server

Open production website on : <a href="https://preezeo.fr/" target="_blank">Preezeo</a>

