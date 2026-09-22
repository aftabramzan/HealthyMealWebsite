import { Pressable, Text, View } from 'react-native';
import { meals } from '../data/mockData';
import { MealCard } from '../components/MealCard';
import { SectionHeader } from '../components/SectionHeader';
export function MealPlansSection() { return <View className="bg-cream px-6 py-16 md:px-10 md:py-20"><View className="mx-auto w-full max-w-6xl"><View className="mb-8 flex-row items-end justify-between"><SectionHeader eyebrow="Our Services" title="Healthy Meal Plans for Every Lifestyle" /><Pressable className="hidden md:flex"><Text className="text-xs font-bold text-olive">View All Services  →</Text></Pressable></View><View className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">{meals.map((meal) => <MealCard key={meal.id} meal={meal} />)}</View></View></View>; }
