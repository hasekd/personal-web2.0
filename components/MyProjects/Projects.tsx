import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Flex flexDir={"column"} align={"center"}>
      <Box textAlign={"center"}>
        <Text fontSize={"3.5rem"} mb={"1rem"} fontWeight={700}>
          My Work
        </Text>
        <Text fontSize={"1.7rem"}>
          Here are a few projects I have worked on.
        </Text>
      </Box>

      <Grid gridTemplateColumns={"1fr 1fr"} gap={"2rem"} mt={"5rem"}>
        <ProjectCard
          image={require("../../img/tesla-logo.jpeg")}
          text="jsdfkjsdfkjshdfajsndkasdkaskdaksmdkasmdkamsdamskdmaksdmkasmdkm"
          link="https://en.wikipedia.org/wiki/Next.js"
        />
        <ProjectCard
          image={require("../../img/tesla-logo.jpeg")}
          text="jsdfkjsdfkjshdfajsndkasdkaskdaksmdkasmdkamsdamskdmaksdmkasmdkm"
          link="something.com"
        />
        <ProjectCard
          image={require("../../img/tesla-logo.jpeg")}
          text="jsdfkjsdfkjshdfajsndkasdkaskdaksmdkasmdkamsdamskdmaksdmkasmdkm"
          link="something.com"
        />
        <ProjectCard
          image={require("../../img/tesla-logo.jpeg")}
          text="jsdfkjsdfkjshdfajsndkasdkaskdaksmdkasmdkamsdamskdmaksdmkasmdkm"
          link="something.com"
        />
      </Grid>
    </Flex>
  );
};

export default Projects;
