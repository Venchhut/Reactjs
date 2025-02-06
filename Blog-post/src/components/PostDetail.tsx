import { Container, Title, Text, Image } from "@mantine/core";

export function PostDetail({
  title,
  content,
  image,
}: {
  title: string;
  content: string;
  image: string;
}) {
  return (
    <Container size="md">
      <Image src={image} height={300} mb="md" />
      <Title order={1}>{title}</Title>
      <Text size="lg" mt="md">
        {content}
      </Text>
    </Container>
  );
}
