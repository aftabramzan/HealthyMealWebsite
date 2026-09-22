import { useState } from 'react';
import type { ComponentType } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { goToSection } from '../utils/navigation';

const links = [
  ['Home', 'home'],
  ['About Us', 'about'],
  ['Our Services', 'services'],
  ['Advantages', 'advantages'],
  ['Growth Plans', 'plans'],
  ['Blogs', 'stories'],
  ['Contact Us', 'contact'],
] as const;
const LinkPressable = Pressable as ComponentType<any>;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <View className="relative z-20 border-b border-gray-100 bg-white px-5 py-3 md:px-10">
        <View className="mx-auto w-full max-w-[1200px] flex-row items-center justify-between">
          <Pressable onPress={() => goToSection('home')} accessibilityRole="link"><View className="min-w-[112px]"><Text className="font-display text-[20px] font-bold leading-5 text-ink">Healthy</Text><Text className="text-[9px] font-bold uppercase tracking-[3px] text-olive">Meals</Text></View></Pressable>
          <View className="hidden flex-1 flex-row items-center justify-center gap-6 md:flex">{links.map(([label, id]) => <LinkPressable key={id} href={`#${id}`} onPress={() => goToSection(id)} accessibilityRole="link"><Text className="text-[11px] font-medium text-gray-600 hover:text-olive">{label}</Text></LinkPressable>)}</View>
          <LinkPressable href="#contact" onPress={() => goToSection('contact')} className="hidden rounded-full bg-olive px-5 py-2.5 md:flex" accessibilityRole="button"><Text className="text-[11px] font-bold text-white">Get Started  →</Text></LinkPressable>
          <Pressable onPress={() => setOpen(true)} className="rounded-lg border border-gray-200 px-3 py-2 md:hidden" accessibilityLabel="Open menu"><Text className="text-lg text-ink">☰</Text></Pressable>
        </View>
      </View>
      <Modal visible={open} animationType="slide" transparent onRequestClose={() => setOpen(false)}>
        <View className="flex-1 bg-ink/30"><View className="ml-auto h-full w-[85%] bg-white px-7 py-8"><View className="mb-12 flex-row items-center justify-between"><Text className="font-display text-2xl text-ink">Healthy Meals</Text><Pressable onPress={() => setOpen(false)} accessibilityLabel="Close menu"><Text className="text-3xl text-ink">×</Text></Pressable></View><ScrollView>{links.map(([label, id]) => <LinkPressable key={id} href={`#${id}`} onPress={() => { setOpen(false); goToSection(id); }} className="border-b border-gray-100 py-5" accessibilityRole="link"><Text className="text-lg text-ink">{label}</Text></LinkPressable>)}<LinkPressable href="#contact" onPress={() => { setOpen(false); goToSection('contact'); }} className="mt-10 items-center rounded-full bg-olive py-4" accessibilityRole="button"><Text className="font-bold text-white">Get Started  →</Text></LinkPressable></ScrollView></View></View>
      </Modal>
    </>
  );
}
