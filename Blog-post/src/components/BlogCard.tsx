import { Card, Image, Text, Group } from "@mantine/core";
import { Post } from "../data/Post";

export default function BlogCard({ data }: { data: Post }) {
  return (
    <Card withBorder shadow="sm" padding="lg">
      <Card.Section>
        <Image src={data.image} height={160} />
      </Card.Section>
      <Text fw={500} size="lg" mt="md">
        {data.title}
      </Text>
      <Group mt="xs">
        <Text size="sm" c="dimmed">
          By {data.author}
        </Text>
      </Group>
    </Card>
  );
}
