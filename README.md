# phosphor-astro

[![npm](https://img.shields.io/npm/v/phosphor-astro.svg)](https://npmjs.com/package/phosphor-astro) [![npm](https://img.shields.io/npm/dt/phosphor-astro.svg)](https://npmjs.com/package/phosphor-astro)

👩‍🚀 Phosphor icons as Astro components

## Installation

Add `phosphor-astro` to your project:

```sh
npm install phosphor-astro
# or
yarn add phosphor-astro
```

## Use

Import the icons from `phoshor-astro` and add it to your code:

```jsx
---
import RocketLaunch from 'phosphor-astro/RocketLaunch.astro':
import ArrowRight from 'phosphor-astro/ArrowRightBold.astro':
import Sparkle from 'phosphor-astro/outline/Sparkle.astro':
---

<p>
  <RocketLaunch />
  <ArrowRight />
  <Sparkle />
</p>
```

## Astro components

The components exported from `phosphor-astro` are the raw `svg` elements from Phosphor with `{...Astro.props}` added to the root element. This should enable you to customize the element as you see fit.

```jsx
// Book.astro
<svg {...Astro.props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <rect width="256" height="256" fill="none" />
  <path
    d="M48,216a23.9,23.9,0,0,1,24-24H208V32H72A23.9,23.9,0,0,0,48,56Z"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="16"
  />
  <polyline
    points="48 216 48 224 192 224"
    fill="none"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="16"
  />
</svg>
```

Any prop that you pass to the component will be added to the top-level `svg` element:

```jsx
// Heart.astro
<Heart class="a few classes" data-favorite="true" id="id" />
```

## License

[MIT](/LICENSE)
