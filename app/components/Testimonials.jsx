export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">What people say</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-3">"Very easy to use and looks great."</p>
            <p className="text-sm text-gray-500">— User A</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-3">"Responsive and clean UI."</p>
            <p className="text-sm text-gray-500">— User B</p>
          </div>
        </div>
      </div>
    </section>
  );
}
