import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.shape_container}>
          <View style={styles.square} />
        </View>
        <View style={styles.shape_container}>
          <View style={styles.rectangle} />
        </View>
        <View style={styles.shape_container}>
          <View style={styles.circle} />
        </View>
        <View style={styles.shape_container}>
          <View style={styles.oval} />
        </View>
        <View style={styles.shape_container}>
          <View style={styles.triangle} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shape_container: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  square: {
    width: 120,
    height: 120,
    backgroundColor: '#264653',
  },
  rectangle: {
    width: 120 * 2,
    height: 120,
    backgroundColor: '#2a9d8f'
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderColor: '#e9c46a',
    borderWidth: 5,
  },
  oval: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f4a261',
    transform: [{ scaleX: 2 }],
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#e76f51',
    transform: [{ rotate: '180deg' }]
  }
});
