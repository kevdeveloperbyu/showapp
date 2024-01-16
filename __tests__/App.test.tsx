/**
 * @format
 */

import 'react-native';
import React from 'react';
import AppTesting from 'AppTesting';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// // Mockear react-native-bootsplash
// jest.mock("react-native-bootsplash", () => {
//   return {
//     hide: jest.fn().mockResolvedValue(),
//     isVisible: jest.fn().mockResolvedValue(false),
//     useHideAnimation: jest.fn().mockReturnValue({
//       container: {},
//       logo: { source: 0 },
//       brand: { source: 0 },
//     }),
//   };
// });

it('renders correctly', () => {
  renderer.create(<AppTesting />);
});

