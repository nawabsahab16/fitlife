
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Calculator } from 'lucide-react';

const BmiCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);
  const [errors, setErrors] = useState<{
    age?: string;
    weight?: string;
    height?: string;
  }>({});

  const validateInputs = () => {
    const newErrors: {
      age?: string;
      weight?: string;
      height?: string;
    } = {};
    
    if (!age) {
      newErrors.age = 'Age is required';
    } else if (parseInt(age) < 2 || parseInt(age) > 120) {
      newErrors.age = 'Age must be between 2 and 120';
    }
    
    if (!weight) {
      newErrors.weight = 'Weight is required';
    } else if (parseFloat(weight) <= 0 || parseFloat(weight) > 500) {
      newErrors.weight = 'Enter a valid weight between 1 and 500 kg';
    }
    
    if (!height) {
      newErrors.height = 'Height is required';
    } else if (parseFloat(height) <= 0 || parseFloat(height) > 300) {
      newErrors.height = 'Enter a valid height between 1 and 300 cm';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateBMI = () => {
    if (!validateInputs()) return;

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
    
    setBmi(parseFloat(calculatedBMI.toFixed(1)));
    
    if (calculatedBMI < 18.5) {
      setCategory('underweight');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
      setCategory('healthy');
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      setCategory('overweight');
    } else {
      setCategory('obese');
    }
    
    setIsCalculated(true);
  };

  const resetCalculator = () => {
    setAge('');
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
    setIsCalculated(false);
    setErrors({});
  };

  // Category information mapping
  const categoryInfo = {
    underweight: {
      title: 'Underweight',
      description: 'Being underweight might indicate nutritional deficiencies or other health issues. It\'s important to consult with a healthcare provider to develop a healthy weight gain plan.',
      image: 'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    healthy: {
      title: 'Healthy Weight',
      description: 'You\'re at a healthy weight according to BMI standards. Maintain your health with regular exercise and a balanced diet rich in nutrients.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    overweight: {
      title: 'Overweight',
      description: 'Being overweight may increase the risk of certain health conditions. Consider consulting a healthcare provider to discuss lifestyle changes that could help you achieve a healthier weight.',
      image: 'https://images.unsplash.com/photo-1530822847156-e0c08a5b4233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    obese: {
      title: 'Obese',
      description: 'Obesity is associated with increased risk of various health conditions. It\'s recommended to work with healthcare professionals to develop a safe and effective weight management plan.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Calculator size={32} />
              </div>
              <h1 className="text-4xl font-bold mb-3">BMI Calculator</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Calculate your Body Mass Index (BMI) to get an indication of whether you're at a healthy weight for your height.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <div className="p-8">
                {!isCalculated ? (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="age" className="block text-sm font-medium mb-2">
                          Age (years)
                        </label>
                        <input
                          id="age"
                          type="number"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.age ? 'border-red-300 focus:ring-red-500' : 'border-input focus:ring-primary'} focus:outline-none focus:ring-2`}
                          placeholder="Enter your age"
                        />
                        {errors.age && <p className="mt-1 text-sm text-red-500">{errors.age}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="weight" className="block text-sm font-medium mb-2">
                          Weight (kg)
                        </label>
                        <input
                          id="weight"
                          type="number"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.weight ? 'border-red-300 focus:ring-red-500' : 'border-input focus:ring-primary'} focus:outline-none focus:ring-2`}
                          placeholder="Enter your weight"
                          step="0.1"
                        />
                        {errors.weight && <p className="mt-1 text-sm text-red-500">{errors.weight}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="height" className="block text-sm font-medium mb-2">
                          Height (cm)
                        </label>
                        <input
                          id="height"
                          type="number"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.height ? 'border-red-300 focus:ring-red-500' : 'border-input focus:ring-primary'} focus:outline-none focus:ring-2`}
                          placeholder="Enter your height"
                          step="0.1"
                        />
                        {errors.height && <p className="mt-1 text-sm text-red-500">{errors.height}</p>}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <button
                        onClick={calculateBMI}
                        className="w-full py-3 px-4 rounded-lg button-gradient text-white font-medium hover:opacity-90 transition-opacity"
                      >
                        Calculate BMI
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="animate-scale-in">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold mb-2">Your BMI Result</h2>
                      <div className="inline-block px-6 py-4 rounded-full bg-primary/10 mb-2">
                        <span className="text-4xl font-bold text-primary">{bmi}</span>
                      </div>
                      <p className="text-lg text-muted-foreground">
                        Your BMI suggests you are
                        <span className={`font-medium ml-1 ${categoryInfo[category as keyof typeof categoryInfo].color}`}>
                          {categoryInfo[category as keyof typeof categoryInfo].title}
                        </span>
                      </p>
                    </div>

                    <div className={`rounded-xl p-6 ${categoryInfo[category as keyof typeof categoryInfo].bgColor} ${categoryInfo[category as keyof typeof categoryInfo].borderColor} border mb-8`}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <div className="md:col-span-1">
                          <div className="aspect-square rounded-lg overflow-hidden">
                            <img 
                              src={categoryInfo[category as keyof typeof categoryInfo].image} 
                              alt={categoryInfo[category as keyof typeof categoryInfo].title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <h3 className={`text-xl font-semibold ${categoryInfo[category as keyof typeof categoryInfo].color} mb-2`}>
                            {categoryInfo[category as keyof typeof categoryInfo].title}
                          </h3>
                          <p>{categoryInfo[category as keyof typeof categoryInfo].description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6 mb-8">
                      <h3 className="text-lg font-semibold mb-3">BMI Categories</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Underweight</span>
                          <span className="font-medium">Below 18.5</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Healthy Weight</span>
                          <span className="font-medium">18.5 - 24.9</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Overweight</span>
                          <span className="font-medium">25 - 29.9</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Obesity</span>
                          <span className="font-medium">30 and above</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={resetCalculator}
                        className="flex-1 py-3 px-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors font-medium"
                      >
                        Calculate Again
                      </button>
                      <a
                        href="#"
                        className="flex-1 py-3 px-4 rounded-lg button-gradient text-white font-medium hover:opacity-90 transition-opacity text-center"
                      >
                        Get Personalized Plan
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Understanding BMI</h2>
              <p className="text-muted-foreground mb-6">
                Body Mass Index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. BMI is calculated by dividing your weight in kilograms by the square of your height in meters.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/30 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-3">BMI Limitations</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Doesn't account for muscle mass</li>
                    <li>Not suitable for pregnant women</li>
                    <li>May not be accurate for children or elderly</li>
                    <li>Doesn't consider body fat distribution</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Consult with healthcare providers</li>
                    <li>Consider other health metrics</li>
                    <li>Focus on healthy habits, not just weight</li>
                    <li>Set realistic goals for yourself</li>
                  </ul>
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

export default BmiCalculator;
