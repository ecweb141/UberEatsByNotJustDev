import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductPage from "src/components/MY/ProductPage";
// import pizza from "@/assets/data/fries.jpg";
import { ProductList } from "assets/content/productList";
const index = () => {
  return (
    <View style={styles.main}>
      <FlatList
        data={ProductList}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <ProductPage
            id={item.id as string}
            title={item.name}
            price={item.price}
            image={item.image}
            type={item.type}
          />
        )}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {},
  heading: {},
});
