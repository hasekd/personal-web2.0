import { RxHamburgerMenu } from "react-icons/rx";
import { theme } from "../../styles/theme";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  useDisclosure,
  Flex,
  Text,
  TextProps,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const LinkStyle: TextProps = {
  cursor: "pointer",
  textTransform: "uppercase",
  fontSize: "1.3rem",
  pos: "relative",
  textColor: theme.color.primary.blue,
  fontWeight: 600,
  _hover: {
    _after: { transform: "scaleX(1)", transformOrigin: "bottom left" },
  },
  _after: {
    content: '""',
    pos: "absolute",
    w: "100%",
    transform: "scaleX(0)",
    h: "0.15rem",
    bottom: "-0.2rem",
    left: "0",
    bgColor: theme.color.primary.blue,
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-out",
  },
};

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex justify={"space-between"} align={"center"} p={"2rem"}>
        <Link href={"/"}>
          <Image
            src={"/img/logo.png"}
            alt={"main-logo"}
            width={200}
            height={0}
            style={{ width: "7rem" }}
          />
        </Link>
        <Icon
          as={RxHamburgerMenu}
          onClick={onOpen}
          cursor={"pointer"}
          w={"2.7rem"}
          h={"2.7rem"}
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            fontSize={"1.3rem"}
            p={"2rem"}
            _hover={{
              bgColor: "transparent",
              textColor: theme.color.primary.blue,
            }}
          />
          <DrawerBody pt={"4rem"}>
            <Flex gap={"3rem"} align={"center"} flexDir={"column"}>
              <Link href={"/about"}>
                <Text {...LinkStyle}>About me</Text>
              </Link>
              <Link href={"/my-work"}>
                <Text {...LinkStyle}>My work</Text>
              </Link>
              <Link href={"/contact"}>
                <Text
                  border={`2px solid ${theme.color.primary.blue}`}
                  textColor={theme.color.primary.blue}
                  p={"1rem 2.3rem"}
                  borderRadius={"25px"}
                  fontWeight={600}
                  fontSize={"1.5rem"}
                  _hover={{
                    bgColor: theme.color.primary.blue,
                    textColor: theme.color.text.white,
                  }}
                  transition={"all 0.4s ease-out;"}
                >
                  Say Hello
                </Text>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
