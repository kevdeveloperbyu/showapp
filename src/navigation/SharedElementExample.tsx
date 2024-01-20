// Expo SDK40
// @react-native-community/masked-view: 0.1.10
// @react-navigation/native: ^5.9.3
// @react-navigation/stack: ^5.14.3
// react-native-gesture-handler: ~1.8.0
// react-native-reanimated: ~1.13.0
// react-native-safe-area-context: 3.1.9
// react-native-screens: ~2.15.2
// react-native-shared-element: 0.7.0
// react-navigation: 4
// react-navigation-shared-element: ^3.0.0

import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  SharedElement,
  createSharedElementStackNavigator,
} from 'react-navigation-shared-element';

import Icon from './icon';
import posts from './posts';

const SPACING = 15;
const POST_GUTTER_WIDTH = 2;

const ListScreen = ({ navigation }: any) => {
  const dimensions = useWindowDimensions();
  const imageWidth = dimensions.width / 2 - POST_GUTTER_WIDTH;
  

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.wrapper}>
        <Text style={styles.listHeader}>Marketplace</Text>

        <View style={styles.posts}>
          {posts.map((post, index) => (
            <Pressable
              key={post.id}
              onPress={() =>
                navigation.push('Detail', {
                  post,
                })
              }
              style={{
                width: imageWidth,
              }}
            >
              <SharedElement id={post.id}>
                <Image
                  source={post.image}
                  style={{
                    height: 180,
                    width: imageWidth,
                    marginRight:
                      index % 2 === 1 ? 0 : POST_GUTTER_WIDTH,
                    marginLeft:
                      index % 2 === 1 ? POST_GUTTER_WIDTH : 0,
                  }}
                />
              </SharedElement>

              <View style={styles.postTexts}>
                <Text numberOfLines={1} style={styles.postHeader}>
                  €{post.price} · {post.title}
                </Text>

                <Text
                  numberOfLines={1}
                  style={styles.postDescription}
                >
                  {post.description}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailScreen = ({ route, navigation }: any) => {
  const { post } = route.params;
  const safeInsets = useSafeAreaInsets();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, []);
  console.log("ima here")
  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={{
          opacity,
          position: 'absolute',
          top: safeInsets.top + SPACING,
          left: safeInsets.left + SPACING,
          right: safeInsets.right + SPACING,
          zIndex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Icon name="x" onPress={() => navigation.goBack()} />
        <Icon name="more-horizontal" />
      </Animated.View>

      <SharedElement id={post.id}>
        <Image source={post.image} style={styles.postImage} />
      </SharedElement>

      <View style={styles.postDetails}>
        <Text style={styles.postTitle}>{post.title}</Text>

        <Text style={styles.postPrice}>€{post.price}</Text>

        <Button
          title="Contact Seller"

        // style={styles.postContactButton}
        />

        <Animated.Text
          style={{
            opacity,
            fontSize: 17,
          }}
        >
          {post.description}
        </Animated.Text>
      </View>
    </View>
  );
};

const Stack = createSharedElementStackNavigator();
// const Stack = createNativeStackNavigator();



const MainScreen = () => (
  <Stack.Navigator
    // mode="modal"
    screenOptions={{ headerShown: true }}
  >
    <Stack.Screen name="List" component={ListScreen} />

    <Stack.Screen
      name="Detail"
      component={DetailScreen}
      sharedElements={(route) => {
        return [route.params.post.id];
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  listHeader: {
    fontSize: 28,
    fontWeight: '800',
    margin: SPACING,
  },
  posts: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postTexts: {
    margin: 10,
    marginBottom: 15,
  },
  postHeader: {
    fontWeight: '600',
  },
  postDescription: {
    color: 'gray',
  },
  postImage: {
    height: 300,
    width: '100%',
  },
  postDetails: {
    paddingVertical: 10,
    paddingHorizontal: SPACING,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  postPrice: {
    fontSize: 24,
  },
  postContactButton: {
    marginVertical: SPACING,
  },
});