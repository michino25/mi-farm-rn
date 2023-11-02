import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useSelector,
  selectUserInfo,
  userSlice,
  searchSlice,
  cartSlice,
  useDispatch,
} from "../../redux";

const ProfileScreen = ({ navigation }) => {
  const userInfo = useSelector(selectUserInfo);

  const dispatch = useDispatch();
  function logout() {
    dispatch(userSlice.actions.userLogout());
    dispatch(searchSlice.actions.searchReset());
    dispatch(cartSlice.actions.cartsReset());
  }
  // ToastAndroid.show("Logged Out Successfully", ToastAndroid.BOTTOM);

  return (
    <SafeAreaView className="bg-white w-full h-full p-5 flex-col-reverse justify-between">
      {userInfo?.username ? (
        <View className="justify-center items-center">
          <TouchableOpacity
            onPress={logout}
            className="bg-lime-600 w-full py-4 rounded-3xl"
          >
            <Text className="font-semibold text-xs text-white text-center">
              ĐĂNG XUẤT
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="justify-center items-center space-y-3">
          <TouchableOpacity
            onPress={() => navigation.navigate("signup-screen")}
            className="bg-white border border-lime-600 w-full py-4 rounded-3xl"
          >
            <Text className="font-semibold text-xs text-lime-600 text-center">
              ĐĂNG KÝ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("signin-screen")}
            className="bg-lime-600 w-full py-4 rounded-3xl"
          >
            <Text className="font-semibold text-xs text-white text-center">
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {userInfo?.username && (
        <View className="mt-20 p-5 w-full flex-row justify-center items-center border border-slate-200 rounded-2xl">
          <View className="border border-slate-200 rounded-full overflow-hidden">
            <Image
              source={{ uri: userInfo.profilePic }}
              className="h-14 w-14 object-cover"
            />
          </View>

          <View className="ml-3 flex-1 items-start justify-start">
            <Text className="text-lg font-semibold">{userInfo.username}</Text>
            <Text
              numberOfLines={1}
              className="text-sm w-full font-medium text-gray-500"
            >
              {userInfo.email}
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;
