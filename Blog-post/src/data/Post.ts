export type Post = {
  id: number;
  title: string;
  author: string;
  image: string;
  url: string;
  tags: string[];
};
const posts: Post[] = [
  {
    id: 1,
    title: "Mastering React Performance",
    author: "John Smith",
    image: "https://picsum.photos/seed/react/400/300",
    url: "https://react.dev/blog/performance",
    tags: ["React", "Performance", "JavaScript"],
  },
  {
    id: 2,
    title: "Understanding TypeScript Generics",
    author: "Emily Johnson",
    image: "https://picsum.photos/seed/typescript/400/300",
    url: "https://dev.to/ts-generics",
    tags: ["TypeScript", "Generics", "JavaScript"],
  },
  {
    id: 3,
    title: "Building Scalable Node.js Applications",
    author: "Michael Brown",
    image: "https://picsum.photos/seed/nodejs/400/300",
    url: "https://blog.nodejs.org/scalability",
    tags: ["Node.js", "Backend", "Scalability"],
  },
  {
    id: 4,
    title: "Exploring the Power of Tailwind CSS",
    author: "Sarah Wilson",
    image: "https://picsum.photos/seed/css/400/300",
    url: "https://tailwindcss.com/docs",
    tags: ["CSS", "Tailwind", "Frontend"],
  },
  {
    id: 5,
    title: "Introduction to Web Accessibility",
    author: "Daniel White",
    image: "https://picsum.photos/seed/accessibility/400/300",
    url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility",
    tags: ["Accessibility", "UX", "Web Development"],
  },
  {
    id: 6,
    title: "A Guide to RESTful API Design",
    author: "Olivia Martinez",
    image: "https://picsum.photos/seed/api/400/300",
    url: "https://restfulapi.net/guidelines",
    tags: ["API", "REST", "Backend"],
  },
  {
    id: 7,
    title: "Mastering Git and GitHub",
    author: "David Lee",
    image: "https://picsum.photos/seed/git/400/300",
    url: "https://github.com/git-tips",
    tags: ["Git", "Version Control", "Collaboration"],
  },
  {
    id: 8,
    title: "Exploring GraphQL for Modern APIs",
    author: "Sophia Davis",
    image: "https://picsum.photos/seed/graphql/400/300",
    url: "https://graphql.org/learn",
    tags: ["GraphQL", "API", "Backend"],
  },
];

export default posts;
