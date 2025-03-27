import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Practice Zone | JavaLearn" },
    { name: "description", content: "Practice your Java coding skills." },
  ];
};

export default function Practice() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Practice Zone</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Write and test your Java code here. (Note: Code execution is not yet available in this environment.)
      </p>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <textarea
          className="w-full h-96 p-3 font-mono text-sm bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
          placeholder={`public class MyCode {
  public static void main(String[] args) {
    // Your Java code here...
    System.out.println("Practicing Java!");
  }
}`}
        />
        <button
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded transition-colors disabled:opacity-50"
          disabled // Disabled until execution is possible
        >
          Run Code (Coming Soon)
        </button>
      </div>
    </div>
  );
}
