export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Fast Setup</h3>
          <p className="text-gray-600">Start quickly with Next.js.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Responsive</h3>
          <p className="text-gray-600">Mobile-first UI design.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Reusable</h3>
          <p className="text-gray-600">Clean & modular components.</p>
        </div>
      </div>
    </section>
  );
}
