import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = () => {
  return (
    <View>
      <Text style={styles.footer}>Thank You!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    footer: {
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30
    }
})

export default Footer;