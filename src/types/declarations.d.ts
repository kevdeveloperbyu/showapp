/**
 * SVG TRANSFORMER CONFIGURATION
 * https://github.com/kristerkari/react-native-svg-transformer?tab=readme-ov-file#for-react-native-v057-or-newer--expo-sdk-v3100-or-newer
 */
declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}