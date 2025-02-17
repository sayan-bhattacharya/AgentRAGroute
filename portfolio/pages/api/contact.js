import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thedigitalmindmeldpodcast@gmail.com',
      pass: process.env.EMAIL_PASSWORD // Add this to your .env.local
    }
  });

  try {
    await transporter.sendMail({
      from: 'thedigitalmindmeldpodcast@gmail.com',
      to: 'thedigitalmindmeldpodcast@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}