import { Link, Outlet } from "@remix-run/react";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-blue-600 dark:bg-blue-800 text-white shadow-md">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200">
            JavaLearn
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-200">Dashboard</Link>
            <Link to="/topics" className="hover:text-blue-200">Java Topics</Link>
            <Link to="/dsa" className="hover:text-blue-200">DSA Topics</Link> {/* Added DSA Link */}
            <Link to="/practice" className="hover:text-blue-200">Practice</Link>
            <Link to="/activities" className="hover:text-blue-200">Activities</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} JavaLearn by W4U Labs
      </footer>
    </div>
  );
}
