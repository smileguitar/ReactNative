# Install dependencies

| Dependency | version | Installation Command |
|------------------|-----------|-------------------------------------|
| Node | > 11.15.0 | |
| React-Native | > 0.61.5 | `npm i react-native` |
| React-Native CLI | > 2.0.1 | `npm i @react-native-community/cli` |
| Cocoapods | | `sudo gem install cocoapods` |


# Install NPM globally
1. Install node from nodejs.org
2. `sudo npm install -g npm`
3. You might have to install watchman: `brew install watchman`


# Test on iOS
1. From the project root run `yarn install` if `yarn install` not work then use `npm install`
2. Navigate to `cd ios` and run `pod install`
3. Return back to the project root and run `react-native run-ios`


# Test on Android
1. From the project root run `yarn install` if `yarn install` not work then use `npm install`
2. Run `react-native run-android`


# How to use specific Emulator
1. emulator -list-avds
2. emulator -avd [emulator_name]

