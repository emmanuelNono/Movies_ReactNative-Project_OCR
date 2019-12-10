import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  Text
} from "react-native";
import films from "../Helpers/FilmsData";
import FilmItem from "./FilmItem";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";

class Search extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { films: [] };
  // }

  _loadFilms() {
    // getFilmsFromApiWithSearchedText("star").then(data =>
    //   this.setState({ films: data.results })
    // );
    getFilmsFromApiWithSearchedText("star").then(data => console.log(data));
  }

  render() {
    console.log("RENDER");
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder="titre du film" />
        <Button
          style={{ height: 50 }}
          title="Rechercher"
          onPress={() => this._loadFilms()}
        />
        <FlatList
          data={films}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5
  }
});

export default Search;
