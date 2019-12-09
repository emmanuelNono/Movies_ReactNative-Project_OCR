import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class FilmItem extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Image style={styles.image_zone} source={{ uri: "image" }} />
        <View style={styles.contain_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>Titre du Film</Text>
            <Text style={styles.vote_text}>Vote du Film</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>
              Descrition du Film
            </Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sortie 00/00/0000</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: "row",
    backgroundColor: "yellow"
  },
  image_zone: {
    flex: 1,
    backgroundColor: "gray",
    margin: 5
  },
  contain_container: {
    flex: 2,
    backgroundColor: "red",
    flexDirection: "column"
  },
  header_container: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row"
  },
  title_text: {
    textAlign: "left",
    backgroundColor: "yellow",
    flexWrap: "wrap",
    flex: 3
  },
  vote_text: {
    textAlign: "right",
    backgroundColor: "pink",
    flex: 2
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
    height: 30,
    backgroundColor: "blue"
  },
  date_text: {
    textAlign: "right"
  }
});

export default FilmItem;
