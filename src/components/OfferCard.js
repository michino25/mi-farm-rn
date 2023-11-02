import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import pic from "../../assets/offer-card.png";

const OfferCard = () => {
  return (
    <View className="relative flex-row justify-start w-full max-h-[200px] border border-gray-100 overflow-hidden rounded-2xl">
      <View className="absolute inset-0">
        <Image
          source={pic}
          className="object-contain object-bottom max-w-sm h-52"
        />
      </View>

      <View className="h-full px-6 py-16 bg-black/30">
        <Text className="font-extrabold text-xl text-lime-50 mb-2">
          Giảm 30%
        </Text>
        <Pressable className="bg-lime-600 rounded-2xl">
          <Text className="text-white text-xs font-semibold mx-3 my-1">
            Lấy mã ngay
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OfferCard;
