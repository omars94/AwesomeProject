import axios from 'axios';
import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
  Text,
  Dimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled, { useTheme } from 'styled-components/native';

const products = [
  {
    id: '1',
    name: 'Product A',
    price: '$10',
    image: 'https://picsum.photos/600/400',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    name: 'Product B',
    price: '$20',
    image: 'https://picsum.photos/600/400',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '3',
    name: 'Product C',
    price: '$30',
    image: 'https://picsum.photos/600/400',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
];

function ThemeToggleButton() {
  const mode = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <ThemeToggle onPress={() => dispatch({ type: 'TOGGLE_THEME' })}>
      <ThemeToggleText>
        {mode === 'light' ? '🌙 Dark' : '🌞 Light'}
      </ThemeToggleText>
    </ThemeToggle>
  );
}

export default function Products({ navigation, setSignedIn }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  console.log(products);
  const getProducts = async () => {
    try {
      const productsRes = await axios({
        // url: 'https://dummyjson.com/products',
        url: 'http://127.0.0.1:3001/products',
        method: 'get',
        timeout: 3000,
      });
      let products = productsRes?.data ?? [];
      products.map(p => {
        p.name = p.title;
        p.image = p.images[0];
        return p;
      });
      dispatch({ type: 'SET_PRODUCTS', payload: products });
    } catch (e) {
      console.log(e, JSON.parse(JSON.stringify(e)));
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: theme.card,
        borderRadius: 18,
        marginBottom: 18,
        paddingVertical: 18,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        // shadowOffset: 0 2,
        elevation: 3,
      }}
      onPress={() =>
        navigation.navigate('ProductDetails', {
          product: { id: item.id, name: item.name },
        })
      }
      theme={theme}
    >
      <ProductImage source={{ uri: item.image }} />
      <ProductInfo>
        <ProductName theme={theme}>{item.name}</ProductName>
        <ProductPrice theme={theme}>{item.price}</ProductPrice>
        <ProductDescription theme={theme} numberOfLines={2}>
          {item.description}
        </ProductDescription>
        <Pressable
          style={{
            borderWidth: 1,
            borderRadius: 10,
            alignItems: 'center',
            padding: 10,
            margin: 5,
            width: 100,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
          onPress={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
        >
          <Text>Add to Cart</Text>
        </Pressable>
      </ProductInfo>
    </TouchableOpacity>
  );

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <Title theme={theme}>Our Products</Title>
        <ThemeToggleButton />
      </Header>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 10 }}
        showsVerticalScrollIndicator={false}
      />
      <Pressable
        style={{
          borderWidth: 1,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          margin: 5,
          backgroundColor: 'green',
          height: 100,
        }}
        onPress={async () => {
          try {
            const product = {
              title: 'Kiwi2',
              description:
                'Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.',
              category: 'groceries',
              price: 2.49,
              discountPercentage: 15.22,
              rating: 4.93,
              stock: 99,
              tags: ['fruits'],
              sku: 'GRO-BRD-KIW-030',
              weight: 5,
              dimensions: {
                width: 19.4,
                height: 18.67,
                depth: 17.13,
              },
              warrantyInformation: '6 months warranty',
              shippingInformation: 'Ships overnight',
              availabilityStatus: 'In Stock',
              reviews: [
                {
                  rating: 4,
                  comment: 'Highly recommended!',
                  date: '2025-04-30T09:41:02.053Z',
                  reviewerName: 'Emily Brown',
                  reviewerEmail: 'emily.brown@x.dummyjson.com',
                },
                {
                  rating: 2,
                  comment: 'Would not buy again!',
                  date: '2025-04-30T09:41:02.053Z',
                  reviewerName: 'Jackson Morales',
                  reviewerEmail: 'jackson.morales@x.dummyjson.com',
                },
                {
                  rating: 4,
                  comment: 'Fast shipping!',
                  date: '2025-04-30T09:41:02.053Z',
                  reviewerName: 'Nora Russell',
                  reviewerEmail: 'nora.russell@x.dummyjson.com',
                },
              ],
              returnPolicy: '7 days return policy',
              minimumOrderQuantity: 30,
              meta: {
                createdAt: '2025-04-30T09:41:02.053Z',
                updatedAt: '2025-04-30T09:41:02.053Z',
                barcode: '2530169917252',
                qrCode: 'https://cdn.dummyjson.com/public/qr-code.png',
              },
              images: [
                'https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp',
              ],
              thumbnail:
                'https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp',
              name: 'Kiwi',
              image:
                'https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp',
            };
            const res = await axios({
              url: 'http://localhost:3001/products',
              method: 'post',
              timeout: 3000,
              data: { ...product },
            });
            console.log(res);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Text style={{ color: 'white' }}>Add Product</Text>
      </Pressable>
      <Pressable
        style={{
          borderWidth: 1,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          margin: 5,
          backgroundColor: 'green',
          height: 100,
        }}
        onPress={async () => {
          try {
            const res = await axios({
              url: 'http://localhost:3001/products/23',
              method: 'delete',
              timeout: 3000,
              // data: { ...product   },
            });
            console.log(res);
            getProducts();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Text style={{ color: 'white' }}>delete Product</Text>
      </Pressable>
      <LogoutButton theme={theme} onPress={() => setSignedIn(false)}>
        <LogoutText theme={theme}>Log out</LogoutText>
      </LogoutButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.background};
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px 10px 20px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const ThemeToggle = styled.TouchableOpacity`
  background: ${({ theme }) => theme.accent};
  padding: 8px 16px;
  border-radius: 20px;
`;

const ThemeToggleText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const ProductCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-start;
  background: ${({ theme }) => theme.card};
  border-radius: 18px;
  margin-bottom: 18px;
  padding: 18px 16px;
  shadow-color: #000;
  shadow-opacity: 0.08;
  shadow-radius: 8px;
  shadow-offset: 0px 2px;
  elevation: 3;
`;

const ProductImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 12px;
  margin-right: 18px;
`;

const ProductInfo = styled.View`
  flex: 1;
`;

const ProductName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const ProductPrice = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.subtext};
  margin-top: 4px;
`;

const ProductDescription = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.subtext};
  margin-top: 8px;
`;

const LogoutButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.button};
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  margin: 20px;
`;

const LogoutText = styled.Text`
  color: ${({ theme }) => theme.buttonText};
  font-size: 16px;
  font-weight: bold;
`;
