# Personal Portfolio

This is a personal portfolio project built with Astro, React and Tailwind CSS, with a Markdown blog. It showcases my skills, experience, education, and projects in a responsive layout.

## Project Structure

The project is organized as follows:

```
personal-portfolio
├── public                # favicon, images, CV (served as-is)
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Experiences.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   └── Footer.jsx
│   ├── content/blog      # blog posts (*.md, frontmatter: title, date, description, draft, lang)
│   ├── layouts           # Base.astro (<head>), Blog.astro
│   ├── pages             # index.astro (React App island), blog/
│   ├── styles
│   │   └── index.css
│   ├── content.config.mjs
│   └── App.jsx
├── dist                  # production output (npm run build)
├── astro.config.mjs
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd personal-portfolio
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

   This will start the development server and open the application in your default web browser.

## Technologies Used

- React
- Tailwind CSS
- PostCSS

## Features

- Responsive design that adapts to different screen sizes.
- Sections for About, Experience, Education, Projects, and Community involvement.
- Custom styling using Tailwind CSS.