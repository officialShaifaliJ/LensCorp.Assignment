import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar({colorMode,toggleColorMode}) {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box h="50px" px={5} py={2}>
        <Flex alignItems={"center"} justifyContent='space-between'>
          <Box margin="auto" border='0px solid black'>
            {colorMode === "light" ? (
              <Image src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75" alignItem='center'/>
            ) : (
              <Image src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=96&q=75" alignItem='center'/>
            )}
          </Box>

          <Box alignItems="center" border='0px solid black'>
            <Stack direction={"row"} spacing={7} justifyContent={'center'} margin='auto'>
                <Text margin='auto'>MakeMyWeb.</Text>
                <Text margin='auto'>Home</Text>
                <Text margin='auto'>Company</Text>
                <Text margin='auto'>Blog</Text>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
