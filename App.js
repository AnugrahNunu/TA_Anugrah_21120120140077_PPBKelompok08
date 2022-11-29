import HomeStack from "./pages/HomeScreen";
import IndexStack from "./pages/IndexScreen";
import AboutScreen from "./pages/AboutScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen options={{tabBarIcon: () => <FontAwesomeIcon icon = {faHouse}/>}} 
        name="Home" component={HomeStack} />
        <BottomTab.Screen options={{tabBarIcon: () => <FontAwesomeIcon icon = {faSearch}/>}} 
        name="Index" component={IndexStack} />
        <BottomTab.Screen options={{tabBarIcon: () => <FontAwesomeIcon icon = {faUser}/>}} 
        name="About" component={AboutScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
