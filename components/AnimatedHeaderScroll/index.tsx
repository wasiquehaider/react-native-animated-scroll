import { StatusBar, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import Header from "../Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import getStyles from "./styles";
import { AnimatedScrollView } from "react-native-reanimated/lib/typescript/reanimated2/component/ScrollView";
import { DefaultStyle } from "react-native-reanimated/lib/typescript/reanimated2/hook/commonTypes";

const IMG_HEIGHT = 350;

interface AnimatedHeaderScrollProps {
  content?: React.ReactNode;
  title?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  leftBtnStyles?: object;
  rightBtnStyles?: object;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  imageUri?: any;
}

const AnimatedHeaderScroll: React.FC<AnimatedHeaderScrollProps> = (props) => {
  const {
    content = "",
    title = "",
    leftContent,
    rightContent,
    leftBtnStyles = {},
    rightBtnStyles = {},
    onLeftPress,
    onRightPress,
    imageUri = "",
  } = props;
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets, IMG_HEIGHT);
  const scrollRef = useAnimatedRef<AnimatedScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle((): DefaultStyle => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const titleAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
    };
  });
  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    const alpha = interpolate(scrollOffset.value, [0, 100], [0, 1]);

    return {
      backgroundColor: `rgba(255, 255, 255, ${alpha})`,
    };
  });

  const statusBackgroundAnimatedStyle = useAnimatedStyle(() => {
    const alpha = interpolate(scrollOffset.value, [0, 100], [0, 1]);

    return {
      backgroundColor: `rgba(255, 255, 255, ${alpha})`,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.statusBarContainer, statusBackgroundAnimatedStyle]}
      >
        <StatusBar translucent barStyle="dark-content" />
      </Animated.View>

      <Header
        title={title}
        leftContent={leftContent}
        leftBtnStyles={leftBtnStyles}
        onLeftPress={onLeftPress}
        rightContent={rightContent}
        rightBtnStyles={rightBtnStyles}
        onRightPress={onRightPress}
        customStyles={[styles.customHeader]}
        titleAnimatedStyle={titleAnimatedStyle}
        backgroundAnimatedStyle={backgroundAnimatedStyle}
      />
      <View style={styles.container}>
        <Animated.ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <Animated.Image
            source={imageUri}
            progressiveRenderingEnabled
            style={[styles.image, imageAnimatedStyle]}
          />
          <View style={styles.scrollArea}>{content}</View>
        </Animated.ScrollView>
      </View>
    </View>
  );
};
export default AnimatedHeaderScroll;
