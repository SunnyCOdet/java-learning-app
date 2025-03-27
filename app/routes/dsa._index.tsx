import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getTopics } from "~/data/topics";
import type { Topic } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "DSA Topics | JavaLearn" },
    { name: "description", content: "Browse Data Structures and Algorithms (DSA) topics relevant to Java." },
  ];
};

// Load only DSA topics
export function loader() {
  return getTopics('dsa');
}

export default function DsaTopicsIndex() {
  const topics = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Data Structures & Algorithms (DSA)</h1>
       <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
        Explore fundamental data structures and algorithms, often implemented or used in Java.
      </p>
      <div className="space-y-4">
        {topics.map((topic: Topic) => (
          <Link
            key={topic.id}
            to={`/dsa/${topic.id}`} // Link to the new DSA dynamic route
            className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold text-green-600 dark:text-green-400">{topic.title}</h2>
            {/* You could add a short description here if available */}
          </Link>
        ))}
      </div>
    </div>
  );
}
