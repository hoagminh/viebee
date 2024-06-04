"use client";
import {
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  Image,
  ScrollArea,
  rem,
} from "@mantine/core";
import classes from "./Header.module.css";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandTelegram,
  IconBrandTwitterFilled,
  IconSearch,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import { useState } from "react";

const links = [
  {
    href: "#",
    title: "Home",
  },
  {
    href: "#",
    title: "Product",
  },
  {
    href: "#",
    title: "Review",
  },
  {
    href: "#",
    title: "Blog",
  },
];

export const Header: React.FC = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const [active, setActive] = useState(links[0].href);

  const link = links.map((item) => {
    return (
      <Box
        component={Link}
        key={item.title}
        href={item.href}
        p={8}
        className={classes.link}
        data-active={active === item.href || undefined}
        onClick={(event) => {
          event.preventDefault();
          setActive(item.href);
        }}
      >
        {item.title}
      </Box>
    );
  });

  return (
    <Box
      component="section"
      id="header"
      className={classes.bg}
      pos="fixed"
      top={0}
      left={0}
      right={0}
    >
      <Container size="xl" mx="auto">
        <Box component="header" h={{ base: "auto", lg: 150 }}>
          <Group justify="space-between" h="100%" c="#fff">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={140}
              height={100}
            />

            <Box className={classes.bgNavbar} py={22} px={150} visibleFrom="md">
              <Group gap={40} className={classes.navbar} px={24}>
                {link}
              </Group>
            </Box>

            <Group visibleFrom="md">
              <IconSearch />
              <IconUser />
              <Image src="/assets/icons/shopping_card.svg" w={24} h={24} />
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="md"
              size="md"
              color="#fff"
            />
          </Group>
        </Box>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          hiddenFrom="md"
          title={
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={100}
              height={80}
            />
          }
          classNames={{ header: classes.header }}
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            {link}

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">
                <IconBrandTelegram />
              </Button>
              <Button>
                <IconBrandTwitterFilled />
              </Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Container>
    </Box>
  );
};
