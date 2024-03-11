import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
// import fries from "@/assets/data/fries.jpg";
interface ProductPageTYpe {
  title: string;
  id: string;
  price: number;
  image: any | null;
  type: string;
}
const ProductPage = ({ title, id, price, image, type }: ProductPageTYpe) => {
  return (
    <Link key={id + Math.random()} asChild href={`/(user)/menu/${id}`}>
      <Pressable style={styles.main}>
        <Image
          style={styles.image}
          source={{
            uri:
              image ||
              "https://firebasestorage.googleapis.com/v0/b/food-orderd.appspot.com/o/5038.jpg?alt=media&token=46946b5e-0dd8-4a5b-9c61-fb05e9b3328a",
          }}
          alt="THis is first Image"
        />
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.type}>{type}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    padding: 20,

    borderRadius: 10,
    flex: 1,
    maxWidth: "50%",
  },
  image: {
    aspectRatio: 1,
    width: "100%",
    borderRadius: 20,
  },
  price: {
    fontSize: 20,
    opacity: 0.4,
  },
  name: {
    fontSize: 25,
  },
  type: {
    position: "absolute",
    backgroundColor: "green",
    color: "white",
    padding: 2,
    top: 28,
    right: 28,
    borderRadius: 4,
  },
});
