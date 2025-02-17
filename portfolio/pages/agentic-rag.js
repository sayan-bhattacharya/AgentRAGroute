import Layout from '../components/Layout';
import { useEffect } from 'react';

export default function AgenticRAG() {
  useEffect(() => {
    // Redirect to Streamlit interface
    window.location.href = 'http://localhost:8501';
  }, []);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Redirecting to Agentic RAG Interface...</h1>
          <p>If you are not redirected, <a href="https://your-streamlit-deployment-url.com" className="text-blue-600 hover:underline">click here</a></p>
        </div>
      </div>
    </Layout>
  );
}
