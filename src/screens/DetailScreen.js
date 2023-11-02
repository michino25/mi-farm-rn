import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path, Polygon } from "react-native-svg";
import { formatCurrency } from "../../utils";

import {
  useSelector,
  useDispatch,
  selectProductById,
  getProductById,
  addCart,
  selectUserInfo,
} from "../../redux";

const DetailScreen = ({ navigation, route }) => {
  const id = route.params.productId;

  const dispatch = useDispatch();
  const product = useSelector(selectProductById(id));
  const user = useSelector(selectUserInfo);

  useEffect(() => {
    if (!product) dispatch(getProductById(id));
  }, [product, id]);

  function addCartHandler() {
    if (user?._id) {
      dispatch(
        addCart({
          user: user._id,
          productId: id,
          quantity: 1,
        })
      );

      navigation.navigate("Cart", {
        screen: "cart-screen",
      });
    } else {
      navigation.navigate("Profile", {
        screen: "signin-screen",
      });
    }
  }

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView className="relative h-full bg-gray-50">
      <TouchableOpacity
        onPress={goBack}
        className="absolute z-10 top-10 left-4 h-10 w-10 justify-center items-center rounded-2xl bg-gray-200/70"
      >
        <MaterialIcons name="chevron-left" size={24} color={"#333"} />
      </TouchableOpacity>

      <ScrollView className="mb-12">
        <View className="w-full bg-white p-10 rounded-3xl">
          <Image
            source={{ uri: product?.photo }}
            className="h-[400] object-cover"
          />
        </View>

        <View className="p-5">
          <View className="bg-white p-5 rounded-xl">
            <Text className="font-semibold text-xl text-lime-600">
              {product?.name}
            </Text>

            <View className="flex-row my-1">
              <Text className="text-xs text-gray-500">Xuất xứ: </Text>
              <Text className="text-xs text-lime-600">{product?.location}</Text>
            </View>

            <View className="flex-row flex-wrap justify-evenly my-2">
              <View className="flex-row items-center">
                <Text className="text-lime-600 text-sm border-b border-transparent border-lime-600">
                  {product?.star / 10}
                </Text>
                <View className="flex items-center space-x-1 ml-1">
                  <Svg
                    className="w-4 h-4 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <Path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </Svg>
                </View>
              </View>

              <View className="flex-row items-center">
                <Text className="text-lime-600 text-sm border-b border-lime-600">
                  {product?.review}
                </Text>
                <Text className="ml-1 text-xs">Đánh Giá</Text>
              </View>

              <View className="flex-row items-baseline">
                <Text className="text-lime-600 text-sm border-b border-lime-600">
                  {product?.sold}
                </Text>
                <Text className="ml-1 text-xs">Đã Bán</Text>
              </View>
            </View>

            <View className="p-6 rounded-xl bg-gray-100/60 my-2 flex-row flex-wrap items-end justify-between space-x-2">
              <Text className="font-semibold text-2xl text-lime-600/90">
                {formatCurrency(product?.price)}
              </Text>
              <Text className="line-through text-gray-600 text-sm">
                {formatCurrency(product?.old_price)}
              </Text>
            </View>
          </View>

          <View className="bg-white p-5 rounded-xl mt-5">
            <Text className="font-semibold mb-1 text-lg text-lime-600">
              Mô tả
            </Text>
            <Text className="text-gray-900 text-sm font-medium mb-1">
              {product?.name}
            </Text>
            <Text className="text-gray-500 text-xs mb-2">
              {product?.description}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 py-2 px-5 flex-row justify-between items-center">
        <TouchableOpacity
          onPress={addCartHandler}
          className="flex-1 items-center bg-lime-600 py-4 rounded-3xl"
        >
          <Text className="text-white text-xs font-semibold">THÊM VÀO GIỎ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
