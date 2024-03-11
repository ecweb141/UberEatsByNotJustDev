import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useStore from "Store/cart";

const two = () => {
  const { products } = useStore();
  return (
    <View>
      <Text>Hi hter</Text>
      <Text>Hi hter</Text>
      
    </View>
  );
};

export default two;

const styles = StyleSheet.create({});
