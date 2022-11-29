import { View, Text, StyleSheet} from "react-native";
import React, { useState, useEffect } from "react";
import {
    Image,
    Alert,
    TouchableOpacity
} from "react-native";
import axios from "axios";
import { Card, Title, Paragraph } from 'react-native-paper';

function AboutScreen() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function fetchdata() {
            const request = await axios
                .get("http://192.168.42.59:3000/About")
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
                    <Title>{info.map((info) => (info.name))}</Title>
                    <Card.Cover source={{uri: "https://siap.undip.ac.id/foto/ktm/2020/21120120140077-0dcfcd75-81ab-4586-93bd-1e4c938ea652.jpg"}} />
                    <Paragraph style={styles.Paragraph}>
                        {info.map((info) => (info.description))}
                    </Paragraph>
                </Card.Content>
            </Card>
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
    }
});

export default AboutScreen