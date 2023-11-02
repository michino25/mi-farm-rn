import { Text, View, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CartItem from "../components/CartItem";
import TotalCart from "../components/TotalCart";
import Empty from "../../assets/empty.png";

import {
  useDispatch,
  getCarts,
  useSelector,
  selectCarts,
  selectUserInfo,
} from "../../redux";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const carts = useSelector(selectCarts);
  const user = useSelector(selectUserInfo);

  useEffect(() => {
    if (user._id) dispatch(getCarts(user._id));
  }, [user]);

  return (
    <SafeAreaView className="flex-1 w-full bg-white">
      <View className="py-2 px-5">
        <Text className="font-bold text-lg text-lime-600">Giỏ Hàng</Text>
      </View>
      {carts.length === 0 ? (
        <View className="flex-1 flex-col items-center justify-center py-20">
          <Image className="w-60 h-60 object-contain" source={Empty} />
          <Text className="text-gray-600 text-sm">Chưa có sản phẩm nào</Text>
        </View>
      ) : (
        <ScrollView className="px-5">
          {carts.map((cart) => (
            <CartItem key={cart._id} navigation={navigation} {...cart} />
          ))}
        </ScrollView>
      )}

      <TotalCart carts={carts} />
    </SafeAreaView>
  );
};

export default Cart;
