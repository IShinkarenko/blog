
# Blog Project

A dynamic blog built with Next.js and TypeScript, Material UI, Jest, React Hook Form and Zod for validation

## Features

- **Next.js Framework**: Provides server-side rendering and static site generation for optimal performance.
- **TypeScript Support**: Ensures type safety across the project.
- **Modular Components**: Designed with reusable components to streamline development.
- **Unit Testing**: Set up with Jest for reliable code testing.
- **Styled Components**: Uses a custom theme and component styling system.

## Folder Structure

```
/project-root
├── /.next             # Next.js build output
├── /__tests__         # Contains unit tests
├── /public            # Static assets (images, fonts)
│   └── /images        # Contains images used in the site
├── /src               # Main application code
│   ├── /app           # App pages and layout
│   ├── /components    # Reusable UI components
│   ├── /lib           # Utility functions and helpers
│   └── /server-actions# Server-side functions
├── .gitignore         # Git ignored files
├── package.json       # Project metadata and dependencies
├── tsconfig.json      # TypeScript configuration
└── README.md          # Documentation file
```

### Key Directories:

- **`/src/app`**: Contains the page components, layout files, and CSS.
- **`/src/components`**: Houses reusable UI components like navigation, post-item, and post-grid.
- **`/src/lib`**: Utility functions for validation, metadata handling, and post utilities.
- **`/src/server-actions`**: Server-side logic to handle post creation, editing, and deletion.
- **`/public/images`**: Static images for the site, including avatars and flags.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/IShinkarenko/blog.git
   cd blog
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Scripts

- `pnpm run dev`: Starts the development server.
- `pnpm run build`: Builds the production version of the app.
- `pnpm run test`: Runs the tests using Jest.

## Deployment

Deploy the project easily with Vercel - https://blog-test-ivan-shynkarenko.vercel.app/
