
export interface NutritionItem {
  id: number;
  name: string;
  category: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  image: string;
  servingSize: string;
}

const nutritionData: NutritionItem[] = [
  {
    id: 1,
    name: "Chicken Breast",
    category: "Protein",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    fiber: 0,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    servingSize: "100g"
  },
  {
    id: 2,
    name: "Salmon",
    category: "Protein",
    calories: 208,
    protein: 20,
    carbs: 0,
    fat: 13,
    fiber: 0,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    servingSize: "100g"
  },
  {
    id: 3,
    name: "Brown Rice",
    category: "Grains",
    calories: 112,
    protein: 2.6,
    carbs: 23,
    fat: 0.9,
    fiber: 1.8,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    servingSize: "100g (cooked)"
  },
  {
    id: 4,
    name: "Broccoli",
    category: "Vegetables",
    calories: 55,
    protein: 3.7,
    carbs: 11.2,
    fat: 0.6,
    fiber: 5.1,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2802&q=80",
    servingSize: "100g"
  },
  {
    id: 5,
    name: "Avocado",
    category: "Fruits",
    calories: 160,
    protein: 2,
    carbs: 8.5,
    fat: 14.7,
    fiber: 6.7,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1775&q=80",
    servingSize: "100g"
  },
  {
    id: 6,
    name: "Greek Yogurt",
    category: "Dairy",
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4,
    fiber: 0,
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1608&q=80",
    servingSize: "100g"
  },
  {
    id: 7,
    name: "Oats",
    category: "Grains",
    calories: 389,
    protein: 16.9,
    carbs: 66.3,
    fat: 6.9,
    fiber: 10.6,
    image: "https://images.unsplash.com/photo-1599488381004-5eba40e8342c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    servingSize: "100g (dry)"
  },
  {
    id: 8,
    name: "Egg",
    category: "Protein",
    calories: 72,
    protein: 6.3,
    carbs: 0.4,
    fat: 5,
    fiber: 0,
    image: "https://images.unsplash.com/photo-1607690424560-8ab664c85a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    servingSize: "1 large egg"
  },
  {
    id: 9,
    name: "Almonds",
    category: "Nuts",
    calories: 579,
    protein: 21.2,
    carbs: 21.7,
    fat: 49.9,
    fiber: 12.5,
    image: "https://images.unsplash.com/photo-1510430842590-e783163d4302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    servingSize: "100g"
  },
  {
    id: 10,
    name: "Banana",
    category: "Fruits",
    calories: 89,
    protein: 1.1,
    carbs: 22.8,
    fat: 0.3,
    fiber: 2.6,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    servingSize: "1 medium (118g)"
  },
  {
    id: 11,
    name: "Sweet Potato",
    category: "Vegetables",
    calories: 86,
    protein: 1.6,
    carbs: 20.1,
    fat: 0.1,
    fiber: 3,
    image: "https://images.unsplash.com/photo-1596097690514-498971808621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    servingSize: "100g"
  },
  {
    id: 12,
    name: "Quinoa",
    category: "Grains",
    calories: 120,
    protein: 4.4,
    carbs: 21.3,
    fat: 1.9,
    fiber: 2.8,
    image: "https://images.unsplash.com/photo-1610725657432-f790041bd64c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
    servingSize: "100g (cooked)"
  },
  {
    id: 13,
    name: "Blueberries",
    category: "Fruits",
    calories: 57,
    protein: 0.7,
    carbs: 14.5,
    fat: 0.3,
    fiber: 2.4,
    image: "https://images.unsplash.com/photo-1457301608217-56ba2e95eaf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    servingSize: "100g"
  },
  {
    id: 14,
    name: "Lentils",
    category: "Legumes",
    calories: 116,
    protein: 9,
    carbs: 20,
    fat: 0.4,
    fiber: 7.9,
    image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    servingSize: "100g (cooked)"
  },
  {
    id: 15,
    name: "Olive Oil",
    category: "Fats",
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    servingSize: "100g"
  },
  {
    id: 16,
    name: "Spinach",
    category: "Vegetables",
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    fiber: 2.2,
    image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    servingSize: "100g"
  }
];

export default nutritionData;
