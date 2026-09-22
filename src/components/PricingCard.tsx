import { Pressable, Text, View } from 'react-native';
import type { PricingPlan } from '../data/mockData';

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <View className={`relative rounded-2xl border p-7 ${plan.popular ? 'border-olive bg-ink' : 'border-gray-200 bg-white'}`}>
      {plan.popular ? <View className="absolute inset-x-0 -top-3 items-center"><Text className="rounded-full bg-olive px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Most popular ★</Text></View> : null}
      <Text className={`font-display text-2xl ${plan.popular ? 'text-white' : 'text-ink'}`}>{plan.name}</Text>
      <Text className={`mt-2 min-h-[42px] text-sm leading-5 ${plan.popular ? 'text-white/65' : 'text-gray-500'}`}>{plan.description}</Text>
      <View className="my-6 flex-row items-baseline"><Text className={`font-display text-4xl ${plan.popular ? 'text-white' : 'text-ink'}`}>AED {plan.price}</Text><Text className={`ml-2 text-xs ${plan.popular ? 'text-white/60' : 'text-gray-500'}`}>{plan.cadence}</Text></View>
      <View className="mb-7 gap-3">{plan.features.map((feature) => <Text key={feature} className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>✓  {feature}</Text>)}</View>
      <Pressable className={`items-center rounded-full py-3 active:opacity-80 ${plan.popular ? 'bg-white' : 'border border-olive'}`} accessibilityRole="button"><Text className={`text-sm font-bold ${plan.popular ? 'text-ink' : 'text-olive'}`}>Get Started</Text></Pressable>
    </View>
  );
}
