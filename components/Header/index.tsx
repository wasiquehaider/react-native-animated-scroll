import React from "react";
import {
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import Animated from "react-native-reanimated";
import styles from "./styles";

interface HeaderProps {
  title: string;
  leftContent?: React.ReactNode;
  onLeftPress?: () => void;
  leftBtnStyles?: StyleProp<ViewStyle>;
  rightContent?: React.ReactNode;
  rightBtnStyles?: StyleProp<ViewStyle>;
  onRightPress?: () => void;
  customStyles?: StyleProp<ViewStyle>;
  titleAnimatedStyle?: StyleProp<TextStyle>;
  backgroundAnimatedStyle?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({
  title,
  leftContent,
  onLeftPress,
  leftBtnStyles,
  rightContent,
  rightBtnStyles,
  onRightPress,
  customStyles,
  titleAnimatedStyle,
  backgroundAnimatedStyle,
}) => {
  return (
    <Animated.View
      style={[styles.container, customStyles, backgroundAnimatedStyle]}
    >
      <TouchableOpacity
        style={[styles.button, leftContent && leftBtnStyles]}
        onPress={onLeftPress}
      >
        {leftContent ?? ""}
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Animated.Text style={[styles.title, titleAnimatedStyle]}>
          {title}
        </Animated.Text>
      </View>

      <TouchableOpacity
        style={[styles.button, rightContent && rightBtnStyles]}
        onPress={onRightPress}
      >
        {rightContent ?? ""}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Header;
