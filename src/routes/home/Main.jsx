import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../../screens/Products';
import ProductDetails from '../../screens/ProductDetails';
import { useTheme } from 'styled-components/native';

const Stack = createNativeStackNavigator();

export default function Main({ setSignedIn, signedIn }) {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
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
