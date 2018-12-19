import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    View,
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestions-list';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
        <Home>
            <Header>

            </Header>
            <Text>buscador</Text>
            <Text>categorias</Text>
            <SuggestionList/>
        </Home>
    );
  }
}

export default App;