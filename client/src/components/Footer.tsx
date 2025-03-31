export default function Footer() {
  return (
    <footer className="bg-gray-light py-8 border-t border-gray-medium">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600 mb-2">
          All photographs © {new Date().getFullYear()} LensCraft Photography
        </p>
        <p className="text-sm text-gray-600">
          Images are protected by copyright and may not be used without permission.
        </p>
      </div>
    </footer>
  );
}
