
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gradient">FitLife</h3>
            <p className="text-muted-foreground">
              Helping you achieve your fitness goals with science-backed methods and personalized guidance.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/bmi-calculator" className="text-muted-foreground hover:text-primary transition-colors">BMI Calculator</Link></li>
              <li><Link to="/nutrition" className="text-muted-foreground hover:text-primary transition-colors">Nutrition</Link></li>
              <li><Link to="/exercises" className="text-muted-foreground hover:text-primary transition-colors">Exercises</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Workout Plans</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Nutrition Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Fitness Tips</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">info@fitlife.com</li>
              <li className="text-muted-foreground">+1 (555) 123-4567</li>
              <li className="text-muted-foreground">123 Fitness Street, Health City</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} FitLife. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
