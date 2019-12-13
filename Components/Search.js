import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  Text,
  ActivityIndicator
} from "react-native";
import films from "../Helpers/FilmsData";
import FilmItem from "./FilmItem";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.page = 0;
    this.totalpages = 0;
    this.searchedText = "";
    this.state = {
      films: [],
      isLoading: false
    };
  }

  _loadFilms() {
    this.setState({ isLoading: true });
    if (this.searchedText.length > 0) {
      getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1).then(
        data => {
          this.page = data.page;
          this.totalpages = data.total_pages;
          this.setState({
            films: [...this.state.films, ...data.results],
            isLoading: false // Arret du chargement
          });
        }
      );
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text;
  }

  _searchFilms() {
    this.page = 0;
    this.totalpages = 0;
    this.setState(
      //setState is asyncrone, theirn 2nd param is a void that execute when setState is finish
      {
        films: []
      },
      () => {
        console.log(
          "page = " +
            this.page +
            " / total pages =" +
            this.totalpages +
            " / nombre de films = " +
            this.state.films.length
        );
        this._loadFilms();
      }
    );
  }

  _displayDetailForFilm = idFilm => {
    console.log("affiche le film avec id = " + idFilm);
  };

  render() {
    console.log(this.state.isLoading);
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder="titre du film"
          onSubmitEditing={() => this._searchFilms()}
          onChangeText={text => this._searchTextInputChanged(text)}
        />
        <Button
          style={{ height: 50 }}
          title="Rechercher"
          onPress={() => this._searchFilms()}
        />
        <FlatList
          data={this.state.films}
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (this.page < this.totalpages) {
              this._loadFilms();
            }
          }}
          renderItem={({ item }) => (
            <FilmItem
              film={item}
              displayDetailForFilm={this._displayDetailForFilm}
            />
          )}
        />
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Search;
