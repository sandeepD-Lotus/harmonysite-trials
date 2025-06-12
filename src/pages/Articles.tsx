
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Articles = () => {
  const articles = [
    {
      title: "The Future of AI in Business Consulting",
      author: "Sarah Johnson",
      date: "December 10, 2024",
      excerpt: "Exploring how artificial intelligence is revolutionizing the consulting industry and transforming client engagements.",
      category: "AI & Technology",
      readTime: "5 min read"
    },
    {
      title: "Market Research Trends for 2025",
      author: "Michael Chen",
      date: "December 8, 2024",
      excerpt: "Key market research methodologies and emerging trends that will shape business strategies in the coming year.",
      category: "Market Research",
      readTime: "7 min read"
    },
    {
      title: "Strategic Growth in Uncertain Times",
      author: "Emily Rodriguez",
      date: "December 5, 2024",
      excerpt: "How businesses can maintain growth momentum and adapt strategies during periods of economic uncertainty.",
      category: "Business Strategy",
      readTime: "6 min read"
    },
    {
      title: "Digital Transformation Success Stories",
      author: "Sarah Johnson",
      date: "December 3, 2024",
      excerpt: "Real-world case studies of successful digital transformation initiatives across various industries.",
      category: "Digital Transformation",
      readTime: "8 min read"
    },
    {
      title: "Data-Driven Decision Making",
      author: "Michael Chen",
      date: "November 30, 2024",
      excerpt: "Leveraging analytics and business intelligence to make informed strategic decisions.",
      category: "Analytics",
      readTime: "5 min read"
    },
    {
      title: "Building Resilient Business Models",
      author: "Emily Rodriguez",
      date: "November 28, 2024",
      excerpt: "Strategies for creating adaptable business models that can withstand market disruptions.",
      category: "Business Strategy",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "AI & Technology", "Market Research", "Business Strategy", "Digital Transformation", "Analytics"];

  return (
    <div className="min-h-screen harmony-gradient">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-harmony-cyan mb-6">Industry Insights & Articles</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest insights, research, and updates from our experts in business consulting, 
              market analysis, and strategic innovation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  index === 0 
                    ? 'bg-harmony-cyan text-white border-harmony-cyan' 
                    : 'border-harmony-cyan/30 text-gray-300 hover:border-harmony-cyan hover:text-harmony-cyan'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {articles.map((article, index) => (
              <Card key={index} className="bg-harmony-navy/50 border border-harmony-cyan/30 hover:border-harmony-cyan transition-all duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-harmony-cyan/20 text-harmony-cyan text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-harmony-cyan transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div>
                      <span className="font-medium text-harmony-cyan">{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="text-center">
            <Card className="bg-harmony-navy/50 border border-harmony-cyan/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-harmony-cyan mb-4">Stay Updated</h3>
                <p className="text-gray-300 mb-6">
                  Subscribe to our newsletter for the latest industry insights, research findings, and strategic updates.
                </p>
                <div className="flex gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-harmony-navy border border-harmony-cyan/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-harmony-cyan"
                  />
                  <button className="bg-harmony-cyan hover:bg-harmony-cyan/80 text-white px-6 py-2 rounded transition-colors">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
