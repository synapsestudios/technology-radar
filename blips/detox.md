---
quadrant: Tools
isNew: true
ring: Trial
name: Detox
---

[Detox](https://github.com/wix/Detox) is a gray box end-to-end testing and automation library for react-native apps. It has only been integrated with brownfield apps, so the experience may differ greatly to the experience of integrating with a greenfield project. Experience tells us that getting the Detox suite to run in a CI, like GitHub Actions, can be very challenging for both iOS and Android. Detox seems to suffer from flakey handshakes between the Detox testing server and the simulator/emulator running the app under test. This flakiness can be hard to reproduce locally, so troubleshooting can be slow while waiting for CI cycle times.

It should also be noted that Detox requires running on a macos environment, and will require using the macos runner for GitHub Actions, which is 10X more expensive than the linux runner. This limitation affects any e2e testing for the iOS app. Android testing with Detox also requires a macos environment, so there are no savings to be had there.

Detox provides all the UI selectors one comes to expect for these kinds of tools. Some timeouts have been known to occur if there are complex animations or transitions in the app, or requests hanging indefinitely. Detox tries to solve flakiness by monitoring that "idle" state of the app, monitoring things like requests that are still inflight, or animations that are still running. Given the aforementioned timeouts, it is not clear whether it fully delivers on this promise of reducing flakiness.

It is possible Detox is a better fit for greenfield projects that don't have to contend with older versions of navigation libraries, or deprecated launch screen libraries, which have been known to cause issues. There are still open issues with Detox for flakiness that is only reproduceable in CI, and it is not clear whether the Detox team is actively working on these issues.

If Detox were chosen, it would be best to first implement a basic test that verifies that it can launch the app and assert about the default UI it sees. Then immediately after this, attempt to get the test running and passing in CI. The longer the time between these two steps, the more likely it is that there will be hidden failures that only occur in CI, where resources are constrained, and simulators/emulators are freshly installed between runs.
