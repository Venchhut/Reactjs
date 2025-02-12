import { SimpleGrid } from "@mantine/core";
import BlogCard from "./BlogCard";
import posts from "../data/Post";

export default function BlogPostList() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {posts.map((post, index) => (
        <BlogCard key={index} data={post} />
      ))}
    </SimpleGrid>
  );
}
