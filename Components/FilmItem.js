import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { getImageFromApi } from "../API/TMDBApi";

class FilmItem extends React.Component {
  render() {
    const { film, displayDetailForFilm } = this.props;
    return (
      <TouchableOpacity
        onPress={() => displayDetailForFilm(film.id)}
        style={styles.main_container}
      >
        <Image
          style={styles.image}
          source={{ uri: getImageFromApi(film.poster_path) }}
        />
        <View style={styles.contain_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote_text}>Moy:{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>
              {film.overview}
            </Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sortie le {film.release_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 170,
    flexDirection: "row"
    // backgroundColor: "yellow"
  },
  image: {
    flex: 1,
    backgroundColor: "gray",
    margin: 5
  },
  contain_container: {
    flex: 2,
    flexDirection: "column",
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: "row"
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 4,
    flexWrap: "wrap",
    paddingRight: 5
  },
  vote_text: {
    textAlign: "right"
  },
  description_container: {
    justifyContent: "center",
    flex: 7
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666"
  },
  date_container: {
    flex: 1,
    height: 30
  },
  date_text: {
    textAlign: "right",
    fontSize: 16
  }
});

export default FilmItem;
//Les props def les propriétés a nos component custom et de faire passer les infos en les components.
// Les props st def par le component parent et ne peuvent pas etre modif par le component enfant.
//D'où l'importance des state
