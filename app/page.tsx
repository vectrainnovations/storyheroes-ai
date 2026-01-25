import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Stars */}
          <div className="absolute top-10 left-10 w-8 h-8 text-yellow-400 opacity-60">⭐</div>
          <div className="absolute top-20 right-20 w-6 h-6 text-yellow-300 opacity-50">✨</div>
          <div className="absolute bottom-32 left-1/4 w-7 h-7 text-purple-400 opacity-40">⭐</div>
          <div className="absolute top-1/3 right-1/3 w-5 h-5 text-pink-400 opacity-50">✨</div>
          <div className="absolute bottom-20 right-16 w-6 h-6 text-blue-400 opacity-60">⭐</div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Your Child as the{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Hero
              </span>{' '}
              of Their Own Story
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl">
              Create magical, personalized storybooks where your child becomes the main character. 
              Powered by AI, crafted with love. ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                href="/create"
                className="inline-block text-lg px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                ✨ Create Your Story
              </Link>
              <Link
                href="/gallery"
                className="inline-block text-lg px-10 py-4 border-3 border-purple-600 text-purple-700 hover:bg-purple-50 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                📚 View Examples
              </Link>
            </div>
          </div>

          {/* Hero Visual - Storybook & Happy Child */}
          <div className="relative flex justify-center items-center">
            {/* Background Magic Circle */}
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-purple-200 via-pink-100 to-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            
            <div className="relative z-10 w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Storybook Mockup */}
              <div className="bg-white p-4 rounded-2xl shadow-2xl border-8 border-purple-100 relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="text-8xl mb-4">👦✨</div>
                  <h3 className="text-3xl font-bold mb-2">Leo's Galactic Adventure</h3>
                  <p className="text-lg opacity-90">A Personalized Tale</p>
                  <div className="mt-8 flex gap-2">
                    <span className="text-2xl">⭐</span>
                    <span className="text-2xl">🚀</span>
                    <span className="text-2xl">🌙</span>
                  </div>
                </div>
                {/* Book Shadow */}
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-purple-900/10 -z-10 rounded-2xl blur-lg"></div>
              </div>
              
              {/* Happy Child Floating element (using emoji/icon styling for now) */}
              <div className="absolute -top-12 -right-8 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-6xl shadow-xl border-4 border-white animate-bounce">
                👧
              </div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-pink-400 rounded-full flex items-center justify-center text-5xl shadow-xl border-4 border-white animate-pulse">
                👦
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Storytelling Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl -rotate-6 transform"></div>
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border-2 border-purple-50 flex items-center justify-center p-8 overflow-hidden">
                  <div className="text-center space-y-6">
                    <div className="text-9xl">📖</div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-gray-800 italic">"This is my favorite book ever!"</p>
                      <p className="text-gray-500">- Sarah, age 6</p>
                    </div>
                    <div className="flex justify-center gap-1 text-yellow-400 text-2xl">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Bring Your Book to Life with AI Magic 🪄
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Watch your child's eyes light up when they see themselves as the hero of their very own story. 
                Our advanced AI generates beautiful, unique illustrations and narratives that make every book a one-of-a-kind treasure.
              </p>
              <ul className="space-y-4">
                {['Personalized Illustrations', 'Captivating AI Narratives', 'High-Quality Hardcover Prints', 'Digital eBooks for Instant Reading'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg font-medium text-gray-800">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">
            Three Steps to Magic ✨
          </h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            {/* Step 1 */}
            <div className="relative text-center group">
              <div className="w-32 h-32 mx-auto bg-white rounded-3xl shadow-lg flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300 relative z-10 border-2 border-purple-100">
                ✏️
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-200 rounded-full blur-2xl opacity-40 -z-10"></div>
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Personalize</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Enter your child's name, age, and interests. Our AI handles the rest!
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center group">
              <div className="w-32 h-32 mx-auto bg-white rounded-3xl shadow-lg flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300 relative z-10 border-2 border-pink-100">
                🪄
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-200 rounded-full blur-2xl opacity-40 -z-10"></div>
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Create Magic</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Watch as your unique story and illustrations are generated in seconds.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center group">
              <div className="w-32 h-32 mx-auto bg-white rounded-3xl shadow-lg flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300 relative z-10 border-2 border-blue-100">
                📖
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-200 rounded-full blur-2xl opacity-40 -z-10"></div>
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Enjoy Forever</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Download your eBook instantly or order a beautiful printed keepsake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">⭐</div>
          <div className="absolute bottom-10 right-10 text-8xl">✨</div>
          <div className="absolute top-1/2 right-1/4 text-6xl">🌙</div>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Make Your Child the Star of Their Adventure 🌟
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Join thousands of parents who have created magical memories with StoryHeroes.
          </p>
          <Link
            href="/create"
            className="inline-block text-xl px-12 py-6 bg-white text-purple-600 hover:bg-gray-100 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200"
          >
            Create Your First Story →
          </Link>
        </div>
      </section>
    </div>
  );
}
