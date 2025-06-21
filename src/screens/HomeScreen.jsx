// src/screens/HomeScreen.js
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Product A', price: '$10' },
  { id: '2', name: 'Product B', price: '$20' },
  // add more products here
];

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  list: { padding: 20 },
  item: {
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  name: { fontSize: 18 },
  price: { fontSize: 16, color: '#888' },
});
