import { Pressable, Text, View } from 'react-native';

interface FAQAccordionProps { question: string; answer: string; isOpen: boolean; onPress: () => void; }

export function FAQAccordion({ question, answer, isOpen, onPress }: FAQAccordionProps) {
  return (
    <View className="border-b border-gray-200">
      <Pressable onPress={onPress} className="min-h-[62px] flex-row items-center justify-between py-4 active:opacity-60" accessibilityRole="button" accessibilityState={{ expanded: isOpen }}>
        <Text className="flex-1 pr-6 text-sm font-bold text-ink">{question}</Text>
        <Text className="text-2xl font-light text-olive">{isOpen ? '−' : '+'}</Text>
      </Pressable>
      {isOpen ? <Text className="pb-5 pr-10 text-sm leading-6 text-gray-600">{answer}</Text> : null}
    </View>
  );
}
