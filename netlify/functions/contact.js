const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'All fields are required' }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || 'falconcreativesplc@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E83E6A;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from the Falcon Creatives website contact form.
          </p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Falcon Creatives',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E83E6A;">Thank You for Your Message!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Falcon Creatives. We have received your message and will get back to you within 24 hours.</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p>Best regards,<br>The Falcon Creatives Team</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Falcon Creatives - Premium Digital Marketing & Creative Services<br>
            Email: falconcreativesplc@gmail.com<br>
            Phone: +251 98 553 5022
          </p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully' 
      }),
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        error: 'Failed to send message. Please try again later.' 
      }),
    };
  }
};
