import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { theme } from "../styles/theme";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <Layout>
      <Box maxW={"130rem"} m={"0 auto"} p={"0 1rem"}>
        <Flex flexDir={"column"} mt={"2rem"} align={"center"} minH={"70vh"}>
          <Image
            src={"/img/404-img.png"}
            alt={"404-image"}
            width={300}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
          <Text fontSize={"4.2rem"} mb={"2.5rem"} mt={"1rem"} fontWeight={500}>
            Looks like you&apos;re lost
          </Text>
          <Link href={"/"}>
            <Text
              border={`2px solid ${theme.color.primary.blue}`}
              textColor={theme.color.primary.blue}
              p={"1.2rem 2.3rem"}
              borderRadius={"30px"}
              fontWeight={500}
              fontSize={"1.8rem"}
              _hover={{
                bgColor: theme.color.primary.blue,
                textColor: theme.color.text.white,
              }}
              transition={"all 0.4s ease-out;"}
            >
              Let&apos;s go back home
            </Text>
          </Link>
        </Flex>
      </Box>
    </Layout>
  );
};

export default ErrorPage;
