import { Blog } from '@/types';

export const staticBlogs: Blog[] = [
  {
    id: 'static-1',
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt:
      'Learn the fundamentals of Next.js and how to build fast, scalable React applications with server-side rendering.',
    content: `Next.js is a powerful React framework that enables server-side rendering, static site generation, and API routes out of the box. Whether you're building a personal blog or a large-scale enterprise application, Next.js provides the tools you need to succeed.

In this post, we'll explore the core concepts of Next.js, including:

- **App Router**: The new file-system based router built on React Server Components.
- **Server Components**: Render components on the server for better performance.
- **Data Fetching**: Fetch data efficiently with built-in caching and revalidation.
- **API Routes**: Build backend endpoints directly inside your Next.js app.

By the end of this guide, you'll have a solid understanding of how to structure a Next.js project and leverage its features to build modern web applications.`,
    author: 'Sarah Chen',
    created_at: '2025-01-15T10:00:00Z',
  },
  {
    id: 'static-2',
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS',
    excerpt:
      'A comprehensive guide to utility-first CSS and how to build beautiful, responsive designs without writing custom CSS.',
    content: `Tailwind CSS has revolutionized the way developers style web applications. Instead of writing custom CSS classes, Tailwind provides a vast set of utility classes that you can compose directly in your HTML or JSX.

Key benefits of Tailwind CSS include:

- **Rapid Development**: No need to switch between HTML and CSS files.
- **Consistency**: Predefined design tokens ensure a cohesive look and feel.
- **Responsive Design**: Built-in breakpoints make mobile-first design effortless.
- **Customization**: Easily extend the default theme to match your brand.

In this article, we'll dive deep into advanced Tailwind techniques, including custom plugins, dark mode, and component extraction with @apply.`,
    author: 'Marcus Johnson',
    created_at: '2025-02-03T14:30:00Z',
  },
  {
    id: 'static-3',
    slug: 'supabase-for-beginners',
    title: 'Supabase for Beginners',
    excerpt:
      'Discover how Supabase provides an open-source Firebase alternative with PostgreSQL, authentication, and real-time subscriptions.',
    content: `Supabase is an open-source backend-as-a-service platform that provides all the tools you need to build scalable applications. Built on top of PostgreSQL, it offers a powerful database, authentication, storage, and real-time capabilities.

What makes Supabase stand out:

- **PostgreSQL Database**: Full SQL support with powerful querying capabilities.
- **Authentication**: Built-in user management with OAuth, email, and magic link support.
- **Real-time**: Subscribe to database changes and update your UI instantly.
- **Row Level Security**: Fine-grained access control directly in your database.

This guide walks you through setting up your first Supabase project, creating tables, and integrating it with a Next.js frontend.`,
    author: 'Aisha Patel',
    created_at: '2025-02-20T09:15:00Z',
  },
  {
    id: 'static-4',
    slug: 'react-server-components-explained',
    title: 'React Server Components Explained',
    excerpt:
      'Understand the architecture behind React Server Components and how they improve performance in modern React apps.',
    content: `React Server Components (RSC) represent a paradigm shift in how we build React applications. By allowing components to render exclusively on the server, RSC reduces the amount of JavaScript sent to the client, resulting in faster page loads and better user experiences.

Core concepts covered:

- **Server vs. Client Components**: Learn when to use each type.
- **Zero Bundle Size**: Server components don't add to your JavaScript bundle.
- **Direct Backend Access**: Query databases and file systems directly from components.
- **Streaming**: Deliver UI progressively as data becomes available.

We'll also compare RSC with traditional SSR and discuss best practices for mixing server and client components in your applications.`,
    author: 'David Kim',
    created_at: '2025-03-08T11:45:00Z',
  },
  {
    id: 'static-5',
    slug: 'building-accessible-web-apps',
    title: 'Building Accessible Web Applications',
    excerpt:
      'Practical tips and techniques for creating inclusive web experiences that work for everyone, regardless of ability.',
    content: `Web accessibility is not just a legal requirement—it's a moral imperative. Building accessible applications ensures that people with disabilities can perceive, understand, navigate, and interact with your content.

Essential accessibility practices:

- **Semantic HTML**: Use the right elements for the right purpose.
- **ARIA Labels**: Enhance custom components with accessible names and roles.
- **Keyboard Navigation**: Ensure all interactive elements are reachable via keyboard.
- **Color Contrast**: Meet WCAG guidelines for text and background colors.
- **Screen Reader Testing**: Verify your app works with assistive technologies.

This post includes a practical checklist you can use on every project to ensure your applications are usable by the widest possible audience.`,
    author: 'Emily Rodriguez',
    created_at: '2025-03-25T16:00:00Z',
  },
];

