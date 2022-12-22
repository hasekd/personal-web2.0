import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { AiOutlineCode } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import React from "react";
import Layout from "../components/Layout/Layout";
import SkillCard from "../components/SkillCard/SkillCard";

const AboutPage = () => {
  return (
    <Layout>
      <Box>
        <Box textAlign={"center"} m={"5rem 0"}>
          <Text fontWeight={700} fontSize={"3.6rem"}>
            Hey, I&apos;m Daniel. Nice to meet you.
          </Text>
          <Text fontSize={"2rem"} mt={"1.5rem"}>
            Frontend developer that loves to code and design things from
            scratch. From Czech Republic.
          </Text>
        </Box>
        <Flex justify={"space-around"} align={"center"} minH={"80vh"}>
          <SkillCard
            heading={"Frontend Developer"}
            text={"I like to code and enjoy bringing ideas to life."}
            tools={"React, Typescript, HTML, CSS"}
            icon={AiOutlineCode}
          />
          <SkillCard
            heading={"Designer"}
            text={"Clean and beautiful designs and illustrations."}
            tools={"Figma, Pen & Paper, Photoshop"}
            icon={MdOutlineDesignServices}
          />
        </Flex>
      </Box>
    </Layout>
  );
};

export default AboutPage;
