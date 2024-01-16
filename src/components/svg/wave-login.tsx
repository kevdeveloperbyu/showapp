import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const SvgWave = () => {
    return (
        <Svg
            viewBox="0 0 411 80"
            style={styles.svg}
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
    );
};


const styles = StyleSheet.create({
    svg: {
        height: 80,
        width: Dimensions.get('screen').width,
    }
})


export default SvgWave;