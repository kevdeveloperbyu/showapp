import { createNavigationContainerRef } from '@react-navigation/native';
import { NavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';
import { RootStackParamList } from './types';


// export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();
  
// export function navigate(name: string, params: string) {
//   if (navigationRef.isReady()) {
//     navigationRef.navigate(name, params);
//   }
// }




export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}


export function goBack() {
  navigationRef.current?.goBack();
}
