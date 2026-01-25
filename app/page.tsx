import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">SH</div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">StoryHeroes</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/books" className="text-gray-600 hover:text-purple-600 font-medium">Our Books</Link>
              <Link href="/how-it-works" className="text-gray-600 hover:text-purple-600 font-medium">How it Works</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-purple-600 font-medium">Pricing</Link>
              <Link href="/login" className="px-6 py-2 rounded-full border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-50 transition-colors">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Decorative Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-8 h-8 text-yellow-400 opacity-60">⭐</div>
          <div className="absolute top-20 right-20 w-6 h-6 text-yellow-300 opacity-50">✨</div>
          <div className="absolute bottom-32 left-1/4 w-7 h-7 text-purple-400 opacity-40">⭐</div>
          <div className="absolute bottom-20 right-16 w-6 h-6 text-blue-400 opacity-60">✨</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-bold tracking-wide uppercase">
              Perfect for ages 3-10
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
              Your Child as the <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">Hero</span> of Their <br />
              Own Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Create a magical, personalized storybook where your child becomes the main character. Powered by AI, crafted for lifelong memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link 
                href="/create"
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-center"
              >
                ✨ Create Your Story
              </Link>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="ml-2 text-sm">
                  <div className="flex text-yellow-400">★★★★★</div>
                  <div className="text-gray-500 font-medium">Loved by 10,000+ parents</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Book Visual */}
          <div className="relative flex justify-center items-center">
            {/* Magic Glow */}
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-purple-200 via-pink-100 to-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            
            <div className="relative z-10 w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-500 perspective-1000">
              {/* The Book Mockup */}
              <div className="bg-white p-4 rounded-2xl shadow-[20px_20px_60px_rgba(0,0,0,0.1)] border-8 border-purple-100 relative overflow-hidden aspect-[3/4]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-90"></div>
                
                {/* Book Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center text-white">
                   <div className="text-8xl mb-6 drop-shadow-lg">🚀</div>
                   <h3 className="text-4xl font-black mb-4 tracking-tight leading-tight">Leo's Galactic Adventure</h3>
                   <div className="w-16 h-1 bg-white/40 rounded-full mb-4"></div>
                   <p className="text-lg opacity-90 font-medium">A Personalized Tale</p>
                   
                   {/* Kid Character overlap */}
                   <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-6xl shadow-xl border-4 border-white">👦</div>
                </div>
              </div>
              
              {/* Secondary Floating Child */}
              <div className="absolute -top-12 -left-8 w-24 h-24 bg-pink-400 rounded-full flex items-center justify-center text-5xl shadow-xl border-4 border-white animate-bounce-slow">👧</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Strip */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Adventures for Ages 3-10</h2>
            <p className="text-xl text-gray-600">Choose a theme and make your child the hero</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The Magic Forest", icon: "🌳", age: "Ages 3-6", color: "from-green-400 to-emerald-600" },
              { title: "Ocean Explorers", icon: "🌊", age: "Ages 4-8", color: "from-blue-400 to-indigo-600" },
              { title: "Space Academy", icon: "🛸", age: "Ages 6-10", color: "from-purple-500 to-pink-600" }
            ].map((book, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${book.color} mb-6 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all p-6 flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">{book.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{book.title}</h3>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">{book.age}</span>
                </div>
                <button className="w-full py-3 rounded-xl border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition-all">
                  Personalize this book
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Visual & Illustrated */}
      <section className="py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="aspect-square rounded-3xl bg-white shadow-2xl p-8 flex items-center justify-center relative overflow-hidden">
                   <div className="text-[200px]">🪄</div>
                   {/* Floating items */}
                   <div className="absolute top-10 right-10 text-6xl animate-pulse">⭐</div>
                   <div className="absolute bottom-10 left-10 text-6xl animate-bounce">🎨</div>
                </div>
                {/* Trust Badge */}
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-purple-100 max-w-[240px]">
                   <p className="text-gray-800 font-bold italic mb-2">"My daughter reads this every night!"</p>
                   <p className="text-sm text-gray-500">- Sarah, Mum to Mia (6)</p>
                </div>
             </div>
             
             <div className="space-y-12">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Create the Magic in 3 Simple Steps</h2>
                  <div className="space-y-8">
                    {[
                      { step: "1", title: "Add Their Details", desc: "Enter your child's name, choose their character, and add a custom dedication." },
                      { step: "2", title: "AI Works Its Magic", desc: "Our AI generates a unique story based on your choices with stunning illustrations." },
                      { step: "3", title: "Instant Download", desc: "Get your high-quality PDF book immediately, ready for bedtime reading." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link href="/create" className="inline-block px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors">
                  Start Your Child's Journey
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">SH</div>
            <span className="text-xl font-bold">StoryHeroes</span>
          </div>
          <p className="text-gray-500">© 2026 StoryHeroes. Making every child the hero of their own story.</p>
        </div>
      </footer>
    </div>
  );
}