interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<EmailResponse> {
  try {
    const apiKey = import.meta.env.VITE_RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('Resend API key is missing');
      return { success: false, error: 'Email service not configured' };
    }

    // Send notification email to you
    const notificationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <noreply@resend.dev>', // Replace with your domain
        to: ['archydas24@gmail.com'], // Replace with your email
        subject: `New Portfolio Contact: ${formData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #4F46E5; margin-top: 0;">Contact Details</h3>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
            </div>
            
            <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">Message</h3>
              <p style="line-height: 1.6; color: #555;">${formData.message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
              <p style="margin: 0; color: #1976d2; font-size: 14px;">
                📧 Reply directly to this email to respond to ${formData.name}
              </p>
            </div>
          </div>
        `,
        reply_to: formData.email,
      }),
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.json();
      console.error('Failed to send notification email:', errorData);
      return { success: false, error: 'Failed to send notification' };
    }

    // Send confirmation email to the user
    const confirmationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio <noreply@resend.dev>', // Replace with your domain
        to: [formData.email],
        subject: 'Thanks for reaching out! Message received',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Thank You!</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
                Your message has been received
              </p>
            </div>
            
            <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                Hi <strong>${formData.name}</strong>,
              </p>
              
              <p style="font-size: 16px; color: #555; line-height: 1.6;">
                Thank you for reaching out through my portfolio website! I've received your message and will get back to you as soon as possible.
              </p>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4F46E5;">
                <h3 style="color: #4F46E5; margin-top: 0; font-size: 18px;">Your Message:</h3>
                <p style="color: #666; line-height: 1.6; margin: 0;">"${formData.message}"</p>
              </div>
              
              <p style="font-size: 16px; color: #555; line-height: 1.6;">
                I typically respond within 24-48 hours. In the meantime, feel free to check out my projects and connect with me on social media.
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://github.com/yourusername" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background: #333; color: white; text-decoration: none; border-radius: 5px;">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background: #0077b5; color: white; text-decoration: none; border-radius: 5px;">LinkedIn</a>
              </div>
              
              <p style="font-size: 14px; color: #888; text-align: center; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
                Best regards,<br>
                <strong>Your Name</strong><br>
                Software Engineer
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!confirmationResponse.ok) {
      const errorData = await confirmationResponse.json();
      console.error('Failed to send confirmation email:', errorData);
      // Still return success since the main notification was sent
      return { success: true };
    }

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}