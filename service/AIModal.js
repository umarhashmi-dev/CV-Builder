// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;
  
  // Mock AI session for demo purposes
  export const AIChatSession = {
    sendMessage: async (prompt) => {
      // Simulate AI response delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (prompt.includes('summery') || prompt.includes('summary')) {
        return {
          response: {
            text: () => JSON.stringify([
              {
                summary: "Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering scalable solutions and leading cross-functional teams.",
                experience_level: "Senior Level"
              },
              {
                summary: "Mid-level software engineer with 3+ years of experience in web development. Skilled in modern JavaScript frameworks and backend technologies with a focus on clean, maintainable code.",
                experience_level: "Mid Level"
              },
              {
                summary: "Recent computer science graduate with strong foundation in programming fundamentals and modern web technologies. Eager to contribute to innovative projects and grow technical skills.",
                experience_level: "Fresher Level"
              }
            ])
          }
        };
      } else {
        // For work experience bullet points
        return {
          response: {
            text: () => `<ul>
              <li>Developed and maintained scalable web applications using modern frameworks</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
              <li>Implemented best practices for code quality, testing, and deployment</li>
              <li>Optimized application performance and user experience</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>`
          }
        };
      }
    }
  };
  
  
  