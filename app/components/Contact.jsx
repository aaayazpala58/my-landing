export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="grid gap-3">
          <input className="p-3 border rounded" placeholder="Your Name" />
          <input className="p-3 border rounded" placeholder="Your Email" />
          <textarea className="p-3 border rounded" rows="4" placeholder="Message"></textarea>
          <button className="px-5 py-3 bg-blue-600 text-white rounded">Send</button>
        </form>
      </div>
    </section>
  );
}
