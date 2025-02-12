import { Stack, Button } from "@mantine/core";

export default function Sidebar() {
  return (
    <Stack gap={0}>
      {Array(15)
        .fill(0)
        .map((_, index) => (
          <Button variant="default" key={index}>
            {index}
          </Button>
        ))}
    </Stack>
  );
}
