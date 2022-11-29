import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import {
    Image,
    Alert,
    TouchableOpacity
} from "react-native";
import axios from "axios";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

function MejaScreen() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function fetchdata() {
            const request = await axios
                .get("http://192.168.42.59:3000/Meja")
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
                <Card style={styles.bodyCard}>
                    <Card.Content>
                        <Title>{info.slice(0, 1).map((info) => (info.name))}</Title>
                        <View style={styles.contenCard}>
                            <Card.Cover source={require("../assets/arc-en-ciel-346.jpg")} style={styles.imageCard} />
                            <View>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.desc))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(0, 1).map((info) => (info.description))}</Paragraph>
                                <Text></Text>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.price))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(0, 1).map((info) => (info.harga))}</Paragraph>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.bodyCard}>
                    <Card.Content>
                        <Title>{info.slice(1, 2).map((info) => (info.name))}</Title>
                        <View style={styles.contenCard}>
                            <Card.Cover source={require("../assets/meja/archimedes.jpg")} style={styles.imageCard} />
                            <View>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.desc))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(1, 2).map((info) => (info.description))}</Paragraph>
                                <Text></Text>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.price))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(1, 2).map((info) => (info.harga))}</Paragraph>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.bodyCard}>
                    <Card.Content>
                        <Title>{info.slice(2, 3).map((info) => (info.name))}</Title>
                        <View style={styles.contenCard}>
                            <Card.Cover source={require("../assets/meja/boston.jpg")} style={styles.imageCard} />
                            <View>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.desc))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(2, 3).map((info) => (info.description))}</Paragraph>
                                <Text></Text>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.price))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(2, 3).map((info) => (info.harga))}</Paragraph>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.bodyCard}>
                    <Card.Content>
                        <Title>{info.slice(3, 4).map((info) => (info.name))}</Title>
                        <View style={styles.contenCard}>
                            <Card.Cover source={require("../assets/meja/brenta.jpg")} style={styles.imageCard} />
                            <View>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.desc))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(3, 4).map((info) => (info.description))}</Paragraph>
                                <Text></Text>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.price))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(3, 4).map((info) => (info.harga))}</Paragraph>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.bodyCard}>
                    <Card.Content>
                        <Title>{info.slice(4, 5).map((info) => (info.name))}</Title>
                        <View style={styles.contenCard}>
                            <Card.Cover source={require("../assets/meja/lalocanda.jpg")} style={styles.imageCard} />
                            <View>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.desc))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(4, 5).map((info) => (info.description))}</Paragraph>
                                <Text></Text>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.price))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(4, 5).map((info) => (info.harga))}</Paragraph>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.bodyCard}>
                    <Card.Content>
                        <Title>{info.slice(5, 6).map((info) => (info.name))}</Title>
                        <View style={styles.contenCard}>
                            <Card.Cover source={require("../assets/meja/gioveoutlet.jpg")} style={styles.imageCard} />
                            <View>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.desc))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(5, 6).map((info) => (info.description))}</Paragraph>
                                <Text></Text>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.price))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(5, 6).map((info) => (info.harga))}</Paragraph>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.bodyCard}>
                    <Card.Content>
                        <Title>{info.slice(6, 7).map((info) => (info.name))}</Title>
                        <View style={styles.contenCard}>
                            <Card.Cover source={require("../assets/meja/clip.jpg")} style={styles.imageCard} />
                            <View>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.desc))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(6, 7).map((info) => (info.description))}</Paragraph>
                                <Text></Text>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.price))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(6, 7).map((info) => (info.harga))}</Paragraph>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.bodyCard}>
                    <Card.Content>
                        <Title>{info.slice(7, 8).map((info) => (info.name))}</Title>
                        <View style={styles.contenCard}>
                            <Card.Cover source={require("../assets/meja/claro.jpg")} style={styles.imageCard} />
                            <View>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.desc))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(7, 8).map((info) => (info.description))}</Paragraph>
                                <Text></Text>
                                <Text style={styles.descCard}>{info.slice(8, 9).map((info) => (info.price))}</Text>
                                <Paragraph style={styles.descCard}>{info.slice(7, 8).map((info) => (info.harga))}</Paragraph>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );

}

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
        marginTop: 10
    },
    imageCard: {
        width: 160
    },
    contenCard: {
        flexDirection: "row"
    },
    descCard: {
        marginLeft: 5,
        width: 200
    },
    button: {
        alignSelf: "center",
        justifyContent: "center"
    }

});
export default MejaScreen