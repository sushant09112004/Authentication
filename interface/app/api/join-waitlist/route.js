// // pages/api/join-waitlist.js
// import nodemailer from 'nodemailer';
// import { check, validationResult } from 'express-validator';

// export default async function handler(req, res) {
//   console.log(`Received ${req.method} request`);

//   if (req.method === 'POST') {
//     console.log('Processing POST request');

//     // Validate the email
//     await check('email').isEmail().normalizeEmail().run(req);

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { email } = req.body;

//     try {
//       // Set up Nodemailer transport
//       const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASS,
//         },
//       });

//       // Send confirmation email
//       await transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: 'Thank you for joining the waitlist!',
//         text: 'Thank you for joining the waitlist for FinAdvise. We will keep you updated!',
//         html: '<p>Thank you for joining the waitlist for <b>FinAdvise</b>. We will keep you updated!</p>',
//       });

//       // Send success response
//       res.status(200).json({ message: 'Thank you for joining the waitlist!' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'Failed to send email. Please try again later.' });
//     }
//   } else {
//     console.log('Method not allowed');
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import { NextResponse } from "next/server"; // Import Next.js server response handling
import nodemailer from "nodemailer"; // Library to send emails
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

export const POST = async (req) => {
  const { email } = await req.json(); // Extract details from the request body

  // Configure Nodemailer with email SMTP transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Gmail as the email service
    auth: {
      user: process.env.EMAIL_USER, // Gmail user from environment variables
      pass: process.env.EMAIL_PASS, // Gmail password from environment variables
    },
    tls: {
      rejectUnauthorized: false, // Accept self-signed certificates
    },
  });

  try {
    // Send the email to the user's email
    await transporter.sendMail({
      from: `"FinAdvise" <${process.env.EMAIL_USER}>`, // Email sender
      to: email, // Recipient email
      subject: "Welcome to the FinAdvise Waiting List!", // Email subject
      text: "Thank you for signing up to the FinAdvise Waiting List. Your feedback will be invaluable for us to improve our platform and fine-tune it to our user's needs. Click the following link to join our WhatsApp Community: https://chat.whatsapp.com/Dv6wDLA8n97AI4WcpeKbUO", // Email content
    });

    return new NextResponse({ status: 200 }); // Return the hash as the response with HTTP status 200
  } catch (error) {
    //console.error("Error sending email:", error); // Log the error for debugging
    return new NextResponse(
      JSON.stringify({ error: "Failed to send email" }), // Return error message
      { status: 400 } // HTTP status 400 Bad Request
    );
  }
};
