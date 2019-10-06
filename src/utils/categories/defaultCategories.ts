interface Category {
  name: string;
  type: string;
  icon: string;
  createdAt: number;
}
interface CategoriesType {
  [id: string]: Category;
}

export const defaultCategories: CategoriesType = {
  d172b3121: {
    name: 'Food and drinks',
    type: 'expense',
    icon: 'shop',
    createdAt: Date.now(),
  },
  d172b5722: {
    name: 'Shopping',
    type: 'expense',
    icon: 'credit-card',
    createdAt: Date.now(),
  },
  d172b6c23: {
    name: 'Transports',
    type: 'expense',
    icon: 'bus-front-12',
    createdAt: Date.now(),
  },
  d172ba724: {
    name: 'Home',
    type: 'expense',
    icon: 'building',
    createdAt: Date.now(),
  },
  d172bc525: {
    name: 'Bills and taxes',
    type: 'expense',
    icon: 'money-coins',
    createdAt: Date.now(),
  },
  d172bdd26: {
    name: 'Fun',
    type: 'expense',
    icon: 'satisfied',
    createdAt: Date.now(),
  },
  d172bf027: {
    name: 'Car',
    type: 'expense',
    icon: 'delivery-fast',
    createdAt: Date.now(),
  },
  d172c0328: {
    name: 'Travels',
    type: 'expense',
    icon: 'spaceship',
    createdAt: Date.now(),
  },
  d172c1529: {
    name: 'Family and personal',
    type: 'expense',
    icon: 'single-02',
    createdAt: Date.now(),
  },
  d172c5f210: {
    name: 'Health',
    type: 'expense',
    icon: 'ambulance',
    createdAt: Date.now(),
  },
  d172c76211: {
    name: 'Education',
    type: 'expense',
    icon: 'hat-3',
    createdAt: Date.now(),
  },
  d172c97212: {
    name: 'Groceries',
    type: 'expense',
    icon: 'basket',
    createdAt: Date.now(),
  },
  d172cab213: {
    name: 'Gifts',
    type: 'expense',
    icon: 'favourite-28',
    createdAt: Date.now(),
  },
  d172cbf214: {
    name: 'Sport and free time',
    type: 'expense',
    icon: 'controller',
    createdAt: Date.now(),
  },
  d172cd3215: {
    name: 'Beauty',
    type: 'expense',
    icon: 'bag-17',
    createdAt: Date.now(),
  },
  d172ce6216: {
    name: 'Work',
    type: 'expense',
    icon: 'briefcase-24',
    createdAt: Date.now(),
  },
  d172d1e217: {
    name: 'Others',
    type: 'expense',
    icon: 'tag',
    createdAt: Date.now(),
  },
  d172d32218: {
    name: 'Recurrent',
    type: 'expense',
    icon: 'calendar-grid-58',
    createdAt: Date.now(),
  },
};
