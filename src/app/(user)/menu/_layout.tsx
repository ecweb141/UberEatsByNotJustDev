// MenuStack.js
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import Colors from "@/constants/Colors";

export default function MenuStack() {
  return (
    <Stack name="menu">
      <Stack.Screen
        name="index"
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href="/cart" asChild>
              <FontAwesome
                name="shopping-cart"
                size={25}
                color={Colors.light.tint}
                style={{ marginRight: 15 }}
              />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
