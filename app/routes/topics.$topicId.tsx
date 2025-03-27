import { useState } from 'react';
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getTopic } from "~/data/topics";
import type { CodeExample } from "~/types";

// Loader fetches the specific Java topic
export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.topicId, "Missing topicId param");
  const topic = getTopic(params.topicId, 'java'); // Ensure we only load Java topics here
  if (!topic) {
    throw new Response("Java Topic Not Found", { status: 404 });
  }
  return topic;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data?.title || 'Java Topic'} | JavaLearn` },
    { name: "description", content: `Learn about ${data?.title || 'this Java topic'}.` },
  ];
};

// Component to display a single code example with copy button
function CodeExampleDisplay({ example, index }: { example: CodeExample; index: number }) {
  const [copyState, setCopyState] = useState<'idle' | 'copying' | 'copied'>('idle');

  const handleCopy = async () => {
    if (copyState !== 'idle') return; // Prevent multiple rapid clicks

    setCopyState('copying');
    try {
      await navigator.clipboard.writeText(example.code.trim());
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 1500); // Reset after 1.5 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopyState('idle'); // Reset on error
    }
  };

  const getButtonText = () => {
    switch (copyState) {
      case 'copying': return 'Copying...';
      case 'copied': return 'Copied!';
      default: return 'Copy';
    }
  };

  return (
    <div key={index} className="mb-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow relative group">
      <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">{example.title}</h4>
      <pre className="bg-gray-200 dark:bg-gray-700 p-3 rounded text-sm overflow-x-auto relative">
        <code>{example.code.trim()}</code>
         <button
            onClick={handleCopy}
            disabled={copyState !== 'idle'}
            className={`absolute top-2 right-2 px-2 py-1 text-xs rounded transition-all duration-150 ease-in-out
                        ${copyState === 'copied' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}
                        opacity-0 group-hover:opacity-100 focus:opacity-100
                        disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label={`Copy code for ${example.title}`}
          >
            {getButtonText()}
          </button>
      </pre>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{example.explanation}</p>
    </div>
  );
}


// Main component to display the topic page
export default function TopicPage() {
  const topic = useLoaderData<typeof loader>();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">{topic.title}</h1>
      <div
        className="mb-8 text-gray-700 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: topic.content }}
      />

      {topic.examples && topic.examples.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mt-8 mb-4 border-t pt-4 text-gray-800 dark:text-gray-100">Examples</h3>
          {topic.examples.map((example, index) => (
            <CodeExampleDisplay key={index} example={example} index={index} />
          ))}
        </>
      )}
    </article>
  );
}

// Route-specific Error Boundary
export function ErrorBoundary() {
  const params = useParams();
  // Customize error message based on potential errors (e.g., 404)
  // For now, a generic message or specific 404 message
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline"> Could not load the Java topic "{params.topicId}". It might not exist.</span>
       <p><Link to="/topics" className="text-blue-600 hover:underline">Return to Java Topics</Link></p>
    </div>
  );
}
