# Fantasy Portfolio Website

A beautiful, fully functional portfolio website with AI chat assistant and contact form.

## Features

- 🎨 **Stunning Design**: Fantasy landscape background with glassmorphism effects
- 🤖 **AI Chat Assistant**: Real AI-powered chat using OpenAI API
- 📧 **Working Contact Form**: Email functionality using EmailJS
- 📱 **Responsive Design**: Works on all devices
- ⚡ **Modern Tech Stack**: React, TypeScript, Tailwind CSS

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# OpenAI Configuration (Optional)
VITE_OPENAI_API_KEY=your_openai_api_key_here

# Resend Configuration (Required)
VITE_RESEND_API_KEY=re_your_resend_api_key_here
```

### 2. OpenAI Setup

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create an account or sign in
3. Navigate to API Keys section
4. Create a new API key
5. Add it to your `.env` file as `VITE_OPENAI_API_KEY`

### 3. Resend Setup

1. Go to [Resend](https://resend.com/)
2. Create a free account
3. Verify your domain (or use their test domain for development)
4. Get your API key from the dashboard
5. Add it to your `.env` file as `VITE_RESEND_API_KEY`
6. Update the email addresses in `src/services/resend.ts`

### 4. Customization

Update the following files with your information:

- **Personal Info**: Edit the content in each component
- **Projects**: Update project details in `ProjectsSection.tsx`
- **Experience**: Modify career timeline in `JourneySection.tsx`
- **AI Knowledge**: Update the system prompt in `src/services/openai.ts`

## Development

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run build
```

## Security Note

For production, consider moving the OpenAI API calls to a backend server to keep your API key secure.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- OpenAI API
- EmailJS
- Lucide React Icons
- Vite

## License

MIT License - feel free to use this for your own portfolio!