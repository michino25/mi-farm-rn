import Svg, { Line } from "react-native-svg";
import { Text, View, TouchableOpacity } from "react-native";

export default function Quantity({ quantity, increase, decrease }) {
  return (
    <View className="flex-row justify-center items-center rounded-xl bg-white border border-gray-100">
      <TouchableOpacity
        className="py-1 px-1.5 text-sm font-medium"
        onPress={decrease}
      >
        <Svg
          className="w-5 h-5 text-gray-900"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <Line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="5"
            x2="19"
            y1="12"
            y2="12"
          ></Line>
        </Svg>
      </TouchableOpacity>

      <View className="text-sm font-medium text-gray-900 bg-white border-l border-r border-gray-100">
        <Text className="w-8 border-0 text-center">{quantity}</Text>
      </View>

      <TouchableOpacity
        className="py-1 px-1.5 text-sm font-medium"
        onPress={increase}
      >
        <Svg
          className="w-5 h-5 text-gray-900"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <Line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="12"
            x2="12"
            y1="19"
            y2="5"
          ></Line>
          <Line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="5"
            x2="19"
            y1="12"
            y2="12"
          ></Line>
        </Svg>
      </TouchableOpacity>
    </View>
  );
}
