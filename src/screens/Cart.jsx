import React from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components/native';

const CartItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.card};
  border-radius: 14px;
  margin-bottom: 14px;
  padding: 14px 12px;
  shadow-color: #000;
  shadow-opacity: 0.08;
  shadow-radius: 8px;
  elevation: 2;
`;

const CartItemImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin-right: 16px;
`;

const CartItemInfo = styled.View`
  flex: 1;
`;

const CartItemName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const CartItemPrice = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.subtext};
  margin-top: 4px;
`;

export default function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const theme = useTheme();
  const dispatch = useDispatch();
  const renderItem = ({ item }) => (
    <CartItemContainer theme={theme}>
      <CartItemImage source={{ uri: item.image }} />
      <CartItemInfo>
        <CartItemName theme={theme}>{item.name}</CartItemName>
        <CartItemName theme={theme}>{item.quantity}</CartItemName>
        <CartItemPrice theme={theme}>{item.price}</CartItemPrice>
        {/* If you have quantity, show it here: */}
        {/* <Text style={{ color: theme.subtext }}>Qty: {item.quantity || 1}</Text> */}
      </CartItemInfo>
      <Pressable
        onPress={() => {
          dispatch({ type: 'REMOVE_FROM_CART', payload: item });
        }}
      >
        <Text>remove item</Text>
      </Pressable>
    </CartItemContainer>
  );

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: theme.background }}>
      {cart.length === 0 ? (
        <Text
          style={{ textAlign: 'center', marginTop: 40, color: theme.subtext }}
        >
          Your cart is empty.
        </Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={item => item.id?.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}
