# PDF Quiz Generator - Take-Home Assignment

## Challenge Overview
Create a simple web application that allows users to upload PDF documents and generate a quiz based on the content using OpenAI.

## Tech Stack
This starter project uses Next.js with Tailwind CSS and Shadcn UI components.

## Core Requirements

### Minimum Viable Product
- Upload interface for PDF documents (limit to small files, <10 pages)
- Generate 5 multiple-choice questions using OpenAI based on PDF content
- Allow users to answer questions and see their score

### Stretch Goals (if time permits)
- Support for larger documents
- Short-answer question types
- Improved error handling
- Enhanced visual design

## Implementation Guidelines
- Focus on creating a working prototype rather than a polished product
- Use the OpenAI API efficiently (consider extracting key sections rather than sending the entire document)
- Basic error handling for common cases (invalid PDFs, API failures)
- Keep the UI simple and functional

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
- [react-pdftotext](https://www.npmjs.com/package/react-pdftotext)

## Evaluation Criteria
- Functional completeness of the core features
- Code organization and clarity
- Thoughtful API integration
- Basic user experience considerations

## Timeline
- Expected completion: 2-3 hours of focused development
- Deadline: Within 5 days of receiving this assignment

This assignment is designed to demonstrate your approach to problem-solving and integration rather than creating a production-ready application. We're interested in seeing your programming style and how you tackle the essential requirements within the time constraint.

Good luck! We're excited to see your implementation.


## ENVIRONMENT VARIABLES
Create a .env file and add OPENAI_API_KEY variable for the API key