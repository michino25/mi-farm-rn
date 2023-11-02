import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductList from "../components/ProductList";

import {
  useSelector,
  useDispatch,
  searchProducts,
  selectSearch,
  searchSlice,
} from "../../redux";

const SearchResultScreen = ({ navigation, route }) => {
  const query = route.params.query;
  const title = route.params.title;

  const dispatch = useDispatch();
  const products = useSelector(selectSearch);

  useEffect(() => {
    dispatch(searchProducts(query));
  }, [query]);

  const goBack = () => {
    dispatch(searchSlice.actions.searchReset());
    navigation.navigate("search-screen");
  };

  return (
    <SafeAreaView className="relative h-screen bg-gray-50">
      <TouchableOpacity
        onPress={goBack}
        className="absolute z-10 top-10 left-4 h-10 w-10 justify-center items-center rounded-2xl bg-gray-200/70"
      >
        <MaterialIcons name="chevron-left" size={24} color={"#333"} />
      </TouchableOpacity>

      <View className="items-center pb-5 pt-6 ml-6">
        <Text className="text-lime-600 font-bold break-words">{title}</Text>
      </View>

      <ScrollView className="px-5 pb-5 mb-9">
        <ProductList products={products} navigation={navigation} />
        <View className="h-5"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchResultScreen;
