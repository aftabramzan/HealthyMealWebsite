import { Text, View } from 'react-native';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}

export function SectionHeader({ eyebrow, title, description, light = false }: SectionHeaderProps) {
  return (
    <View className="w-full max-w-full md:max-w-2xl">
      <Text className={`mb-3 text-[10px] font-bold uppercase tracking-[2px] ${light ? 'text-emerald-200' : 'text-olive'}`}>{eyebrow}</Text>
      <Text className={`font-display text-4xl leading-[1.05] md:text-5xl ${light ? 'text-white' : 'text-ink'}`}>{title}</Text>
      {description ? <Text className={`mt-4 text-base leading-6 ${light ? 'text-white/75' : 'text-gray-600'}`}>{description}</Text> : null}
    </View>
  );
}
