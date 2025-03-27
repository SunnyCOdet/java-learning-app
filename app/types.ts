export interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

export interface Topic {
  id: string;
  title: string;
  content: string; // HTML content
  examples: CodeExample[];
  category: 'java' | 'dsa'; // Added category
}
