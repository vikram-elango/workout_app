import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomePage = () => {
  const user = 'Bla Bla'; // Replace with actual user name

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome {user}</Text>

      <View style={styles.content}>
        {/* Add your main content here */}
      </View>

      <View style={styles.bottomBar}>
        <Text style={styles.button}>Home</Text>
        <Text style={styles.button}>Workouts</Text>
        <Text style={styles.button}>Idk</Text>
        <Text style={styles.button}>Calender</Text>
        <Text style={styles.button}>Settings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#f2f2f2',
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomePage;
