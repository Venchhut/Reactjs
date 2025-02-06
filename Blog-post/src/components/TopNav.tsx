import { Group, TextInput, Avatar, ActionIcon } from "@mantine/core";
import { IconSearch, IconBell } from "@tabler/icons-react";

export default function TopNav() {
  return (
    <Group justify="space-between" p="md">
      <TextInput icon={<IconSearch size={16} />} placeholder="Search..." />
      <Group>
        <ActionIcon variant="light">
          <IconBell size={20} />
        </ActionIcon>
        <Avatar radius="xl" />
      </Group>
    </Group>
  );
}
