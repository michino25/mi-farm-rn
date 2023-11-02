import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  selectCount,
} from "../../redux/slices/counterSlice";

const TestScreen = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleSubtract = () => {
    dispatch(decrement());
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{count}</Text>
        <Button title="Add" onPress={handleAdd} />
        <Button title="Subtract" onPress={handleSubtract} />
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
