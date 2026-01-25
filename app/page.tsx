import Link from 'next/link';

export default function Home() {
    return (
          <div className="flex flex-col min-h-screen font-sans">
            {/* Navigation */}
                <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                  <div className="flex justify-between items-center h-16">
                                              <div className="flex items-center gap-2">
                                                            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">SH</div>div>
                                                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">StoryHeroes</span>span>
                                              </div>div>
                                              <div className="hidden md:flex items-center space-x-8">
                                                            <Link href="/books" className="text-gray-600 hover:text-purple-600 font-medium">Our Books</Link>Link>
                                                            <Link href="/how-it-works" className="text-gray-600 hover:text-purple-600 font-medium">How it Works</Link>Link>
                                                            <Link href="/pricing" className="text-gray-600 hover:text-purple-600 font-medium">Pricing</Link>Link>
                                                            <Link href="/login" className="px-6 py-2 rounded-full border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-50 transition-colors">Login</Link>Link>
                                              </div>div>
                                  </div>div>
                        </div>div>
      </nav>nav>
          
            {/* Hero Section */}
                <section className="relative flex-1 flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
                  {/* Decorative Stars */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                  <div className="absolute top-10 left-10 w-8 h-8 text-yellow-400 opacity-60">⭐</div>div>
                                  <div className="absolute top-20 right-20 w-6 h-6 text-yellow-300 opacity-50">✨</div>div>
                                  <div className="absolute bottom-32 left-1/4 w-7 h-7 text-purple-400 opacity-40">⭐</div>div>
                                  <div className="absolute bottom-20 right-16 w-6 h-6 text-blue-400 opacity-60">✨</div>div>
                        </div>div>
                
                        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                                  <div className="text-center lg:text-left space-y-8">
                                              <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-bold tracking-wide uppercase">
                                                            Perfect for ages 3-10
                                              </div>div>
                                              
                                              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                                                            Your Child as the <br />
                                                            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">Hero</span>span> of Their <br />
                                                            Own Story
                                              </h1>h1>
                                  
                                              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                                            Create a magical, personalized storybook where your child becomes the main character. Powered by AI, crafted for lifelong memories.
                                              </p>p>
                                  
                                              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                                            <Link 
                                                                              href="/create" 
                                                              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-center"
                                                                            >
                                                                            ✨ Create Your Story
                                                            </Link>Link>
                                              
                                                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                                                            <div className="flex -space-x-2">
                                                                              {[1,2,3,4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="User" />
                                </div>div>
                              ))}
                                                                            </div>div>
                                                                            <div className="ml-2 text-sm">
                                                                                              <div className="flex text-yellow-400">★★★★★</div>div>
                                                                                              <div className="text-gray-500 font-medium">Loved by 10,000+ parents</div>div>
                                                                            </div>div>
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                        
                          {/* 3D Book Visual */}
                                  <div className="relative flex justify-center items-center">
                                    {/* Magic Glow */}
                                              <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-purple-200 via-pink-100 to-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>div>
                                              
                                              <div className="relative z-10 w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-500 perspective-1000">
                                                {/* The Book Mockup */}
                                                            <div className="bg-white p-4 rounded-2xl shadow-[20px_20px_60px_rgba(0,0,0,0.1)] border-8 border-purple-100 relative overflow-hidden aspect-[3/4]">
                                                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-90"></div>div>
                                                                            
                                                              {/* Book Content */}
                                                                            <div className="relative h-full flex flex-col items-center justify-center p-8 text-center text-white">
                                                                                              <div className="text-8xl mb-6 drop-shadow-lg">🚀</div>div>
                                                                                              <h3 className="text-4xl font-black mb-4 tracking-tight leading-tight">Leo's Galactic Adventure</h3>h3>
                                                                                              <div className="w-16 h-1 bg-white/40 rounded-full mb-4"></div>div>
                                                                                              <p className="text-lg opacity-90 font-medium">A Personalized Tale</p>p>
                                                                                              
                                                                              {/* Kid Character overlap */}
                                                                                              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-6xl shadow-xl border-4 border-white">👦</div>div>
                                                                            </div>div>
                                                            </div>div>
                                                            
                                                {/* Secondary Floating Child */}
                                                            <div className="absolute -top-12 -left-8 w-24 h-24 bg-pink-400 rounded-full flex items-center justify-center text-5xl shadow-xl border-4 border-white animate-bounce-slow">👧</div>div>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* Featured Stories Strip */}
                <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4">
                                  <div className="text-center mb-16">
                                              <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Adventures for Ages 3-10</h2>h2>
                                              <p className="text-xl text-gray-600">Choose a theme and make your child the hero</p>p>
                                  </div>div>
                        
                                  <div className="grid md:grid-cols-3 gap-8">
                                    {/* The Magic Forest */}
                                              <div className="group cursor-pointer">
                                                            <div className="aspect-[3/4] rounded-2xl bg-white mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] group-hover:-translate-y-3 transition-all relative overflow-hidden border-4 border-green-100">
                                                                            <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-emerald-400 to-green-600"></div>div>
                                                                            
                                                                            <div className="relative h-full p-6 flex flex-col">
                                                                                              <div className="absolute top-4 right-4 text-4xl opacity-40">🦋</div>div>
                                                                                              
                                                                                              <div className="flex-1 flex items-center justify-center relative">
                                                                                                                  <div className="text-8xl filter drop-shadow-lg mb-4">🌳</div>div>
                                                                                                                  <div className="absolute bottom-10 left-6 text-4xl">🦊</div>div>
                                                                                                                  <div className="absolute top-8 right-8 text-3xl">🐦</div>div>
                                                                                                                  <div className="absolute bottom-4 right-4 text-5xl">🍄</div>div>
                                                                                                </div>div>
                                                                                              
                                                                                              <div className="text-center space-y-2 bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 border-green-200">
                                                                                                                  <h3 className="text-3xl font-black text-green-800 leading-tight tracking-tight">The Magic Forest</h3>h3>
                                                                                                                  <div className="text-sm font-bold text-green-600">[Your Child] Discovers Friendship</div>div>
                                                                                                                  <span className="inline-block px-3 py-1 bg-green-100 rounded-full text-green-700 text-xs font-bold mt-2">Ages 3-6</span>span>
                                                                                                </div>div>
                                                                            </div>div>
                                                                            
                                                                            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-green-800/50 to-transparent"></div>div>
                                                            </div>div>
                                                            
                                                            <p className="text-sm text-gray-600 mb-4 px-2">
                                                                            Join your child on an enchanted journey through a magical forest where friendly animals need help finding their way home.
                                                            </p>p>
                                                            
                                                            <button className="w-full py-3 rounded-xl border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition-all">
                                                                            Personalize this book
                                                            </button>button>
                                              </div>div>
                                  
                                    {/* Ocean Explorers */}
                                              <div className="group cursor-pointer">
                                                            <div className="aspect-[3/4] rounded-2xl bg-white mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] group-hover:-translate-y-3 transition-all relative overflow-hidden border-4 border-blue-100">
                                                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-cyan-400 to-indigo-600"></div>div>
                                                                            
                                                                            <div className="relative h-full p-6 flex flex-col">
                                                                                              <div className="absolute top-4 right-4 text-4xl opacity-40">⭐</div>div>
                                                                                              
                                                                                              <div className="flex-1 flex items-center justify-center relative">
                                                                                                                  <div className="text-8xl filter drop-shadow-lg mb-4">🌊</div>div>
                                                                                                                  <div className="absolute bottom-10 left-6 text-5xl">🐠</div>div>
                                                                                                                  <div className="absolute top-12 right-8 text-4xl">🐙</div>div>
                                                                                                                  <div className="absolute bottom-4 right-4 text-5xl">🐚</div>div>
                                                                                                                  <div className="absolute top-6 left-8 text-3xl">🦈</div>div>
                                                                                                </div>div>
                                                                                              
                                                                                              <div className="text-center space-y-2 bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 border-blue-200">
                                                                                                                  <h3 className="text-3xl font-black text-blue-800 leading-tight tracking-tight">Ocean Explorers</h3>h3>
                                                                                                                  <div className="text-sm font-bold text-blue-600">[Your Child] Saves the Reef</div>div>
                                                                                                                  <span className="inline-block px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-xs font-bold mt-2">Ages 4-8</span>span>
                                                                                                </div>div>
                                                                            </div>div>
                                                                            
                                                                            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-blue-800/50 to-transparent"></div>div>
                                                            </div>div>
                                                            
                                                            <p className="text-sm text-gray-600 mb-4 px-2">
                                                                            Dive into an underwater adventure where your child helps sea creatures protect their colorful coral reef home.
                                                            </p>p>
                                                            
                                                            <button className="w-full py-3 rounded-xl border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition-all">
                                                                            Personalize this book
                                                            </button>button>
                                              </div>div>
                                  
                                    {/* Space Academy */}
                                              <div className="group cursor-pointer">
                                                            <div className="aspect-[3/4] rounded-2xl bg-white mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] group-hover:-translate-y-3 transition-all relative overflow-hidden border-4 border-purple-100">
                                                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600"></div>div>
                                                                            
                                                                            <div className="relative h-full p-6 flex flex-col">
                                                                                              <div className="absolute top-4 right-4 text-4xl opacity-60">✨</div>div>
                                                                                              
                                                                                              <div className="flex-1 flex items-center justify-center relative">
                                                                                                                  <div className="text-8xl filter drop-shadow-lg mb-4">🚀</div>div>
                                                                                                                  <div className="absolute bottom-10 left-6 text-4xl">🪐</div>div>
                                                                                                                  <div className="absolute top-12 right-8 text-5xl">🛸</div>div>
                                                                                                                  <div className="absolute bottom-6 right-6 text-4xl">⭐</div>div>
                                                                                                                  <div className="absolute top-6 left-8 text-3xl">🌙</div>div>
                                                                                                </div>div>
                                                                                              
                                                                                              <div className="text-center space-y-2 bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 border-purple-200">
                                                                                                                  <h3 className="text-3xl font-black text-purple-800 leading-tight tracking-tight">Space Academy</h3>h3>
                                                                                                                  <div className="text-sm font-bold text-purple-600">[Your Child] Explores the Galaxy</div>div>
                                                                                                                  <span className="inline-block px-3 py-1 bg-purple-100 rounded-full text-purple-700 text-xs font-bold mt-2">Ages 6-10</span>span>
                                                                                                </div>div>
                                                                            </div>div>
                                                                            
                                                                            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-purple-800/50 to-transparent"></div>div>
                                                            </div>div>
                                                            
                                                            <p className="text-sm text-gray-600 mb-4 px-2">
                                                                            Blast off on an intergalactic mission where your child becomes a brave astronaut discovering new planets and making alien friends.
                                                            </p>p>
                                                            
                                                            <button className="w-full py-3 rounded-xl border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition-all">
                                                                            Personalize this book
                                                            </button>button>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* Why Parents Choose Us */}
                <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
                        <div className="max-w-7xl mx-auto px-4">
                                  <div className="text-center mb-16">
                                              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Parents Choose StoryHeroes</h2>h2>
                                              <p className="text-xl text-gray-600">More than just a book—it's a treasured keepsake</p>p>
                                  </div>div>
                        
                                  <div className="grid md:grid-cols-3 gap-8">
                                    {[
            { icon: "📖", title: "Boosts Reading Confidence", desc: "Children are 3x more likely to engage with stories they star in" },
            { icon: "💝", title: "Perfect Keepsake Gift", desc: "A unique gift they'll cherish for years to come" },
            { icon: "🎨", title: "Professional Illustrations", desc: "AI-powered artwork that brings every page to life" },
            { icon: "⚡", title: "Instant Digital Delivery", desc: "Download your PDF book immediately after creation" },
            { icon: "🌟", title: "Unique Story Every Time", desc: "Every book is completely personalized and one-of-a-kind" },
            { icon: "👨‍👩‍👧", title: "Made with Love", desc: "Crafted to create magical bedtime moments together" }
                        ].map((benefit, i) => (
                                        <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                                        <div className="text-5xl mb-4">{benefit.icon}</div>div>
                                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>h3>
                                                        <p className="text-gray-600">{benefit.desc}</p>p>
                                        </div>div>
                                      ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* See Inside Preview */}
                <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4">
                                  <div className="text-center mb-16">
                                              <h2 className="text-4xl font-bold text-gray-900 mb-4">See Inside a StoryHeroes Book</h2>h2>
                                              <p className="text-xl text-gray-600">Beautiful illustrations paired with engaging storytelling</p>p>
                                  </div>div>
                        
                                  <div className="max-w-4xl mx-auto">
                                              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                                                            <div className="grid md:grid-cols-2 gap-6">
                                                              {/* Left Page - Text */}
                                                                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                                                                              <div className="text-3xl font-black text-purple-600 mb-4">Chapter 1</div>div>
                                                                                              <div className="space-y-4 text-gray-700 leading-relaxed">
                                                                                                                  <p className="text-lg"><span className="font-bold text-purple-600">[Your Child's Name]</span>span> woke up to find a mysterious map under their pillow.</p>p>
                                                                                                                  <p className="text-lg">"This must lead to treasure!" they exclaimed, eyes sparkling with excitement.</p>p>
                                                                                                                  <p className="text-lg">Little did they know, this was the beginning of the greatest adventure of their life...</p>p>
                                                                                                </div>div>
                                                                            </div>div>
                                                            
                                                              {/* Right Page - Illustration Placeholder */}
                                                                            <div className="bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 rounded-2xl p-8 shadow-lg flex items-center justify-center relative overflow-hidden">
                                                                                              <div className="text-8xl mb-4">🗺️</div>div>
                                                                                              <div className="absolute top-4 right-4 text-5xl animate-pulse">✨</div>div>
                                                                                              <div className="absolute bottom-4 left-4 text-4xl">🏴‍☠️</div>div>
                                                                                              <div className="absolute top-12 left-8 text-3xl">⭐</div>div>
                                                                                              <div className="absolute text-center">
                                                                                                                  <div className="text-6xl mb-2">👧</div>div>
                                                                                                                  <div className="text-sm font-bold text-gray-700 bg-white/80 px-3 py-1 rounded-full">Your Child Here!</div>div>
                                                                                                </div>div>
                                                                            </div>div>
                                                            </div>div>
                                                            
                                                            <div className="text-center mt-6">
                                                                            <p className="text-gray-600 italic">Sample pages - actual books feature professionally illustrated characters</p>p>
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* Extended Testimonials */}
                <section className="py-20 bg-purple-50">
                        <div className="max-w-7xl mx-auto px-4">
                                  <div className="text-center mb-16">
                                              <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Families Worldwide</h2>h2>
                                              <p className="text-xl text-gray-600">Join thousands of happy parents creating magical memories</p>p>
                                  </div>div>
                        
                                  <div className="grid md:grid-cols-3 gap-8">
                                    {[
            { 
                              name: "Sarah M.", 
                              child: "Mia, 6", 
                              quote: "My daughter reads this every night! She's so proud to be the hero of her own story. Best gift ever!",
                              stars: 5 
            },
            { 
                              name: "James T.", 
                              child: "Leo, 4", 
                              quote: "The quality is amazing and it arrived instantly. Leo's face lit up when he saw himself as a space explorer!",
                              stars: 5 
            },
            { 
                              name: "Emma K.", 
                              child: "Oliver, 8", 
                              quote: "As a teacher, I love how this encourages reading. Oliver has read it to his little sister at least 20 times!",
                              stars: 5 
            }
                        ].map((review, i) => (
                                        <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                                                        <div className="flex text-yellow-400 mb-4">
                                                          {"★".repeat(review.stars)}
                                                        </div>div>
                                                        <p className="text-gray-700 text-lg mb-6 italic">"{review.quote}"</p>p>
                                                        <div className="flex items-center gap-3">
                                                                          <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-2xl">
                                                                            {i === 0 ? "👩" : i === 1 ? "👨" : "👩‍🏫"}
                                                                          </div>div>
                                                                          <div>
                                                                                              <div className="font-bold text-gray-900">{review.name}</div>div>
                                                                                              <div className="text-sm text-gray-500">Parent to {review.child}</div>div>
                                                                          </div>div>
                                                        </div>div>
                                        </div>div>
                                      ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* How It Works */}
                <section className="py-24 bg-white">
                        <div className="max-w-7xl mx-auto px-4">
                                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                                              <div className="relative">
                                                            <div className="aspect-square rounded-3xl bg-white shadow-2xl p-8 flex items-center justify-center relative overflow-hidden">
                                                                            <div className="text-[200px]">🪄</div>div>
                                                                            <div className="absolute top-10 right-10 text-6xl animate-pulse">⭐</div>div>
                                                                            <div className="absolute bottom-10 left-10 text-6xl animate-bounce">🎨</div>div>
                                                            </div>div>
                                                            
                                                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-purple-100 max-w-[240px]">
                                                                            <div className="flex text-yellow-400 mb-2">★★★★★</div>div>
                                                                            <p className="text-gray-800 font-bold italic mb-2">"Worth every penny!"</p>p>
                                                                            <p className="text-sm text-gray-500">- Jennifer, Mum to twins</p>p>
                                                            </div>div>
                                              </div>div>
                                  
                                              <div className="space-y-12">
                                                            <div>
                                                                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Create the Magic in 3 Simple Steps</h2>h2>
                                                                            
                                                                            <div className="space-y-8">
                                                                              {[
            {
                                    step: "1",
                                    title: "Add Their Details",
                                    desc: "Enter your child's name, choose their character, and add a custom dedication."
            },
            {
                                    step: "2",
                                    title: "AI Works Its Magic",
                                    desc: "Our AI generates a unique story based on your choices with stunning illustrations."
            },
            {
                                    step: "3",
                                    title: "Instant Download",
                                    desc: "Get your high-quality PDF book immediately, ready for bedtime reading."
            }
                              ].map((item, i) => (
                                                    <div key={i} className="flex gap-6">
                                                                          <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                                                            {item.step}
                                                                          </div>div>
                                                                          <div>
                                                                                                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>h3>
                                                                                                  <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>p>
                                                                          </div>div>
                                                    </div>div>
                                                  ))}
                                                                            </div>div>
                                                            </div>div>
                                              
                                                            <Link 
                                                                              href="/create" 
                                                              className="inline-block px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors"
                                                                            >
                                                                            Start Your Child's Journey
                                                            </Link>Link>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* FAQ Section */}
                <section className="py-20 bg-gray-50">
                        <div className="max-w-4xl mx-auto px-4">
                                  <div className="text-center mb-16">
                                              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>h2>
                                              <p className="text-xl text-gray-600">Everything you need to know about StoryHeroes</p>p>
                                  </div>div>
                        
                                  <div className="space-y-6">
                                    {[
            {
                              q: "How does personalization work?",
                              a: "Simply enter your child's name, select their character appearance, choose a story theme, and add an optional dedication. Our AI creates a unique story featuring your child as the hero!"
            },
            {
                              q: "What age range are these books suitable for?",
                              a: "Our stories are designed for children ages 3-10. Each theme is tagged with a recommended age range to help you choose the perfect adventure."
            },
            {
                              q: "Can I order a physical printed copy?",
                              a: "Currently, we provide instant digital PDF downloads. However, you can easily print your book at home or use a professional printing service for a hardcover keepsake!"
            },
            {
                              q: "How long does it take to receive my book?",
                              a: "Your personalized PDF book is available for instant download immediately after purchase! Perfect for last-minute gifts."
            },
            {
                              q: "Can I preview the book before purchasing?",
                              a: "Yes! Check out our 'See Inside' section above to view sample pages and get a feel for the story quality and illustrations."
            },
            {
                              q: "Is each book truly unique?",
                              a: "Absolutely! Our AI generates each story based on your specific inputs, ensuring every book is completely one-of-a-kind."
            }
                        ].map((faq, i) => (
                                        <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>h3>
                                                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>p>
                                        </div>div>
                                      ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* Final CTA */}
                <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-500 text-white">
                        <div className="max-w-4xl mx-auto px-4 text-center">
                                  <h2 className="text-5xl font-bold mb-6">Ready to Create Magic?</h2>h2>
                                  <p className="text-2xl mb-10 opacity-90">Make your child the hero of their own adventure today</p>p>
                                  
                                  <Link 
                                                href="/create" 
                                    className="inline-block px-12 py-6 bg-white text-purple-600 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all"
                                              >
                                              ✨ Start Creating Now
                                  </Link>Link>
                                  
                                  <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
                                              <div className="flex text-yellow-300">★★★★★</div>div>
                                              <span>4.9/5 from 2,847 happy families</span>span>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* Footer */}
                <footer className="bg-white border-t py-12">
                        <div className="max-w-7xl mx-auto px-4 text-center">
                                  <div className="flex justify-center items-center gap-2 mb-6">
                                              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">SH</div>div>
                                              <span className="text-xl font-bold">StoryHeroes</span>span>
                                  </div>div>
                                  <p className="text-gray-500">© 2026 StoryHeroes. Making every child the hero of their own story.</p>p>
                        </div>div>
                </footer>footer>
          </div>div>
        );
}</div>
