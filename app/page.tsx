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
          
          {/* Clouds */}
          <div className="absolute top-24 left-1/3 text-6xl opacity-20">☁️</div>
          <div className="absolute top-40 right-1/4 text-5xl opacity-15">☁️</div>
          <div className="absolute bottom-40 left-1/4 text-7xl opacity-10">☁️</div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Your Child as the{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Hero
            </span>{' '}
            of Their Own Story
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Create magical, personalized storybooks where your child becomes the main character. 
            Powered by AI, crafted with love. ✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-5xl">
                ✏️
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Personalize</h3>
              <p className="text-gray-600 leading-relaxed">
                Enter your child's name, age, and interests to create a unique character.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center text-5xl">
                🪄
              </div>
              <h3 className="text-2xl font-bold text-gray-900">AI Magic</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI generates a captivating story tailored just for them.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-5xl">
                📖
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Beautiful Book</h3>
              <p className="text-gray-600 leading-relaxed">
                Download your professionally designed storybook ready to print or share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Why StoryHeroes?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unique Stories</h3>
              <p className="text-gray-600">Every book is personalized with your child's details and interests</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600">Advanced AI creates engaging, age-appropriate narratives</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect Gift</h3>
              <p className="text-gray-600">Create a keepsake they'll treasure forever</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Creation</h3>
              <p className="text-gray-600">Generate your personalized book in minutes</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🖨️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Print or Digital</h3>
              <p className="text-gray-600">Download instantly or order a printed hardcover</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Made with Love</h3>
              <p className="text-gray-600">Carefully crafted to inspire imagination and joy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Create Magic? ✨
          </h2>
          <p className="text-xl md:text-2xl opacity-95">
            Start your child's personalized adventure today!
          </p>
          <Link
            href="/create"
            className="inline-block text-lg px-12 py-5 bg-white text-purple-600 hover:bg-gray-100 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200"
          >
            Create Your Story Now →
          </Link>
        </div>
      </section>
    </div>
  );
}
