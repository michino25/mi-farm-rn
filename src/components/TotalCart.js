import { StyleSheet, Text, View, Pressable, ToastAndroid } from "react-native";
import React, { useContext } from "react";
import { formatCurrency } from "../../utils";

const TotalCart = ({ carts }) => {
  return (
    <View className="px-5 pt-3 pb-2 border-t border-gray-100">
      <View className="mb-3">
        <Text className="font-medium">Đơn Hàng</Text>
      </View>

      <View className="flex-row justify-between items-center mb-1">
        <Text className="text-xs text-gray-400">Tổng tiền hàng</Text>
        <Text className="text-xs text-gray-600">
          {formatCurrency(
            carts.reduce(
              (total, cartItem) =>
                total + cartItem.product.price * cartItem.quantity,
              0
            )
          )}
        </Text>
      </View>

      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-xs text-gray-400">Voucher (10%)</Text>
        <Text className="text-xs text-gray-600">
          -
          {formatCurrency(
            carts.reduce(
              (total, cartItem) =>
                total + (cartItem.product.price * cartItem.quantity) / 10,
              0
            )
          )}
        </Text>
      </View>

      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-xs text-gray-600">Tổng Thanh Toán</Text>
        <Text className="text-lg font-semibold">
          {formatCurrency(
            carts.reduce(
              (total, cartItem) =>
                total + ((cartItem.product.price * cartItem.quantity) / 10) * 9,
              0
            )
          )}
        </Text>
      </View>

      <Pressable className="items-center bg-lime-600 py-4 rounded-3xl">
        <Text className="text-white text-xs font-semibold">THANH TOÁN</Text>
      </Pressable>
    </View>
  );
};

export default TotalCart;

const styles = StyleSheet.create({});
