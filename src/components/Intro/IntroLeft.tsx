import { Box, Button, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./Intro.module.css";

export const IntroLeft: React.FC = () => {
  return (
    <Stack c="gray.1" gap={0}>
      <Title fz={64} fw={700}>
        Happiness comes from dedicated attention
      </Title>
      <Text mt={35} fz="xl">
        Everything that happens is the best arrangement. The same is true when
        the flowers bloom
      </Text>
      <Group mt={68} gap={50}>
        <Button
          variant="filled"
          size="lg"
          bg="gray.1"
          c="lime.0"
          radius={0}
          classNames={{ root: classes.shadow }}
        >
          Shop now
        </Button>
        <Group>
          <Box component={Link} href="#" c="#fff" td="none">
            Explore plants
          </Box>
          <IconArrowRight />
        </Group>
      </Group>
    </Stack>
  );
};
