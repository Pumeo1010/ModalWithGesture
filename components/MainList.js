import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';

export default class MainList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginHorizontal: 15 }}>
          <ScrollView>
            <View style={{ alignItems: 'flex-end' }}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {
                  // alert('Pressed!');
                }}
              >
                <Text style={styles.editLabel}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View>
                <Text style={styles.libLabel}>Library</Text>
                <Text style={styles.libDown}>Playlists</Text>
                <Text style={styles.libDown}>Artists</Text>
                <Text style={styles.libDown}>Albums</Text>
                <Text style={styles.libDown}>Songs</Text>
                <Text style={styles.libDown}>Download</Text>
              </View>

              <View>
                <Text style={styles.recentLabel}>Recently add</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                    }}
                    source={require('../icons/React-native-logo.png')}
                  />
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                    }}
                    source={require('../icons/React-native-logo.png')}
                  />
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                    }}
                    source={require('../icons/React-native-logo.png')}
                  />
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                    }}
                    source={require('../icons/React-native-logo.png')}
                  />
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                    }}
                    source={require('../icons/React-native-logo.png')}
                  />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.playingBar} />
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavenderblush',
    marginTop: 25,
  },
  editButton: {
    backgroundColor: 'transparent',
    marginTop: 10,
    marginBottom: 10,
  },
  editLabel: {
    fontSize: 20,
    color: 'red',
  },
  libLabel: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  libDown: {
    fontSize: 20,
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
  },
  recentLabel: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 25,
  },
  playingBar: {
    height: 70,
    borderColor: '#FDF8F7',
    borderWidth: 0.5,
    width,
    backgroundColor: 'mintcream',
    position: 'absolute',
    bottom: 60,
  },
});
