import { Pressable, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { PricingPlan } from '../data/mockData';
import { goToSection } from '../utils/navigation';

const planIcons = {
  essential: 'leaf',
  balanced: 'star',
  performance: 'signal-cellular-3',
} as const;

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <View className={`relative h-full rounded-xl border p-6 ${plan.popular ? 'border-olive bg-ink' : 'border-gray-200 bg-white'}`}>
      {plan.popular ? <View className="absolute inset-x-0 -top-3 items-center"><Text className="rounded-t-xl bg-olive px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Most popular ★</Text></View> : null}
      <View className="flex-row items-center gap-3"><MaterialCommunityIcons name={planIcons[plan.id as keyof typeof planIcons] ?? 'leaf'} size={28} color={plan.popular ? '#87975d' : '#60723b'} /><Text className={`flex-1 font-display text-xl ${plan.popular ? 'text-white' : 'text-ink'}`}>{plan.name}</Text></View>
      <Text className={`mt-2 min-h-[42px] text-sm leading-5 ${plan.popular ? 'text-white/65' : 'text-gray-500'}`}>{plan.description}</Text>
      <View className="my-5 flex-row items-baseline"><Text className={`font-display text-3xl ${plan.popular ? 'text-white' : 'text-ink'}`}>AED {plan.price}</Text><Text className={`ml-2 text-xs ${plan.popular ? 'text-white/60' : 'text-gray-500'}`}>{plan.cadence}</Text></View>
      <View className="mb-6 flex-1 gap-3">{plan.features.map((feature) => <Text key={feature} className={`text-xs ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>✓  {feature}</Text>)}</View>
      <Pressable onPress={() => goToSection('contact')} className={`items-center rounded-lg py-2.5 active:opacity-80 ${plan.popular ? 'bg-white' : 'border border-olive'}`} accessibilityRole="button"><Text className={`text-xs font-bold ${plan.popular ? 'text-ink' : 'text-olive'}`}>Get Started</Text></Pressable>
    </View>
  );
}
