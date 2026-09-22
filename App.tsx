import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { Footer } from './src/components/Footer';
import { HeroSection } from './src/sections/HeroSection';
import { StatsSection } from './src/sections/StatsSection';
import { AboutSection } from './src/sections/AboutSection';
import { MealPlansSection } from './src/sections/MealPlansSection';
import { AdvantagesSection } from './src/sections/AdvantagesSection';
import { PricingSection } from './src/sections/PricingSection';
import { ProcessSection } from './src/sections/ProcessSection';
import { TestimonialsSection } from './src/sections/TestimonialsSection';
import { FAQSection } from './src/sections/FAQSection';
import { CTASection } from './src/sections/CTASection';
import './global.css';

export default function App() {
  return <View className="min-h-screen w-full max-w-full overflow-x-hidden bg-white"><StatusBar style="dark" /><Navbar /><ScrollView className="w-full" showsVerticalScrollIndicator={false}><View nativeID="home"><HeroSection /></View><StatsSection /><View nativeID="about"><AboutSection /></View><View nativeID="services"><MealPlansSection /></View><View nativeID="advantages"><AdvantagesSection /></View><View nativeID="plans"><PricingSection /></View><ProcessSection /><View nativeID="stories"><TestimonialsSection /></View><FAQSection /><View nativeID="contact"><CTASection /><Footer /></View></ScrollView></View>;
}
