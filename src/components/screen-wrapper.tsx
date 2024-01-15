import * as React from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
// import { useExampleTheme } from '.';
import { useAppTheme } from '@/styles/paper-theme';
import { MD2Theme, MD3Theme, useTheme } from 'react-native-paper';

// import { useExampleTheme } from './index';

type Props = ScrollViewProps & {
  children: React.ReactNode;
  withScrollView?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();


export default function ScreenWrapper({
  children,
  withScrollView = true,
  style,
  contentContainerStyle,
  ...rest
}: Props) {
  // const { lightTheme: theme } = useAppTheme()
  const theme = useExampleTheme();

  const insets = useSafeAreaInsets();

  const containerStyle = [
    styles.container,
    // {
    //   // backgroundColor: theme.colors.background,
    //   backgroundColor: insets.top,
    //   paddingBottom: insets.bottom,
    //   paddingLeft: insets.left,
    //   paddingRight: insets.left,
    // },
  ];


  return (
    <>
      {withScrollView ? (
        <ScrollView
          {...rest}
          contentContainerStyle={contentContainerStyle}
          keyboardShouldPersistTaps="always"
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          style={[containerStyle, style]}
        >
          {children}
        </ScrollView>
      ) : (
        <View
        // style={[containerStyle, style]}
        >{children}</View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 48
  },
});
