import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Logo from "../../assets/logo.png";
import OfferCard from "../components/OfferCard";
import CategoryItem from "../components/CategoryItem";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  useSelector,
  useDispatch,
  getAllCategories,
  selectCategories,
  selectProducts,
  getProducts,
} from "../../redux";
import ProductList from "../components/ProductList";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getProducts(""));
  }, [dispatch]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-gray-50 h-screen">
        <View className="flex-row items-center px-5 py-2 bg-white">
          <View className="flex-1 flex-row items-center">
            <Image source={Logo} className="w-8 h-8 mr-2" />
            <Text className="text-xl text-lime-600 font-bold">miFarm</Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Search", {
                screen: "search-screen",
              })
            }
            className="flex-row bg-lime-600/90 w-9 h-9 justify-center items-center rounded-xl"
          >
            <MaterialIcons name="search" size={24} color={"#fff"} />
          </TouchableOpacity>

          <View className=""></View>
        </View>

        <ScrollView className="p-5">
          <View className="mb-6">
            <OfferCard />
          </View>

          {/* category */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-bold text-lime-600">Danh mục</Text>
            </View>
            <ScrollView
              className="my-2"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {categories?.map((category) => (
                <TouchableOpacity
                  key={category._id}
                  onPress={() => {
                    navigation.navigate("Search", {
                      screen: "search-result-screen",
                      params: {
                        title: `Loại sản phẩm '${category.name}'`,
                        query: `?category=${category.code}`,
                      },
                    });
                  }}
                >
                  <CategoryItem {...category} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* product */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-bold text-lime-600">
                Sản phẩm nổi bật
              </Text>
            </View>
            <ScrollView className="my-2">
              <ProductList products={products} navigation={navigation} />
            </ScrollView>
          </View>

          <View className="mt-12"></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
