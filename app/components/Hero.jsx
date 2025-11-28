export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Awesome Product
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Simple landing page built with Next.js and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
            Get Started
          </a>
          <a href="#features" className="px-6 py-3 border border-gray-300 rounded-lg">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
