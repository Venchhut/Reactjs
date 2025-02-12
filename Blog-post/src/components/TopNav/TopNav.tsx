import {
  Group,
  TextInput,
  ActionIcon,
  Flex,
  Text,
  SegmentedControl,
} from "@mantine/core";
import {
  IconCode,
  IconNotification,
  IconSearch,
  IconUser,
} from "@tabler/icons-react";
import { useState } from "react";
import ThemContext from "../../contexts/ThemeContext";

export default function TopNav() {
  const [value, setValue] = useState<string>("Stack");
  return (
    <Flex justify="space-between" align="center" m="sm">
      <Group gap={0} style={{ cursor: "pointer" }}>
        <IconCode size={24} />
        <Text>My Blog</Text>
      </Group>
      <Group>
        <TextInput
          size="md"
          radius="lg"
          w="500"
          placeholder="Search"
          leftSection={
            <ActionIcon variant="subtle" disabled>
              <IconSearch size={20} stroke={1.5} />
            </ActionIcon>
          }
        />
      </Group>
      <Group gap="sm">
        <ThemContext />
        <SegmentedControl
          value={value}
          onChange={setValue}
          data={[
            { label: "Stack", value: "Stack" },
            { label: "Point", value: "Point" },
          ]}
        />
        <ActionIcon variant="default" radius="xl">
          <IconNotification size={20} />
        </ActionIcon>
        <ActionIcon variant="default" radius="xl">
          <IconUser size={20} />
        </ActionIcon>
      </Group>
    </Flex>
  );
}
