export interface Meal {
  id: string;
  title: string;
  description: string;
  category: string;
  calories: string;
  rating: string;
  price: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  cadence: string;
  features: string[];
  popular?: boolean;
}

export const meals: Meal[] = [
  { id: 'ready', title: 'Healthy Ready-To-Eat Meals', description: 'Fresh, balanced meals prepared daily and ready to enjoy.', category: 'Fresh daily', calories: '420-560 kcal', rating: '4.9', price: 'AED 39', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85' },
  { id: 'custom', title: 'Customized Meal Plans', description: 'Personalized nutrition plans designed for your goals.', category: 'Made for you', calories: '380-520 kcal', rating: '4.8', price: 'AED 45', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85' },
  { id: 'weight', title: 'Weight Management Plans', description: 'Delicious meals to support your wellness journey.', category: 'Balanced', calories: '340-480 kcal', rating: '4.9', price: 'AED 42', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=85' },
  { id: 'protein', title: 'High-Protein Meal Plans', description: 'Nutrition-rich meals for active lifestyles and fitness goals.', category: 'High protein', calories: '500-680 kcal', rating: '4.9', price: 'AED 49', image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=85' },
];

export const pricingPlans: PricingPlan[] = [
  { id: 'essential', name: 'Essential Plan', description: 'Great for individuals starting their healthy journey.', price: '299', cadence: '/ month', features: ['Fresh daily meals', 'Balanced nutrition', 'Flexible delivery'] },
  { id: 'balanced', name: 'Balanced Plan', description: 'Our best value plan for a healthier lifestyle.', price: '449', cadence: '/ month', popular: true, features: ['Customized meal options', 'Wide variety of meals', 'Nutritionist support', 'Flexible delivery'] },
  { id: 'performance', name: 'Performance Plan', description: 'For fitness enthusiasts and active lifestyles.', price: '699', cadence: '/ month', features: ['High-protein meals', 'Performance-focused nutrition', 'Personalized plans', 'Priority support'] },
];

export const faqs = [
  { id: 'plans', question: 'What are your meal plans?', answer: 'Choose from balanced, high-protein, weight management, and fully customized plans. Every menu is chef-prepared with fresh ingredients.' },
  { id: 'delivery', question: 'How does delivery work?', answer: 'We deliver chilled meals to your home or office on your preferred schedule, with flexible delivery windows across Dubai.' },
  { id: 'customize', question: 'Can I customize my meals?', answer: 'Yes. Tell us about your goals, preferences, and allergies and our nutrition team will help tailor the right plan.' },
  { id: 'payment', question: 'What payment methods do you accept?', answer: 'We accept all major credit and debit cards. Secure checkout keeps your payment details protected.' },
  { id: 'app', question: 'Do you have a mobile app?', answer: 'Our mobile-friendly website makes managing your meals effortless. A dedicated app is coming soon.' },
];

export const testimonials = [
  { id: 'sara', quote: 'Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!', name: 'Sara M.', goal: 'Weight management', avatar: 'https://i.pravatar.cc/100?img=47' },
  { id: 'ahmed', quote: 'Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle.', name: 'Ahmed R.', goal: 'Muscle building', avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: 'fatima', quote: 'Great quality, variety, and customer service. I feel healthier and more energized every day.', name: 'Fatima K.', goal: 'Balanced living', avatar: 'https://i.pravatar.cc/100?img=32' },
];
