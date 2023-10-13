# ODMS UI

A `component library` and `utility package` providing the building blocks and layout primatives for all user interfaces on the Open-DMS platform.

Incorporating [tailwindcss](https://tailwindcss.com) built on top of [shadcn/ui](https://ui.shadcn.com)

Import whereever applicable

```JS

import { SomeUIComponent } from "omdm-ui";

// ...

<SomeUIComponent {...props} />

```

### What's inside

- ` JSX components`` residing in  `./src/components/...`all using`tailwindcss`
- Some ` helper functions`` in  `../../utils.ts`
- Two `scripts` to quickly scaffold new UI components and application logic

### Quick UI prototyping

With help of two scripts this package allows you to quickly skaffold and generate new application UI and logic.

#### Using turborepo's »gen«

`npm run generate:turbo` exposes `npx turbo gen [generator]` and will use turbo's scaffolding of custom components and code defined in a local configuration file `./turbo/generators/templates`. We can extend turbo's gen capabilities by extending these configs to match our needs.

##### Available default generators

A list of generators you can run

     - [] React.ReactNode components
     - [] NextJS app routes
     - [] ...

> TODO Add examples

##### Add custom generators

See `./turbo/geerators/config.ts` and extend the generator config to make it do, whatever you feel is missing.
The generator is using `plop.js` under the hood.

##### Using one of shadcn ui components

`npm run generate:shadcn` exposes `npx shadcn-ui@latest add [component]` and will use shadcn/ui CLI to skaffold components into `./src/templates`.

#### Useful links

- [PlopJS](https://plopjs.com)
