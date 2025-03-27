import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { getTopics } from "~/data/topics"; // Import topics data

export const meta: MetaFunction = () => {
  return [
    { title: "JavaLearn - Interactive Java Learning" },
    { name: "description", content: "Start your journey learning Java interactively!" },
  ];
};

export default function Index() {
  const topics = getTopics();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Welcome to JavaLearn!</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        Your interactive platform to master the Java programming language, from basics to advanced concepts.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Topics Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Explore Topics</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">Dive into structured lessons covering core Java concepts.</p>
          <Link
            to="/topics"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Start Learning
          </Link>
          <ul className="mt-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
            {topics.slice(0, 3).map(topic => (
              <li key={topic.id}>- {topic.title}</li>
            ))}
            {topics.length > 3 && <li>- ...and more!</li>}
          </ul>
        </div>

        {/* Practice Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400">Practice Zone</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">Apply what you've learned in our interactive code editor.</p>
          <Link
            to="/practice"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Go to Practice
          </Link>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
            (Code execution coming soon!)
          </p>
        </div>

        {/* Activities Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Activities</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">Test your knowledge with quizzes and challenges.</p>
          <Link
            to="/activities"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            View Activities
          </Link>
           <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
            (Activities coming soon!)
          </p>
        </div>
      </div>
    </div>
  );
}
