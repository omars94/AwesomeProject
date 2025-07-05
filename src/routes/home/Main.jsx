import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../../screens/Products';
import ProductDetails from '../../screens/ProductDetails';
import Cart from '../../screens/Cart';
import Settings from '../../screens/Settings';
import { useTheme } from 'styled-components/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProductsStack({ setSignedIn, signedIn }) {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: theme.accent },
        headerTintColor: theme.buttonText,
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Products" options={{ title: 'Products' }}>
        {props => (
          <Products {...props} setSignedIn={setSignedIn} signedIn={signedIn} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="ProductDetails"
        options={screenProps => {
          const { route } = screenProps;
          return {
            title: route.params?.product?.name ?? 'Product Details',
            headerStyle: { backgroundColor: theme.accent },
            headerTintColor: theme.buttonText,
            headerTitleStyle: { fontWeight: 'bold' },
          };
        }}
        component={ProductDetails}
      />
    </Stack.Navigator>
  );
}

export default function Main({ setSignedIn, signedIn }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ProductsTab" options={{ title: 'Products' }}>
        {props => (
          <ProductsStack
            {...props}
            setSignedIn={setSignedIn}
            signedIn={signedIn}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
