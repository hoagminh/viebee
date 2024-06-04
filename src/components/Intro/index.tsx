"use client";
import { Box, Container, Grid } from "@mantine/core";
import classes from "./Intro.module.css";
import { IntroLeft } from "./IntroLeft";
import { IntroRight } from "./IntroRight";

export const Intro: React.FC = () => {
  return (
    <Box
      component="section"
      id="intro"
      h="100dvh"
      pt={220}
      className={classes.bg}
    >
      <Container size="xl" mx="auto">
        <Grid>
          <Grid.Col span={6}>
            <IntroLeft />
          </Grid.Col>
          <Grid.Col span={6}>
            <IntroRight />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
