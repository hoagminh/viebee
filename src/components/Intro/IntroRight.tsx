import {
  BackgroundImage,
  Badge,
  Box,
  Button,
  Grid,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import classes from "./Intro.module.css";

export const IntroRight: React.FC = () => {
  return (
    <Grid grow>
      <Grid.Col span={4}>
        <Stack h="100%">
          <Box pos="relative">
            <Image src="/assets/images/intro-3.png" mih={256} />
            <Badge
              color="lime.0"
              pos="absolute"
              top={8}
              left={8}
              p={12}
              classNames={{ root: classes.badge }}
            >
              New
            </Badge>
          </Box>

          <Box pos="relative" style={{ zIndex: 1 }}>
            <Image
              src="/assets/images/intro-2.png"
              mih={256}
              style={{ zIndex: 100 }}
            />
            <Badge
              color="lime.0"
              pos="absolute"
              top={8}
              left={8}
              p={12}
              classNames={{ root: classes.badge }}
            >
              Popular
            </Badge>
            <Image
              src="/assets/pattern.svg"
              pos="absolute"
              bottom={-30}
              left={-30}
              h={115}
              w={115}
              style={{ zIndex: -1 }}
            />
          </Box>
        </Stack>
      </Grid.Col>
      <Grid.Col span={8} h="100%">
        <BackgroundImage src="/assets/images/intro-1.png">
          <Stack h={527} justify="end" pos="relative">
            <Badge
              pos="absolute"
              top={12}
              right={12}
              p={12}
              bg="lime.0"
              classNames={{ root: classes.badge }}
            >
              Featured
            </Badge>
            <Stack c={"gray.1"} px={24} pb={12}>
              <Title fw={400} fz="h2">
                Rose Flower
              </Title>
              <Text fz="sm">
                The flower of human being. It has meaningful of fact that the
                plant always grow whatever season and weather...
              </Text>
              <Button
                bg="gray.0"
                size="lg"
                c="lime.0"
                fz="xs"
                classNames={{ label: classes.label }}
              >
                READ MORE
              </Button>
            </Stack>
          </Stack>
        </BackgroundImage>
      </Grid.Col>
    </Grid>
  );
};
