import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
	    <View style={styles.redView} />
	    <View style={styles.yellowView}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  redView: {
    flex: 1,
    backgroundColor: 'red'
  },
	yellowView: {
		flex: 6,
		backgroundColor: 'yellow'
	}
});
