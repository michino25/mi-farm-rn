import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/logo.png";
import Svg, { Path } from "react-native-svg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  useDispatch,
  userLogin,
  useSelector,
  selectUserStatus,
} from "../../redux";

export default function SignInScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const status = useSelector(selectUserStatus);
  const dispatch = useDispatch();

  function login() {
    dispatch(userLogin({ username, password }));
  }

  useEffect(() => {
    if (status === "logged") {
      setUsername("");
      setPassword("");
      navigation.navigate("profile-screen");
      navigation.navigate("home-screen");
      return;
    }
  }, [status]);

  const goBack = () => {
    navigation.navigate("profile-screen");
  };

  return (
    <SafeAreaView className="bg-white w-full h-full flex-col justify-between">
      <TouchableOpacity
        onPress={goBack}
        className="absolute z-10 top-10 left-4 h-10 w-10 justify-center items-center rounded-2xl bg-gray-200/70"
      >
        <MaterialIcons name="chevron-left" size={24} color={"#333"} />
      </TouchableOpacity>

      <ScrollView className="p-5">
        <View className="flex-col items-center justify-center pt-6 w-full h-full">
          <View className="flex-row items-center justify-center mb-4">
            <Image source={Logo} className="mr-2 w-8 h-8" />
            <Text className="text-2xl font-semibold text-lime-600">miFarm</Text>
          </View>
          <View className="w-full p-6 space-y-6 bg-white">
            <Text className="text-xl font-bold text-gray-900">Đăng nhập</Text>

            <View className="mt-8 space-y-6">
              {status && status !== "registered" && status !== "logged" && (
                <View className="flex-row items-center">
                  <Svg
                    className="w-4 h-4 mr-1 text-red-600"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <Path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm8-4a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm.01 8a1 1 0 102 0V9a1 1 0 10-2 0v5z"
                    ></Path>
                  </Svg>
                  <Text className="text-sm text-red-600 font-medium">
                    {status}
                  </Text>
                </View>
              )}

              <View>
                <Text className="block ml-1 mb-1 text-xs font-medium text-gray-900">
                  Tên đăng nhập
                </Text>
                <TextInput
                  onChangeText={(text) => setUsername(text)}
                  placeholder="username"
                  autoCapitalize="none"
                  className="bg-gray-200/5 border border-gray-200 text-gray-900 sm:text-sm rounded-2xl focus:bg-lime-600/5 focus:border-lime-500 block w-full py-2 px-4"
                  value={username}
                  cursorColor="#65a30d"
                />
              </View>

              <View>
                <Text className="block ml-1 mb-1 text-xs font-medium text-gray-900">
                  Mật khẩu
                </Text>
                <TextInput
                  secureTextEntry={true}
                  placeholder="••••••••"
                  autoCapitalize="none"
                  className="bg-gray-200/5 border border-gray-200 text-gray-900 sm:text-sm rounded-2xl focus:bg-lime-600/5 focus:border-lime-500 block w-full py-2 px-4"
                  value={password}
                  cursorColor="#65a30d"
                  onChangeText={(text) => setPassword(text)}
                />
              </View>

              <TouchableOpacity
                onPress={login}
                className="w-full px-5 py-3 bg-lime-600/90 rounded-2xl hover:bg-lime-700"
              >
                <Text className="text-sm font-medium text-center text-white">
                  Đăng nhập
                </Text>
              </TouchableOpacity>

              <View className="flex-row mb-5 justify-center">
                <Text className="text-sm font-medium text-gray-500">
                  Chưa có tài khoản?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("signup-screen")}
                  className="ml-1"
                >
                  <Text className="text-lime-600">Đăng ký ngay</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
