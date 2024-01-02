import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [markers, setMarkers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newPlace, setNewPlace] = useState({});

  useEffect(() => {
    getMarkers();
  }, []);

  const saveMarkers = async (newMarkers = markers, callback = () => {}) => {
    try {
      await AsyncStorage.setItem('markers', JSON.stringify(newMarkers), callback);
    } catch (error) {
      console.error(error);
    }
  };
  
  const getMarkers = async () => {
    try {
      const storedMarkers = await AsyncStorage.getItem('markers');
      if (storedMarkers !== null) {
        setMarkers(JSON.parse(storedMarkers));
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleMapPress = (event) => {
    const coordinate = event.nativeEvent.coordinate;
    const index = markers.indexOf(event.nativeEvent.marker);
    if (index === -1) {
      setNewPlace({ coordinate });
      setModalVisible(true);
    } else {
      setMarkers((prevMarkers) => {
        const newMarkers = [...prevMarkers];
        newMarkers.splice(index, 1);
        saveMarkers(newMarkers); // Call saveMarkers() with the newMarkers parameter
        return newMarkers;
      });
    }
  };
  
  const handleSavePlace = () => {
    const title = newPlace.title || 'New Place';
    const marker = { title, ...newPlace };
    setMarkers([...markers, marker]);
    setModalVisible(false);
    setNewPlace({});
    saveMarkers([...markers, marker], () => {
      console.log('Markers saved!');
    });
  };
  
  

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onPress={handleMapPress}
        key={markers.length}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
          >
            <View style={styles.marker}>
              <View style={styles.markerContent}>
                <Text style={styles.markerTitle}>{marker.title}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => {
                    const newMarkers = [...markers];
                    newMarkers.splice(index, 1);
                    setMarkers(newMarkers);
                    saveMarkers();
                  }}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Marker>
        ))}
      </MapView>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            onChangeText={(text) => setNewPlace({ ...newPlace, title: text })}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSavePlace}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  marker: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
  },
  markerTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginTop: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },  
});
