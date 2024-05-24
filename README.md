<h1><img src="https://github.com/wasiquehaider/react-native-animated-scroll/blob/main/logo.png" alt="animated image loader"></h1>

![npm version](https://img.shields.io/badge/npm-1.0.6-brightgreen)
![Platform - Android and iOS](https://img.shields.io/badge/Platform-Android_%7C_IOS-blue)
[![License: MIT](https://img.shields.io/badge/Licence-MIT-lightGreen)](https://opensource.org/licenses/MIT)
[![format prettier](https://img.shields.io/badge/Format-Prettier-fc0fc0)](https://prettier.io)
[![lint-eslint](https://img.shields.io/badge/lint-eslint-4b32c3)](https://eslint.org/)

<table>
  <tr>
    <td align="center">
      <img alt="React Native Bouncy Checkbox"
        src="https://github.com/wasiquehaider/react-native-animated-scroll/blob/main/demo-ios.gif" />
    </td>
    <td align="center">
      <img alt="React Native Bouncy Checkbox"
        src="https://github.com/wasiquehaider/react-native-animated-scroll/blob/main/demo-android.gif" />
    </td>
   </tr>
</table>

@wasiquehaider/react-native-animated-scroll is a customizable and animated header component for React Native applications. It enhances user experience by providing a header that smoothly animates and hides as the user scrolls through the content. Leveraging react-native-reanimated for high-performance animations, this package includes features such as dynamic scaling, opacity transitions, and responsive design adjustments.

## Features

- Smooth Animations: Fluid animations for header transitions based on scroll position.
- Customizable: Easily customize the header with different titles, buttons, and styles.
- Responsive: Compatible with various screen sizes and safe areas.
- Easy Integration: Simple API for integrating into existing React Native projects

## Installation

Install the package using npm or yarn:

```bash
npm install @wasiquehaider/react-native-animated-scroll
```

or

```bash
yarn add @wasiquehaider/react-native-animated-scroll
```

## Usage

```typescript
import React from "react";
import { View } from "react-native";
import AnimatedScroll from "@wasiquehaider/react-native-animated-scroll/index";

const YourContentComponent = () => (
  <View>
    <Text>Your main content goes here...</Text>
  </View>
);

const LeftButton = () => <Text>Left</Text>;

const RightButton = () => <Text>Right</Text>;

const App = () => (
  <View style={{ flex: 1 }}>
    <AnimatedScroll
      title="Welcome"
      content={<YourContentComponent />}
      leftContent={<LeftButton />}
      rightContent={<RightButton />}
      onLeftPress={() => console.log("Left button pressed")}
      onRightPress={() => console.log("Right button pressed")}
      imageUri={{ uri: "https://example.com/image.jpg" }}
    />
  </View>
);

export default App;
```

## Props

### AnimatedScrollProps

| Key              | Type            | Description                                                       |
| ---------------- | --------------- | ----------------------------------------------------------------- |
| `title`          | String          | The title text displayed in the header.                           |
| `content`        | ReactNode       | The main content to display in the ScrollView.                    |
| `leftContent`    | ReactNode       | Custom content for the left side of the header (e.g., a button).  |
| `rightContent`   | ReactNode       | Custom content for the right side of the header (e.g., a button). |
| `leftBtnStyles`  | Object          | Styles for the left button.                                       |
| `rightBtnStyles` | Object          | Styles for the right button.                                      |
| `onLeftPress`    | Function        | Function to call when the left button is pressed.                 |
| `onRightPress`   | Function        | Function to call when the right button is pressed.                |
| `imageUri`       | string ? number | URI for an optional image displayed at the top of the ScrollView. |

## Example

```typescript
import React from "react";
import { View } from "react-native";
import AnimatedScroll from "@wasiquehaider/react-native-animated-scroll/index";

const YourContentComponent = () => (
  <View>
    <Text>Your main content goes here...</Text>
  </View>
);

const LeftButton = () => <Text>Left</Text>;

const RightButton = () => <Text>Right</Text>;

const App = () => (
  <View style={{ flex: 1 }}>
    <AnimatedScroll
      title="Welcome"
      content={<YourContentComponent />}
      leftContent={<LeftButton />}
      rightContent={<RightButton />}
      onLeftPress={() => console.log("Left button pressed")}
      onRightPress={() => console.log("Right button pressed")}
      imageUri={{ uri: "https://example.com/image.jpg" }}
    />
  </View>
);

export default App;
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
