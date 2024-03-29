import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Animated, {
    RotateInUpRight,
    ZoomOut,
} from 'react-native-reanimated';
import colors from 'tailwindcss/colors';

import {
    Feather,
} from '@expo/vector-icons';

import {
    ILayout,
} from './types';

export const Layout = ({ checked = false, title, ...rest }: ILayout) => {
  return (
    <TouchableOpacity activeOpacity={0.7} className="flex-row mb-2 items-center" {...rest}>
      {checked ? (
        <Animated.View
          className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
          entering={RotateInUpRight}
          exiting={ZoomOut}
        >
          <Feather name="check" size={20} color={colors.white} />
        </Animated.View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
      )}

      <Text className="text-white text-base ml-3 font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};
