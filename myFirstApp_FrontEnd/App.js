import React,{useState} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./src/stack/HomeStack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  const [userRegistered, setUserRegistered] = useState(false);
  
  const handleRegistrationComplete = () => {
    setUserRegistered(!userRegistered);
  }
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name = "Home"
        component = {HomeStack}
        option = {{ 
            tabBarLabel:"Inicio",
            tabBarIcon:({color,size}) => (
            <MaterialCommunityIcons name="home"
            color={color} size={size} />
        ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

