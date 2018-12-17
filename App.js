import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    View,
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Home from './src/screens/containers/home';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
        <Home>
            <Text>header</Text>
            <Text>buscador</Text>
            <Text>categorias</Text>
            <Text>sugerencias</Text>
        </Home>
    );
  }
}
githun
export default App;