This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# How to install and run locally

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Clone this repository to your local system

1. Open your terminal and change directory to where you clone this project
2. On the root directory of cloned the project, install dependencies using the command _yarn install_
3. If change directory into the ios folder and run the command _pod install_ (only required for ios Build)

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# Using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
#  Using Yarn
yarn android
```

### For iOS

```bash
# using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Project Structure Explained

```bash
├── src
│   ├── assest(images, svgs, fonts etc)
│   ├── components (reusable components, buttons, form inputs etc)
│   ├── constants (All constant app vairiables)
│   ├── context (global state management, context api etc)
│   ├── hooks (custom reausable hooks)
│   │── libs (third party library configs)
│   ├── navigations (screens navigations  setup)
|   ├── network (http network utilities)
|   ├── screens (application screens)
|   ├── services (http api request services)
|   ├── styles (style guide and theming configs)
|   ├── types (types definitions)
|   ├── utills (utility helper functions)

```
