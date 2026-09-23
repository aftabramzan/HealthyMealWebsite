import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import { Modal, Platform, Pressable, ScrollView, Text, View } from 'react-native';
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
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') {
      return;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      let nextActive = 'home';

      for (const [, id] of links) {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
          nextActive = id;
        }
      }

      setActiveId(nextActive);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  const renderLink = (label: string, id: string, mobile = false) => {
    const isActive = activeId === id;
    const textClass = mobile
      ? `text-lg ${isActive ? 'font-bold text-olive' : 'text-ink'}`
      : `text-[11px] font-medium transition-colors duration-200 ${isActive ? 'font-bold text-olive' : 'text-gray-600'}`;

    return (
      <LinkPressable
        key={id}
        href={`#${id}`}
        onPress={() => {
          setActiveId(id);
          if (mobile) {
            setOpen(false);
          }
          goToSection(id);
        }}
        accessibilityRole="link"
        className={mobile ? 'border-b border-gray-100 py-5' : 'rounded-full px-3 py-2 transition-colors duration-200 hover:bg-olive/10 active:bg-olive/15'}
      >
        <Text className={textClass}>{label}</Text>
      </LinkPressable>
    );
  };

  return (
    <>
      <View className="relative z-20 border-b border-gray-100 bg-white px-5 py-3 md:px-10">
        <View className="mx-auto w-full max-w-[1200px] flex-row items-center justify-between">
          <Pressable onPress={() => { setActiveId('home'); goToSection('home'); }} accessibilityRole="link"><View className="min-w-[112px]"><Text className="font-display text-[20px] font-bold leading-5 text-ink">Healthy</Text><Text className="text-[9px] font-bold uppercase tracking-[3px] text-olive">Meals</Text></View></Pressable>
          <View className="hidden flex-1 flex-row items-center justify-center gap-6 md:flex">{links.map(([label, id]) => renderLink(label, id))}</View>
          <LinkPressable href="#contact" onPress={() => { setActiveId('contact'); goToSection('contact'); }} className="hidden rounded-full bg-olive px-5 py-2.5 md:flex" accessibilityRole="button"><Text className="text-[11px] font-bold text-white">Get Started  →</Text></LinkPressable>
          <Pressable onPress={() => setOpen(true)} className="rounded-lg border border-gray-200 px-3 py-2 md:hidden" accessibilityLabel="Open menu"><Text className="text-lg text-ink">☰</Text></Pressable>
        </View>
      </View>
      <Modal visible={open} animationType="slide" transparent onRequestClose={() => setOpen(false)}>
        <View className="flex-1 bg-ink/30"><View className="ml-auto h-full w-[85%] bg-white px-7 py-8"><View className="mb-12 flex-row items-center justify-between"><Text className="font-display text-2xl text-ink">Healthy Meals</Text><Pressable onPress={() => setOpen(false)} accessibilityLabel="Close menu"><Text className="text-3xl text-ink">×</Text></Pressable></View><ScrollView>{links.map(([label, id]) => renderLink(label, id, true))}<LinkPressable href="#contact" onPress={() => { setOpen(false); setActiveId('contact'); goToSection('contact'); }} className="mt-10 items-center rounded-full bg-olive py-4" accessibilityRole="button"><Text className="font-bold text-white">Get Started  →</Text></LinkPressable></ScrollView></View></View>
      </Modal>
    </>
  );
}
