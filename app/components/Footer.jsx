export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <div>© {new Date().getFullYear()} My Landing Page</div>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}
