import { TextInput } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Text, View, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    if (search) {
      navigation.navigate("Search", {
        screen: "search-result-screen",
        params: {
          title: `Từ khóa '${search}'`,
          query: `?search=${search}`,
        },
      });
      setSearch("");
    }
  };

  return (
    <SafeAreaView className="flex-1 w-full h-full p-5 bg-white">
      <View className="justify-start items-start h-16">
        <View className="flex-row flex-1 bg-gray-100/80 p-2 px-3 items-center rounded-2xl">
          <TextInput
            placeholder="Tìm kiếm..."
            cursorColor="#65a30d"
            className="px-2 py-2 flex-1"
            onChangeText={(text) => setSearch(text)}
            autoCapitalize="none"
            value={search}
          />

          <TouchableOpacity
            onPress={searchHandler}
            className="flex-row bg-lime-600/90 w-10 h-10 justify-center items-center rounded-xl"
          >
            <MaterialIcons name="search" size={24} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
