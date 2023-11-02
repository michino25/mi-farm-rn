import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Quantity from "./Quantity";
import { formatCurrency } from "../../utils";
import {
  useDispatch,
  updateCart,
  useSelector,
  selectUserInfo,
} from "../../redux";

const CartItem = ({ product, quantity, navigation }) => {
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  const setQuantity = (num) => {
    dispatch(
      updateCart({
        user: user._id,
        productId: product._id,
        quantity: num,
      })
    );
  };

  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
    else setQuantity(0);
  };
  const increase = () => {
    setQuantity(quantity + 1);
  };

  const toDetail = () => {
    navigation.navigate("Home", {
      screen: "detail-screen",
      params: {
        productId: product._id,
      },
    });
  };

  return (
    <View className="flex-row my-3">
      <TouchableOpacity onPress={toDetail}>
        <Image
          source={{ uri: product.photo }}
          className="rounded-2xl h-24 w-24 object-contain"
        />
      </TouchableOpacity>

      <View className="flex-1 flex-col justify-between items-start px-3">
        <View className="mb-1 w-full">
          <TouchableOpacity onPress={toDetail}>
            <Text
              className="font-medium text-sm w-full mb-0.5"
              numberOfLines={1}
            >
              {product.name}
            </Text>
          </TouchableOpacity>
          <Text className="text-gray-400/90 text-xs">
            {formatCurrency(product.price)}
          </Text>
        </View>

        <View className="flex-row justify-start">
          <Quantity
            quantity={quantity}
            increase={increase}
            decrease={decrease}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => setQuantity(0)}
        className="flex-row justify-center items-center w-10 h-10 bg-lime-600/10 rounded-2xl"
      >
        <MaterialIcons name="delete-outline" size={20} color="#65a30d" />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
