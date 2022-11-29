import MESScreen from "../details/MESScreen";
import ModernScreen from "../details/Modern";
import EuropeScreen from "../details/Europe";
import AsiaScreen from "../details/AsiaScreen";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
    Image,
    Alert,
    TouchableOpacity
} from "react-native";
import axios from "axios";
import { Card, Title, Paragraph } from 'react-native-paper';

const Stack = createStackNavigator();

const HomeStack = () => {
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='MES' component={MESScreen}/>
            <Stack.Screen name='Modern' component={ModernScreen}/>
            <Stack.Screen name='Europe' component={EuropeScreen}/>
            <Stack.Screen name='Asia' component={AsiaScreen}/>
        </Stack.Navigator>
    )
};

const Home = ({navigation}) => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function fetchdata() {
            const request = await axios
                .get("http://192.168.42.59:3000/general")
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
                <Card style={styles.bodyCard}>
                    <Card.Content>
                        <Title>{info.slice(0, 1).map((info) => (info.name))}</Title>
                        <Card.Cover source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3CKlJbiZrwInll1cWIQwHgj6C3mSMMFdhcQ&usqp=CAU" }} />
                        <Paragraph style={styles.Paragraph}>
                            {info.slice(0, 1).map((info) => (info.description))}
                        </Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button
                            title="Detail Furniture"
                            style={styles.button}
                            onPress={() => navigation.navigate("MES")}
                        />
                    </Card.Actions>
                </Card>
                <Card style={styles.bodyCard}>
                    <Card.Content>
                        <Title>{info.slice(1, 2).map((info) => (info.name))}</Title>
                        <Card.Cover source={{ uri: "https://lh5.googleusercontent.com/Rfy72oQtPnR9aRH0fbUZX33jVZqW4mTY5OOWHYKBe_D7Ol_KGuH9bLeW4L_8nj3S0m5XFOcgnBwEbHccW5ro3rmeiNR--lHpeIDBgZXVlHqoP9217-wg1132h-0pJHMwGeDAv0Ya" }} />
                        <Paragraph style={styles.Paragraph}>
                            {info.slice(1, 2).map((info) => (info.description))}
                        </Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button
                            title="Detail Furniture"
                            style={styles.button}
                            onPress={() => navigation.navigate("Modern")}
                        />
                    </Card.Actions>
                </Card>
                <Card style={styles.bodyCard}>
                    <Card.Content>
                        <Title>{info.slice(2, 3).map((info) => (info.name))}</Title>
                        <Card.Cover source={{ uri: "https://artikel.rumah123.com/news-content/img/2021/12/19175747/victoria-klasik.jpg" }} />
                        <Paragraph style={styles.Paragraph}>
                            {info.slice(2, 3).map((info) => (info.description))}
                        </Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button
                            title="Detail Furniture"
                            style={styles.button}
                            onPress={() => navigation.navigate("Europe")}
                        />
                    </Card.Actions>
                </Card>
                <Card style={styles.bodyCard}>
                    <Card.Content>
                        <Title>{info.slice(3, 4).map((info) => (info.name))}</Title>
                        <Card.Cover source={{ uri: "http://www.gram-miyazaki.com/wp-content/uploads/2020/11/Karakteristik-Desain-Interior-di-China_2-768x498.jpg" }} />
                        <Paragraph style={styles.Paragraph}>
                            {info.slice(3, 4).map((info) => (info.description))}
                        </Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button
                            title="Detail Furniture"
                            style={styles.button}
                            onPress={() => navigation.navigate("Asia")}
                        />
                    </Card.Actions>
                </Card>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    Paragraph: {
        textAlign: "justify"
    },
    bodyCard: {
        marginBottom: 10
    },
    button: {
        alignSelf: "center",
        justifyContent: "center"
    }

});

export default HomeStack;
