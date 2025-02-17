export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { prompt } = req.body;

  try {
    // Instead of spawning a process, we'll redirect to the Streamlit URL
    return res.status(200).json({ 
      url: 'http://localhost:8501',
      message: 'Redirecting to Archon interface'
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error processing request', error: error.message });
  }
}
