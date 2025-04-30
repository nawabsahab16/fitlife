
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Search, Filter } from 'lucide-react';
import nutritionData, { NutritionItem } from '@/lib/nutritionData';

const Nutrition = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [filteredItems, setFilteredItems] = useState<NutritionItem[]>(nutritionData);
  
  const categories = ['All', ...Array.from(new Set(nutritionData.map(item => item.category)))];
  
  useEffect(() => {
    let filtered = [...nutritionData];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Sort items
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'calories-asc':
          return a.calories - b.calories;
        case 'calories-desc':
          return b.calories - a.calories;
        case 'protein-desc':
          return b.protein - a.protein;
        case 'carbs-desc':
          return b.carbs - a.carbs;
        case 'fat-desc':
          return b.fat - a.fat;
        default:
          return 0;
      }
    });
    
    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                  <path d="M12 22a7 7 0 0 0 7-7h-7V4a7 7 0 0 0-7 7v4h7v7z"/>
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-3">Nutrition Database</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our comprehensive nutrition database to make informed decisions about your diet and health goals.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl overflow-hidden mb-8">
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search foods..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative w-full sm:w-auto">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Filter className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full sm:w-40 pl-10 pr-4 py-3 rounded-lg border border-input appearance-none focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                      >
                        <option value="">All Categories</option>
                        {categories.filter(c => c !== 'All').map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="relative w-full sm:w-auto">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full sm:w-44 px-4 py-3 rounded-lg border border-input appearance-none focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                      >
                        <option value="name">Sort by: Name (A-Z)</option>
                        <option value="calories-asc">Sort by: Calories (Low to High)</option>
                        <option value="calories-desc">Sort by: Calories (High to Low)</option>
                        <option value="protein-desc">Sort by: Protein (High to Low)</option>
                        <option value="carbs-desc">Sort by: Carbs (High to Low)</option>
                        <option value="fat-desc">Sort by: Fat (High to Low)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <div 
                        key={item.id} 
                        className="group bg-white border border-border/60 hover:border-primary/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="aspect-video w-full overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-bold">{item.name}</h3>
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Serving size: {item.servingSize}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-muted/30 rounded-lg p-2 text-center">
                              <p className="text-xs text-muted-foreground">Calories</p>
                              <p className="text-lg font-medium">{item.calories}</p>
                            </div>
                            <div className="bg-muted/30 rounded-lg p-2 text-center">
                              <p className="text-xs text-muted-foreground">Protein</p>
                              <p className="text-lg font-medium">{item.protein}g</p>
                            </div>
                            <div className="bg-muted/30 rounded-lg p-2 text-center">
                              <p className="text-xs text-muted-foreground">Carbs</p>
                              <p className="text-lg font-medium">{item.carbs}g</p>
                            </div>
                            <div className="bg-muted/30 rounded-lg p-2 text-center">
                              <p className="text-xs text-muted-foreground">Fat</p>
                              <p className="text-lg font-medium">{item.fat}g</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-muted-foreground text-lg">No items match your search criteria.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-2xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Nutrition Facts Understanding Guide</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Reading Nutrition Labels</h3>
                    <p className="text-muted-foreground mb-4">
                      Understanding nutrition labels helps you make informed food choices. Here's what the key components mean:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Calories</strong>: The energy provided by the food</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Protein</strong>: Essential for muscle building and repair</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Carbohydrates</strong>: Primary source of energy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Fat</strong>: Important for hormone production and nutrient absorption</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Fiber</strong>: Aids digestion and helps maintain blood sugar levels</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Creating a Balanced Diet</h3>
                    <p className="text-muted-foreground mb-4">
                      A balanced diet provides all the nutrients your body needs for optimal health:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Aim for a variety of whole foods</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Include protein with each meal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Choose complex carbs over simple sugars</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Incorporate healthy fats from sources like avocados, nuts, and olive oil</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Stay hydrated with plenty of water</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nutrition;
