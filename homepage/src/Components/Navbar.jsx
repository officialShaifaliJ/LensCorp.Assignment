import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar({ colorMode, toggleColorMode }) {
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        // h="100px"
        px={5}
        py={2}
        // w="100%"
        border="0px solid white"
        bgColor={colorMode === "light" ? "white" : "rgba(0, 0, 0, 0.16)"}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={"center"}
          px="2pc"
        >
          {colorMode === "light" ? (
            <Image
              src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
              alignItem="center"
            />
          ) : (
            <Image
              src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=96&q=75"
              alignItem="center"
            />
          )}

          <Box display="flex" gap="1.5pc">
            <Text margin="auto">MakeMyWeb.</Text>
            <Text margin="auto">Home</Text>
            <Text margin="auto">Company</Text>
            <Text margin="auto">Blog</Text>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
