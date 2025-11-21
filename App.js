import React from "react";
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from "react-native";

import rinini1 from "./images/rinini1.jpg";
import rinini2 from "./images/rinini2.jpg";
import thewnini1 from "./images/thewnini1.jpg";
import thewnini2 from "./images/thewnini2.jpg";
import mang1 from "./images/mang1.jpg";
import mang2 from "./images/mang2.jpg";

export default function App() {
    const r1Name = "Rinini";
    const r1Image = rinini1;

    const r2Name = "Rinini";
    const r2Image = rinini2;

    const t1Name = "Thewnini";
    const t1Image = thewnini1;

    const t2Name = "Thewnini";
    const t2Image = thewnini2;

    const m1Name = "Mang";
    const m1Image = mang1;

    const m2Name = "Mang";
    const m2Image = mang2;

    return (
        <ScrollView style={styles.page}>

            {/* Add Plushie Button */}
            <Pressable
                style={styles.addButton}
                onPress={() => console.log("Add Plushie pressed")}
            >
                <Text style={styles.addButtonText}>➕ Add Plushie</Text>
            </Pressable>

            <Text style={styles.section}>🧸 RININI</Text>

            <View style={styles.card}>
                <Text style={styles.name}>{r1Name}</Text>
                <Image style={styles.pic} source={r1Image} />
            </View>

            <View style={styles.card}>
                <Text style={styles.name}>{r2Name}</Text>
                <Image style={styles.pic} source={r2Image} />
            </View>

            <Text style={styles.section}>🧸 THEWNINI</Text>

            <View style={styles.card}>
                <Text style={styles.name}>{t1Name}</Text>
                <Image style={styles.pic} source={t1Image} />
            </View>

            <View style={styles.card}>
                <Text style={styles.name}>{t2Name}</Text>
                <Image style={styles.pic} source={t2Image} />
            </View>

            <Text style={styles.section}>🧸 MANG</Text>

            <View style={styles.card}>
                <Text style={styles.name}>{m1Name}</Text>
                <Image style={styles.pic} source={m1Image} />
            </View>

            <View style={styles.card}>
                <Text style={styles.name}>{m2Name}</Text>
                <Image style={styles.pic} source={m2Image} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#f7f7f7",
    },
    addButton: {
        backgroundColor: "#ff99cc",
        padding: 15,
        margin: 15,
        borderRadius: 12,
        elevation: 3
    },
    addButtonText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    },
    section: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 15,
        backgroundColor: "#ffe6f2",
        marginTop: 20,
    },
    card: {
        margin: 15,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 12,
        elevation: 4
    },
    name: {
        fontSize: 20,
        marginBottom: 10
    },
    pic: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        alignSelf: "center"
    }
});
