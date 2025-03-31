export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-montserrat font-bold">
          <span className="text-primary">Lens</span>Craft
        </h1>
        <p className="hidden md:block font-opensans text-sm text-gray-600">Fine Art Photography</p>
      </div>
    </header>
  );
}
