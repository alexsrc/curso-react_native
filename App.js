import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    View,
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
        <Home>
            <Header>

            </Header>
            <Text>buscador</Text>
            <Text>categorias</Text>
            <Text>sugerencias</Text>
        </Home>
    );
  }
}

export default App;