/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from '@pages/App.tsx';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
