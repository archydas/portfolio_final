import emailjs from 'emailjs-com';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing');
      return false;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Portfolio Owner', // You can customize this
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    return response.status === 200;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}