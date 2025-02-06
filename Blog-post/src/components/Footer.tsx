import { Center, Text } from "@mantine/core";

export default function Footer() {
  return (
    <Center p="md">
      <Text size="sm">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </Text>
    </Center>
  );
}
