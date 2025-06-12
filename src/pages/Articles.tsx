
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const Articles = () => {
  const articles = [
    {
      title: "The Future of AI in Business Consulting",
      excerpt: "Exploring how artificial intelligence is transforming the consulting industry and creating new opportunities for business optimization.",
      date: "December 10, 2024",
      category: "AI & Technology",
      readTime: "5 min read"
    },
    {
      title: "Digital Transformation Success Stories",
      excerpt: "Real-world case studies of companies that successfully navigated digital transformation challenges and achieved remarkable results.",
      date: "December 8, 2024",
      category: "Digital Strategy",
      readTime: "8 min read"
    },
    {
      title: "Market Research in the Data Age",
      excerpt: "How modern data analytics tools are revolutionizing market research methodologies and providing deeper customer insights.",
      date: "December 5, 2024",
      category: "Market Research",
      readTime: "6 min read"
    },
    {
      title: "Building Resilient Business Strategies",
      excerpt: "Strategic frameworks for creating adaptable business models that can thrive in uncertain and rapidly changing environments.",
      date: "December 3, 2024",
      category: "Strategy",
      readTime: "7 min read"
    },
    {
      title: "The ROI of IT Consulting Services",
      excerpt: "Quantifying the value of professional IT consulting and understanding the long-term benefits for business growth.",
      date: "December 1, 2024",
      category: "IT Consulting",
      readTime: "4 min read"
    },
    {
      title: "Cloud Migration Best Practices",
      excerpt: "Essential guidelines and strategies for successful cloud adoption, from planning to implementation and optimization.",
      date: "November 28, 2024",
      category: "Cloud Technology",
      readTime: "9 min read"
    }
  ];

  const categories = ["All", "AI & Technology", "Digital Strategy", "Market Research", "Strategy", "IT Consulting", "Cloud Technology"];

  return (
    <div className="min-h-screen harmony-gradient">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-harmony-cyan mb-6">Articles & Insights</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry insights, research findings, and thought leadership articles to help you stay ahead in the rapidly evolving business landscape.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-harmony-cyan/30 text-harmony-cyan hover:bg-harmony-cyan hover:text-white transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <Card className="bg-harmony-navy/50 border border-harmony-cyan/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-harmony-cyan text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-harmony-cyan text-sm">{articles[0].category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{articles[0].title}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{articles[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{articles[0].date}</span>
                      <span>•</span>
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>
                  <div className="bg-harmony-teal/20 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-harmony-cyan mb-4">📊</div>
                      <p className="text-harmony-cyan font-medium">Latest Insights</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Card key={index} className="bg-harmony-navy/50 border border-harmony-cyan/30 hover:border-harmony-cyan transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="bg-harmony-cyan/20 text-harmony-cyan px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 text-center">
            <div className="bg-harmony-navy/50 border border-harmony-cyan/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-harmony-cyan mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest insights and industry updates delivered directly to your inbox.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
