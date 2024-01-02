import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Linking } from 'react-native';


export default function MovieDetailScreen(props) {
  const { route } = props;
  const { movie } = route.params; 
  const [movieData, setMovieData] = useState({ videos: { results: [] } });


  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=3739bfdd54facab3ad341842e91e6a81&append_to_response=videos`)
      .then(response => {
        console.log(response.data);
        setMovieData(response.data);
        if (movieData && movieData.videos.results.length > 0) {
          setVideoId(movieData.videos.results[0].key);
        }        
      })
      .catch(error => {
        console.log(error);
      })
  }, [movie.id])

  let IMAGEPATH = 'http://image.tmdb.org/t/p/w500';
  let imageurl = IMAGEPATH + movie.backdrop_path;

  // get genres
  var genres = "";  
  if (movieData !== null && movieData.genres !== undefined) {
    for (var i = 0; i < movieData.genres.length; i++) {
      genres += movieData.genres[i].name + ", ";
    }
  }

  return (
    <View>
      <Image source={{uri: imageurl}} style={styles.image}  />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.text}>{movie.release_date}</Text>
      <Text style={styles.text}>{movie.overview}</Text>
      <Text style={styles.text}>Genres: {genres}</Text>
      {movieData && movieData.homepage ? <Text style={styles.text}>Homepage: {movieData.homepage}</Text>
      : <Text style={styles.text}>Homepage: No site</Text>}

      {movieData && movieData.runtime ? <Text style={styles.text}>Runtime: {movieData.runtime} min</Text>
      : <Text style={styles.text}>Runtime: No info</Text>}
      
      {movieData && movieData.videos.results.length > 0 && (
  <View>
    <Text style={styles.text}>Videos:</Text>
    {movieData.videos.results.map(video => (
      <TouchableOpacity 
        key={video.key}
        onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${video.key}`)}
      >
        <Text style={[styles.text, styles.link]}>
          {video.name}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
)}

    </View>

  )
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 670/250
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15
  },
  text: {
    fontSize: 12,
    flexWrap: 'wrap'
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});