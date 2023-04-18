---
quadrant: Tools
isNew: true
ring: Adopt
name: React Native Bootsplash
---

[React Native Bootsplash](https://github.com/zoontek/react-native-bootsplash) is used for displaying a splash screen immediately after launching a React Native app, but before the component tree has finished mounting, and the app is not yet ready to display a screen from the navigation. The library it replaces, [React Native Splash Screen](https://github.com/crazycodeboy/react-native-splash-screen) is no longer actively maintained.

React Native Bootsplash is implemented in a way that is compatible with the new [Splash Screen API](https://developer.android.com/about/versions/12/features/splash-screen) in Android 12. The `react-native-splash-screen` implementation tries to use a fullscreen modal dialog, which is not recommended by Google.

It should also be noted that `react-native-splash-screen` has known issues with other tools, such as Detox for e2e testing, and the recommended solution is to use `react-native-bootsplash` instead.
