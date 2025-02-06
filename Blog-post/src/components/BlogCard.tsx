import { Card, Image, Text, Group } from "@mantine/core";

export default function BlogCard({
  title,
  author,
  image,
}: {
  title: string;
  author: string;
  image: string;
}) {
  return (
    <Card shadow="sm" padding="lg">
      <Card.Section>
        <Image src={image} height={160} />
      </Card.Section>
      <Text fw={500} size="lg" mt="md">
        {title}
      </Text>
      <Group mt="xs">
        <Text size="sm" c="dimmed">
          By {author}
        </Text>
      </Group>
    </Card>
  );
}
