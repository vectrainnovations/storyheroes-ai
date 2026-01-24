import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your Child as the
            <span className="text-purple-600"> Hero</span> of Their Own Story
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create magical, personalized storybooks where your child becomes the main character. 
            Powered by AI, crafted with love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create">
              <Button size="lg" className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700">
                Create Your Story
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Examples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold">Personalize</h3>
              <p className="text-gray-600">
                Enter your child's name, age, and interests to create a unique character.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-xl font-semibold">AI Magic</h3>
              <p className="text-gray-600">
                Our AI generates a captivating story tailored just for them.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold">Beautiful Book</h3>
              <p className="text-gray-600">
                Download your professionally designed storybook ready to print or share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Create Magic?
          </h2>
          <p className="text-xl text-purple-100">
            Start creating personalized stories that your child will treasure forever.
          </p>
          <Link href="/create">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-purple-600 hover:bg-gray-100">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
