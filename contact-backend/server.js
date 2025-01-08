
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 5000;
app.get('/', (req, res) => {
    res.send('Backend server is running.');
  });
  
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'simeonkenny@outlook.com', // Replace with your email
      pass: 'Jeh0vahG0d', // Replace with your app password
    },
  });

  const mailOptions = {
    from: email,
    to: 'simeonkenny@outlook.com', // Your email to receive messages
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
