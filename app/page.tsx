import AddTask from './components/AddTask';
import ViewTask from './components/ViewTask';
export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-start bg-amber-50 font-sans">
      <div className="d-flex justify-center items-center mt-[5%]">
        <h1 className="text-4xl font-bold text-amber-900">
          Welcome to My Next.js App
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          This is a simple Next.js todo task application with Tailwind
          CSS.
        </p>
      </div>
      <div className=' grid grid-cols-2 gap-2 w-full p-6'>
        <AddTask />
        <ViewTask />
      </div>
    </div>
  );
}
