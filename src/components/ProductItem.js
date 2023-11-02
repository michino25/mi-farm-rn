import { Text, View, Image } from "react-native";
import React from "react";
import { formatCurrency } from "../../utils";
import Svg, { Path } from "react-native-svg";

export default function ProductItem({ name, photo, price, star, sold }) {
  return (
    <View className="w-[166px] rounded-xl justify-center items-center overflow-hidden bg-white py-3 px-2 mb-3">
      <Image className="rounded-xl h-20 w-20" source={{ uri: photo }} />

      <View className="p-2 w-full">
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          className="w-full mt-2 font-medium text-gray-900"
        >
          {name}
        </Text>

        <View className="flex justify-start w-full my-1">
          <Text className="text-lime-600/90 font-semibold">
            {formatCurrency(price)}
          </Text>
        </View>

        <View className="flex-row justify-between">
          <View className="flex-row justify-start items-center">
            <Text className="mr-1 text-xs text-gray-700">{star / 10}</Text>
            <Svg
              className="w-3 h-3 text-yellow-300 mr-1"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <Path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </Svg>
          </View>

          <View className="flex mt-1">
            <Text className="flex text-xs text-gray-700">Đã bán {sold}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
