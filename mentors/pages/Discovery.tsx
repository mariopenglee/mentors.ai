import React, { useState, useRef } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, ScrolliView, Dimensons, Text } from 'react-native';
import PhilosopherCard from '../components/PhilosopherCard';

export default function Discovery() {
    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.bigTitle}>Discover your next mentor</Text>
            <PhilosopherCard />
        </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    bigTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});