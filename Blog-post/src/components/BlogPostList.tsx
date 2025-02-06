import { SimpleGrid } from "@mantine/core";
import BlogCard from "./BlogCard";
export type Post = {
  title: string;
  author: string;
  image: string;
};
const posts: Post[] = [
  {
    title: "Mastering React",
    author: "John Doe",
    image: "https://source.unsplash.com/random/1",
  },
  {
    title: "TypeScript Tips",
    author: "Jane Doe",
    image: "https://source.unsplash.com/random/2",
  },
];

export default function BlogPostList() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {posts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </SimpleGrid>
  );
}
