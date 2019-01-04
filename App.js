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
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list';
type Props = {};
class App extends Component<Props> {
    state={
      suggestionList:[],
        categoryList:[],
    };
   async componentDidMount(){
        const movies = await API.getSuggestion(10);
        const categories = await API.getMovies();
        console.log(movies);
        console.log(categories);
        this.setState({
            suggestionList:movies,
            categoryList:categories,
        })
    }

    render() {
    return (
        <Home>
            <Header>

            </Header>
            <Text>buscador</Text>
            <Text>categorias</Text>
            <CategoryList
                list={this.state.categoryList}/>
            <SuggestionList
            list={this.state.suggestionList}/>
        </Home>
    );
  }
}

export default App;