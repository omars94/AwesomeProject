import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
const Stack = createNativeStackNavigator();

export default function Main({setSignedIn,signedIn}){
return ( <Stack.Navigator screenOptions={{headerShown:true}}>
    <Stack.Screen
      name="Home"
      // component={HomeScreen}
      options={{ title: 'Products' }}
    >
      {props => (
        <HomeScreen
          {...props}
          setSignedIn={setSignedIn}
          signedIn={signedIn}
        />
      )}
    </Stack.Screen>
    <Stack.Screen
      name="Product"
      // component={HomeScreen}
      options={{ title: 'Products' }}
    >
      {props => (
        <HomeScreen
          {...props}
          setSignedIn={setSignedIn}
          signedIn={signedIn}
        />
      )}
    </Stack.Screen>
  </Stack.Navigator>)
}