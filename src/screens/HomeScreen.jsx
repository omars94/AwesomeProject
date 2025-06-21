// src/screens/HomeScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, FlatList, Text, StyleSheet, Button } from 'react-native';

const products = [
  { id: '1', name: 'Product A', price: '$10' },
  { id: '2', name: 'Product B', price: '$20' },
  // add more products here
];

export default function HomeScreen(props) {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text
        style={styles.name}
        onPress={() => {
          navigation.navigate('Product');
        }}
      >
        {item.name}
      </Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <Button
        onPress={() => {
          props.setSignedIn(false);
        }}
        title="log out"
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
