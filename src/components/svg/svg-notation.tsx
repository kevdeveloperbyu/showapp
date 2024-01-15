import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const Loader = (props: any) => {
    // const color = useRef(new Animated.Value(0)).current;
    // useEffect(() => {
    //     Animated.loop(
    //         Animated.sequence([
    //             Animated.timing(color, {
    //                 duration: 2000,
    //                 toValue: 1,
    //                 useNativeDriver: true,
    //             }),
    //             Animated.timing(color, {
    //                 duration: 2000,
    //                 toValue: 0,
    //                 useNativeDriver: true,
    //             }),
    //         ])
    //     ).start();
    // }, []);
    console.log(Dimensions.get('screen').width)

    return (
        <View>
            <View style={styles.box}>
                <Svg
                    height="80"
                    // width={Dimensions.get('screen').width}
                    width={"100%"}
                    viewBox="0 0 411 80"
                    style={styles.bottomWavy}
                >
                    <Path
                        strokeLinejoin="miter"
                        strokeLinecap="round"
                        fill="#fff"
                        stroke="#fff"
                        // strokeWidth="12"
                        d="M0 4L22.8 14.8C45.7 25.7 91.3 47.3 137 47.2C182.7 47 228.3 25 274 25C319.7 25 365.3 47 388.2 58L411 69L411 81L388.2 81C365.3 81 319.7 81 274 81C228.3 81 182.7 81 137 81C91.3 81 45.7 81 22.8 81L0 81Z"
                    >
                    </Path>
                </Svg>
            </View>
            <Text style={{ color: "red" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ducimus debitis officiis hic sequi omnis cum commodi eius dolor explicabo architecto, laborum expedita. Nulla id minus ipsa praesentium, a temporibus.</Text>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {},
    bottom: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        bottom: 0,
    },
    box: {
        backgroundColor: 'transparent',
        height: 80,
    },
    bottomWavy: {
        // bottom: 20,
        backgroundColor: "transparent",
        height: 10,
        display: "flex",
        // flex: 1, 
        justifyContent: "flex-end",
        alignContent: "flex-end",
        alignItems: "flex-end"
    }
})


export default Loader;