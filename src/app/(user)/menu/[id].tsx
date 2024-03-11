import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { ProductList, ProductListType } from "@assets/content/productList";
import { cartProduct } from "Store/cart";
import useStore from "Store/cart";
const sizes = ["S", "M", "L", "LG"];

const ProductListItem = () => {
  const { addProduct } = useStore();
  const [ProductSIze, setProductSize] = useState("M");
  const id = useLocalSearchParams();
  console.log(id.id, "id ");
  const stirngId = String(id);
  const Product = ProductList.find((item) => item.id == id.id);
  if (!Product) {
    return null;
  }

  const data: cartProduct = {
    name: Product.name,
    id: Product.id,
    price: Product.price,
    type: Product.type,
    image: Product.image,
    qty: 1,
    size: String(setProductSize),
  };
  const addToCart = () => {
    addProduct(data);
  };

  return (
    <View key={String(id) + Math.random()} style={styles.main}>
      <Image
        source={{ uri: data.image }}
        style={styles.image}
        alt={data.name}
      />
      <Stack.Screen options={{ title: data.name }} />

      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.price}>${data.price}</Text>
      <Text style={styles.type}>{data.type}</Text>
      <TouchableOpacity>
        <Text
          style={styles.cartButton}
          onPress={() => Alert.alert("hi there how it")}
        >
          Add to cart
        </Text>
      </TouchableOpacity>
      <Pressable style={styles.sizes}>
        {sizes.map((item) => (
          <TouchableOpacity
            style={[
              styles.sizeButon,
              {
                backgroundColor:
                  ProductSIze == item ? "rgba(0,0,0,0.1)" : "white",
              },
            ]}
          >
            <Text
              onPress={() => setProductSize(item)}
              style={[
                styles.sizeText,
                {
                  color: ProductSIze == item ? "#fff" : "#000",
                },
              ]}
              key={item}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </Pressable>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  sizes: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    gap: 26,
    justifyContent: "center",
    marginTop: 20,
  },
  sizeButon: {
    padding: 12,
    height: 50,

    borderRadius: 100,
  },
  sizeText: {
    fontSize: 30,
    textAlign: "center",
  },
  main: {
    flex: 1,
    height: "100%",
    padding: 20,
    gap: 4,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    aspectRatio: 1.5,
    borderRadius: 8,
  },
  type: {
    position: "absolute",
    top: 28,
    right: 28,
    backgroundColor: "green",
    color: "white",
    fontSize: 20,
    borderRadius: 4,
    padding: 4,
  },
  price: {
    fontSize: 27,
    fontWeight: "600",
  },
  name: {
    fontSize: 50,
    fontWeight: "500",
  },
  cartButton: {
    width: "100%",
    padding: 7,
    backgroundColor: "#328398",
    color: "white",
    fontSize: 27,
    display: "flex",
    textAlign: "center",
    borderRadius: 5,
  },
});
