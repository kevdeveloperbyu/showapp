import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from "react-native-svg";
import GoogleLogo from '@/assets/icons/google-logo.svg'
type Props = {}

const GoogleSvg = (props: Props) => {
  return (
    <GoogleLogo width={100} height={100} />
  )
}

export default GoogleSvg

const styles = StyleSheet.create({})