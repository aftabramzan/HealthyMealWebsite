import { useRef } from 'react';
import { Animated, Image, Platform, Pressable, Text, View } from 'react-native';
import type { Meal } from '../data/mockData';
import { goToSection } from '../utils/navigation';

export function MealCard({ meal }: { meal: Meal }) {
  const scale = useRef(new Animated.Value(1)).current;
  const animateScale = (toValue: number) => Animated.spring(scale, { toValue, damping: 16, stiffness: 240, useNativeDriver: Platform.OS !== 'web' }).start();

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable onPress={() => goToSection('contact')} onPressIn={() => animateScale(0.98)} onPressOut={() => animateScale(1)} accessibilityRole="button" className="overflow-hidden rounded-2xl border border-gray-200 bg-white active:opacity-80 md:hover:-translate-y-1 md:hover:shadow-xl">
        <Image source={{ uri: meal.image }} accessibilityLabel={`${meal.title} meal`} className="h-44 w-full" resizeMode="cover" />
        <View className="p-5">
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="rounded-full bg-sage px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-olive">{meal.category}</Text>
          <Text className="text-sm text-gold">★ {meal.rating}</Text>
        </View>
        <Text className="font-display text-xl leading-6 text-ink">{meal.title}</Text>
        <Text className="mt-2 text-sm leading-5 text-gray-500">{meal.description}</Text>
        <View className="mt-5 flex-row items-end justify-between border-t border-gray-100 pt-4">
          <Text className="text-xs text-gray-500">{meal.calories}</Text>
          <Text className="text-base font-bold text-olive">{meal.price}<Text className="text-xs font-normal text-gray-500"> / meal</Text></Text>
        </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}
