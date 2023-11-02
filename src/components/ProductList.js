import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products, navigation }) {
  return (
    <View className="flex-wrap flex-row justify-between w-full">
      {products?.map((product) => (
        <TouchableOpacity
          key={product._id}
          onPress={() =>
            navigation.navigate("detail-screen", {
              productId: product._id,
            })
          }
        >
          <ProductItem {...product} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
