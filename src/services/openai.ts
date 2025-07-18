import OpenAI from 'openai';

const openai = import.meta.env.VITE_OPENAI_API_KEY ? new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, use a backend proxy
}) : null;

const SYSTEM_PROMPT = `You are an AI assistant for a software engineer's portfolio website. You should help visitors learn about the engineer's background, projects, and experience. 

Key information about the engineer:
- Software Engineer specializing in web technologies and user experience
- Works at Tech Innovations Inc. as Senior Software Engineer (2024-present)
- Previously at Digital Solutions Co. as Software Engineer (2022-2024)
- Technologies: React, TypeScript, Node.js, Python, AWS, Docker, PostgreSQL, MongoDB, GraphQL, Next.js, TailwindCSS, Git

Featured Projects:
1. AI-Powered Code Assistant - Machine learning-based code completion tool (Python, TensorFlow, React)
2. E-Commerce Platform - Full-stack e-commerce solution with real-time inventory (Next.js, Node.js, MongoDB)
3. Smart Home Dashboard - IoT dashboard for connected home devices (React, Firebase, Arduino)

Keep responses helpful, professional, and focused on the engineer's work and capabilities. Be concise but informative.`;

export async function getChatResponse(message: string): Promise<string> {
  try {
    if (!openai || !import.meta.env.VITE_OPENAI_API_KEY) {
      return "I'm currently offline. Please check back later or use the contact form to reach out directly!";
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || "I'm having trouble responding right now. Please try again!";
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return "I'm currently experiencing technical difficulties. Please use the contact form to reach out directly!";
  }
}