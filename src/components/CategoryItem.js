import { Text, View, Image } from "react-native";
import React from "react";

export default function CategoryItem({ name, code, img }) {
  return (
    <View className="w-[140px] rounded-xl justify-center items-center overflow-hidden mr-3 bg-white py-3 px-2">
      <Image className="rounded-xl h-20 w-20" source={{ uri: img }} />

      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        className="w-full mt-2 font-medium text-center text-gray-900"
      >
        {name}
      </Text>
    </View>
  );
}
