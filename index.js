/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './screens/Login';
import {name as appName} from './app.json';
import Login from './screens/Login';
import Navigation from './screens/Navigation';

AppRegistry.registerComponent(appName, () => Navigation);
