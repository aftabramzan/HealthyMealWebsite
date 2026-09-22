import { Pressable, Text, View } from 'react-native';
import { pricingPlans } from '../data/mockData';
import { PricingCard } from '../components/PricingCard';
import { SectionHeader } from '../components/SectionHeader';
export function PricingSection() { return <View className="bg-white px-6 py-16 md:px-10 md:py-20"><View className="mx-auto w-full max-w-6xl"><View className="mb-9 flex-row items-end justify-between"><SectionHeader eyebrow="Growth Plans" title="Find the Perfect Plan for You" /><Pressable className="hidden md:flex"><Text className="text-xs font-bold text-olive">View All Plans  →</Text></Pressable></View><View className="grid grid-cols-1 gap-5 md:grid-cols-3">{pricingPlans.map((plan) => <PricingCard key={plan.id} plan={plan} />)}</View></View></View>; }
