import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Flex flexDir={"column"} align={"center"} p={"3rem 2rem 5rem 2rem"}>
      <Box textAlign={"center"}>
        <Text
          fontSize={{ base: "3rem", md: "3.6rem" }}
          mb={"1rem"}
          fontWeight={700}
        >
          My Work
        </Text>
        <Text fontSize={{ base: "1.6rem", md: "2rem" }}>
          Here are a few projects I have worked on.
        </Text>
      </Box>

      <Grid
        gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
        gap={"2rem"}
        mt={"5rem"}
      >
        <ProjectCard
          image={require("../../public/img/tesla-logo.jpeg")}
          text="jsdfkjsdfkjshdfajsndkasdkaskdaksmdkasmdkamsdamskdmaksdmkasmdkm"
          link="https://en.wikipedia.org/wiki/Next.js"
        />
        <ProjectCard
          image={require("../../public/img/tesla-logo.jpeg")}
          text="jsdfkjsdfkjshdfajsndkasdkaskdaksmdkasmdkamsdamskdmaksdmkasmdkm"
          link="something.com"
        />
        <ProjectCard
          image={require("../../public/img/tesla-logo.jpeg")}
          text="jsdfkjsdfkjshdfajsndkasdkaskdaksmdkasmdkamsdamskdmaksdmkasmdkm"
          link="something.com"
        />
        <ProjectCard
          image={require("../../public/img/tesla-logo.jpeg")}
          text="jsdfkjsdfkjshdfajsndkasdkaskdaksmdkasmdkamsdamskdmaksdmkasmdkm"
          link="something.com"
        />
      </Grid>
    </Flex>
  );
};

export default Projects;
