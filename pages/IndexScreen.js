import MejaScreen from "../details/MejaScreen";
import BangkuScreen from "../details/BangkuScreen";
import RakScreen from "../details/RakScreen";
import LemariScreen from "../details/LemariScreen";
import VasScreen from "../details/VasScreen";
import KasurScreen from "../details/KasurScreen";
import SofaScreen from "../details/SofaScreen";
import LukisanScreen from "../details/LukisanScreen";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Image,
  Alert,
  TouchableOpacity,
  Button
} from "react-native";
import axios from "axios";
import ColorfulCard from "react-native-colorful-card";

const Stack = createStackNavigator();

const IndexStack = () => {
    return(
        <Stack.Navigator initialRouteName='Index'>
            <Stack.Screen name='Index' component={Index}/>
            <Stack.Screen name='Meja' component={MejaScreen}/>
            <Stack.Screen name='Bangku' component={BangkuScreen}/>
            <Stack.Screen name='Rak' component={RakScreen}/>
            <Stack.Screen name='Lemari' component={LemariScreen}/>
            <Stack.Screen name='Vas' component={VasScreen}/>
            <Stack.Screen name='Kasur' component={KasurScreen}/>
            <Stack.Screen name='Sofa' component={SofaScreen}/>
            <Stack.Screen name='Lukisan' component={LukisanScreen}/>
        </Stack.Navigator>
    )
};

let Index = ({navigation}) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios
        .get("http://192.168.42.59:3000/detail")
        .then((res) => {
          console.log(res.data);
          setInfo(res.data);
        })
        .catch((e) => Alert.alert("Gagal", e));
      return request;
    }

    fetchdata();
  }, [])
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Image
            source={{
              uri: "https://bit.ly/39BPh9p"
            }}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>Katalog Furniture</Text>
        </View>
        <View style={styles.bodyCard}>
          <ColorfulCard
            value={info.slice(0, 1).map((info) => (info.name))}
            style={styles.listCard}
            iconImageSource={require("../assets/meja.png")}
            onPress={() => navigation.navigate("Meja")}
          />
          <ColorfulCard
            value={info.slice(1, 2).map((info) => (info.name))}
            style={styles.listCard}
            iconImageSource={require("../assets/kursi.png")}
            onPress={() => navigation.navigate("Bangku")}
          />
        </View>
        <View style={styles.bodyCard2}>
          <ColorfulCard
            value={info.slice(2, 3).map((info) => (info.name))}
            style={styles.listCard}
            iconImageSource={require("../assets/rak.png")}
            onPress={() => navigation.navigate("Rak")}
          />
          <ColorfulCard
            value={info.slice(3, 4).map((info) => (info.name))}
            style={styles.listCard}
            iconImageSource={require("../assets/lemari.png")}
            onPress={() => navigation.navigate("Lemari")}
          />
        </View>
        <View style={styles.bodyCard3}>
          <ColorfulCard
            value={info.slice(4, 5).map((info) => (info.name))}
            style={styles.listCard}
            iconImageSource={require("../assets/vas.png")}
            onPress={() => navigation.navigate("Vas")}
          />
          <ColorfulCard
            value={info.slice(5, 6).map((info) => (info.name))}
            style={styles.listCard}
            iconImageSource={require("../assets/kasur.png")}
            onPress={() => navigation.navigate("Kasur")}
          />
        </View>
        <View style={styles.bodyCard3}>
          <ColorfulCard
            value={info.slice(6, 7).map((info) => (info.name))}
            style={styles.listCard}
            iconImageSource={require("../assets/sofa.png")}
            onPress={() => navigation.navigate("Sofa")}
          />
          <ColorfulCard
            value={info.slice(7, 8).map((info) => (info.name))}
            style={styles.listCard}
            iconImageSource={require("../assets/lukisan.png")}
            onPress={() => navigation.navigate("Lukisan")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#1363aF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: "center",
    paddingBottom: 10,
    flexDirection: "row",
    marginBottom: 10
  },
  headerImage: {
    height: 120,
    width: 100
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  bodyCard: {
    flexDirection: "row"
  },
  bodyCard2: {
    marginTop: 10,
    flexDirection: "row"
  },
  bodyCard3: {
    marginTop: 10,
    flexDirection: "row"
  },
  listCard: {
    backgroundColor: "#7954ff",
    marginLeft: 10,
  }
});

export default IndexStack;
