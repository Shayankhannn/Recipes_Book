const Initialrecipes = [
  {
    id: 1,
    title: 'Classic Spaghetti Carbonara',
    author: 'John Doe',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', // Example author image
    date: '2025-02-10',
    views: 120,
    ingredients: [
      '200g spaghetti',
      '100g pancetta',
      '2 eggs',
      '50g Parmesan cheese',
      'Salt & pepper',
    ],
    instructions:
      'Cook spaghetti in salted water. Fry pancetta until crispy. Beat eggs and mix with grated Parmesan. Combine everything, season, and serve immediately.',
    image: 'https://cdn.sanity.io/images/cq7w2e71/production/08ae0b8293235129bbe7d55a3f89c2fc4f1a36d7-973x1300.jpg',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto cum reiciendis recusandae nobis alias eum quidem quo labore reprehenderit?", 
    category: 'Dinner',
  },
  {
    id: 2,
    title: 'Avocado Toast',
    author: 'Jane Smith',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', // Example author image
    date: '2025-02-05',
    views: 90,
    ingredients: [
      '1 avocado',
      '2 slices of whole-grain bread',
      'Salt & pepper',
      'Lemon juice',
      'Red pepper flakes',
    ],
    instructions:
      'Toast the bread. Mash avocado with salt, pepper, and lemon juice. Spread on toast and top with red pepper flakes.',
    image: 'https://www.rootsandradishes.com/wp-content/uploads/2017/08/avocado-toast-with-everything-bagel-seasoning-feat.jpg',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto cum reiciendis recusandae nobis alias eum quidem quo labore reprehenderit?", 
    category: 'Breakfast',
  },
  {
    id: 3,
    title: 'Grilled Chicken Salad',
    author: 'Mark Lee',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', // Example author image
    date: '2025-02-12',
    views: 145,
    ingredients: [
      '1 grilled chicken breast',
      'Mixed greens',
      'Cherry tomatoes',
      'Cucumber slices',
      'Olive oil & balsamic vinegar',
    ],
    instructions:
      'Slice grilled chicken. Toss all ingredients in a bowl. Drizzle with olive oil and balsamic vinegar.',
    image: 'https://somuchfoodblog.com/wp-content/uploads/2022/07/chicken-green-salad4.jpg',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto cum reiciendis recusandae nobis alias eum quidem quo labore reprehenderit?", 
    category: 'Lunch',
  },
  {
    id: 4,
    title: 'Pancakes with Maple Syrup',
    author: 'Sarah Brown',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', // Example author image
    date: '2025-02-08',
    views: 200,
    ingredients: [
      '1 cup flour',
      '1 cup milk',
      '1 egg',
      '1 tbsp sugar',
      '1 tsp baking powder',
      'Butter',
      'Maple syrup',
    ],
    instructions:
      'Mix flour, milk, egg, sugar, and baking powder. Cook pancakes on a buttered pan. Serve with maple syrup.',
    image: 'https://www.acouplecooks.com/wp-content/uploads/2024/08/Brown-Butter-Pancakes-0002.jpg',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto cum reiciendis recusandae nobis alias eum quidem quo labore reprehenderit?", 
    category: 'Breakfast',
  },
  {
    id: 5,
    title: 'Garlic Butter Shrimp',
    author: 'Michael Scott',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', // Example author image
    date: '2025-02-07',
    views: 175,
    ingredients: [
      '200g shrimp',
      '2 cloves garlic',
      '2 tbsp butter',
      'Lemon juice',
      'Parsley',
    ],
    instructions:
      'Sauté garlic in butter. Add shrimp and cook until pink. Drizzle with lemon juice and garnish with parsley.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrly8Xk3KCfWTy2Rwls2tsrtbUAK52RYYZg&s',
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto cum reiciendis recusandae nobis alias eum quidem quo labore reprehenderit?", 
      category: 'Dinner',

    },
  {
    id: 6,
    title: 'Chocolate Chip Cookies',
    author: 'Emily Davis',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', // Example author image
    date: '2025-02-14',
    views: 250, 
    ingredients: [
      '1 cup flour',
      '1/2 cup sugar',
      '1/2 cup butter',
      '1 egg',
      '1/2 tsp baking soda',
      '1/2 cup chocolate chips',
    ],
    instructions:
      'Mix all ingredients into a dough. Scoop onto a baking sheet. Bake at 180°C for 12-15 minutes.',
    image: 'https://familycookierecipes.com/wp-content/uploads/2022/12/Best-Chocolate-Chip-Cookies-19.jpg',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto cum reiciendis recusandae nobis alias eum quidem quo labore reprehenderit?", 
  category: 'Dessert',
  },
];

export default Initialrecipes;


export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}