import 'dotenv/config';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendEmail(to, subject, text) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text
    });
    console.log('Email sent:', info.response);
  } catch (err) {
    console.error('Error sending email:', err.message);
  }
}

sendEmail('kishan104.solanki@gmail.com', 'Test Email', 'Hello! This is a test.');