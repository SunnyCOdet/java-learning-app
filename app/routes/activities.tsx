import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Activities | JavaLearn" },
    { name: "description", content: "Test your Java knowledge with activities." },
  ];
};

export default function Activities() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Activities</h1>
      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 text-yellow-700 dark:text-yellow-300 p-4 rounded-md shadow" role="alert">
        <p className="font-bold">Coming Soon!</p>
        <p>Interactive quizzes and coding challenges will be available here shortly.</p>
      </div>
      {/* Placeholder for future activity list */}
    </div>
  );
}
