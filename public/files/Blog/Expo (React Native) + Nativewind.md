## Table of Contents

1. [Understanding](#understanding)
2. [Setup](#setup)
3. [Adding Nativewind](#adding%20nativewind)
4. [Ideal Structure](#ideal%20structure)

## Understanding

**React Native (The Foundation)**

- React native lets you build mobile apps using JS and React, then it translates it to native ios, android and web views
  - Otherwise you would have to use XCODE with swift for ios and Android Studio for Android

**Expo (The Framework)**

1. pre configured native environment
   1. works right out of the box with `npx create-expo-app`
2. Expo SDK
   1. provides API's for device features
3. Expo GO app
   1. Viewing the app on device for development and testing
4. EAS (Expo Application Services)
   1. handles cloud build, app signing and OTA updates
   2. lets you build .apk or .ipa files directly from the Expo CLI
   3. basically no need to have Xcode or android studio for building

## Setup

**What we will set up:**
_Foundation_

- **Expo** (React Native framework)
- **Expo Router** (file-based navigation)
- **TypeScript** (optional typing setup)
- **Metro Bundler** (default Expo bundler)
- **Babel** (JS compiler + plugins)
  - babel-preset-expo
  - expo-router/babel
  - nativewind/babel

_Styling_

- **NativeWind** (Tailwind for React Native)
- **Tailwind CSS** (utility-first styling)
- **global.css** (Tailwind base/components/utilities)
- **tailwind.config.js** (content paths + preset)
- **metro.config.js** (NativeWind integration)
- **StatusBar** (from expo-status-bar)

_Expo SDK Utilities_

- expo-linking (deep linking support)
- expo-constants (app/device info)
- expo-status-bar (status bar control)

**Creating EXPO APP**

```sh
npx create-expo-app my-app
```

_Create the Expo app and it will default to TypeScript_

**Add Expo router**

```sh
cd my-app
npm i expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

`expo router` _to have file based navigation so no need for manual set up for app navigation_

`react-native-safe-area-context` _Handle notches, status bars, home indicators for ios and android_

`react-native-screens` _improves performance for screen transitions and memory usage_

`expo-linking` _handles deep links and URL's inside your app_

`expo-constants` _Access app and device meta data_

`expo-status-bar` _control the status bar at the top (battery, time, wifi, etc), by styling it or removing it_

**Test it out on the phone**

```sh
npm run start
```

scan qr code with _Expo Go_ App on iphone

to Start it up after clearing all cashe

```sh
npx expo start -c
```

- `-c` is for clear

Next steps figure out how to put it on the app store

## Adding Nativewind

_(Tailwind for ios and Android bundle)_
_(For web use metro)_
[Source](https://www.nativewind.dev/docs/getting-started/installation)

#### Create new project with Nativewind

```sh
npx rn-new --nativewind
```

_Creates a new Expo project_
_Sets up nativewind_

#### Manual set up

##### 1. **Install Nativewind**

```sh
npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
```

```sh
npm install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
```

_install `nativewind` and its peer dependencies `tailwindcss`, `react-native-reanimated` and `react-native-safe-area-context`._

##### 2. **Setup Tailwind CSS**

```sh
npx tailwindcss init
```

\*creates a `tailwind.config.js` file

_Add all the paths to the component files in_ `tailwind.config.js`

```js title=tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

_create a css file and add the Tailwind directives_

```css title=global.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

##### 3. **Add the Babel preset**

```js title=babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

- _create file if it doesnt exist_

##### 4. **Create or modify your Metro**

_This is mainly for web versions_

_in `app.json` add `"bundler": "metro"` to `"web`_
_create a file called `metro.config.js`_

```js title=metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

##### 5. **Import the CSS file**

```js title=_layout_.tsx
import "../global.css";
```

_Add it to `app/_layout.tsx`_

##### 6. **Typescript setup**

_For when your using typescript_

_Create a file in your root called `nativewind-env.d.ts` and add this line_

```ts
/// <reference types="nativewind/types" />
```

## Ideal Structure

**Folders**

- _components_ (Reusable UI Building blocks)
- _features_ (feature specific modules)
- _hooks_ (Reusable hooks, cross feature)
- _lib_ (API clients, config, helpers)
- _data_ (static data, mock data, config objects)
- _assets_ (images, fonts, icons)
- _types_ (global TS types and interfaces)
- app/_auth_ (login, register)
