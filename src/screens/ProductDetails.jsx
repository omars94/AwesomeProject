import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductDetails({ route }) {
  const { product } = route.params;
  const { id } = product;
  const theme = useTheme();
  const dispatch = useDispatch();
  const [prod, setProduct] = useState({});
  const getProduct = async () => {};

  useEffect(() => {
    // getProduct();

    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(productData => {
        console.log(productData);
        const transformedProduct = {
          ...productData,
          name: productData.title,
          image: productData.images?.length > 0 ? productData.images[0] : '',
        };
        setProduct(transformedProduct);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  console.log(prod);
  return (
    <Container theme={theme}>
      <ProductImage source={{ uri: prod?.image ?? '' }} />
      <ProductName theme={theme}>{prod.name}</ProductName>
      <ProductPrice theme={theme}>{prod.price}</ProductPrice>
      <SectionTitle theme={theme}>Description</SectionTitle>
      <ProductDescription theme={theme}>
        {prod.description ||
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
      </ProductDescription>
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.background};
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 260px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  margin-bottom: 28px;
`;

const ProductName = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin: 24px 20px 0 20px;
`;

const ProductPrice = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.subtext};
  margin: 10px 20px 0 20px;
`;

const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin: 30px 20px 10px 20px;
`;

const ProductDescription = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.subtext};
  margin: 0 20px 40px 20px;
  line-height: 24px;
`;
