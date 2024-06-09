import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { handleCopyPassword } from '../../../modal/index'

export function PasswordItem({ data, removePassword }) {
    return (
        <Pressable onPress={handleCopyPassword} onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111',
        padding: 15,
        width: '100%',
        marginVertical: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#FFF'
    }
});
