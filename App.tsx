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
import { Reveal } from './src/components/Reveal';
import './global.css';

export default function App() {
  return <View className="min-h-screen w-full max-w-full overflow-x-hidden bg-white"><StatusBar style="dark" /><Navbar /><ScrollView className="w-full" showsVerticalScrollIndicator={false}><View nativeID="home"><Reveal><HeroSection /></Reveal></View><Reveal delay={80}><StatsSection /></Reveal><View nativeID="about"><Reveal delay={120}><AboutSection /></Reveal></View><View nativeID="services"><Reveal delay={160}><MealPlansSection /></Reveal></View><View nativeID="advantages"><Reveal delay={200}><AdvantagesSection /></Reveal></View><View nativeID="plans"><Reveal delay={240}><PricingSection /></Reveal></View><Reveal delay={280}><ProcessSection /></Reveal><View nativeID="stories"><Reveal delay={320}><TestimonialsSection /></Reveal></View><Reveal delay={360}><FAQSection /></Reveal><View nativeID="contact"><Reveal delay={400}><CTASection /><Footer /></Reveal></View></ScrollView></View>;
}
