const Footer = () => (
  <footer className="border-t border-red-500/20 mt-20 py-8">
    <div className="container flex flex-wrap items-center justify-between gap-4 text-sm text-gray-400">
      <p>© {new Date().getFullYear()} Ahmed Chowdhury · Software Engineer</p>
      <a href="#home" className="text-orange-300 hover:text-orange-200">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
