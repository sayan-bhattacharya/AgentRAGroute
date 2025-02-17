import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AgentInterface() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-4 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Describe the AI agent you want to build..."
          rows={4}
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Building Agent...' : 'Build Agent'}
        </motion.button>
      </form>

      {response && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 p-6 bg-purple-50 rounded-lg"
        >
          <pre className="whitespace-pre-wrap">{response}</pre>
        </motion.div>
      )}
    </div>
  );
}