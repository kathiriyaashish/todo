import AddTask from './components/AddTask';
import ViewTask from './components/ViewTask';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-amber-50 font-sans px-4 sm:px-6 lg:px-10">
      
      <div className="text-center mt-10 sm:mt-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900">
          Welcome to My Next.js App
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto">
          This is a simple Next.js todo task application with Tailwind CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-6xl mt-8 sm:mt-10">
        <AddTask />
        <ViewTask />
      </div>

    </div>
  );
}
