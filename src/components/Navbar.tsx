import React, { FC, useState } from "react";
import {
  Button,
  CloseButton,
  Flex,
  IconButton,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [display, setDisplay] = useState<string>("none");
  return (
    <>
      <Flex>
        <Flex pos="fixed" top="1rem" right="1rem" align="center">
          <Flex
            display={["none", "none", "flex", "flex"]}
            align="center"
            justifyContent="space-between"
          >
            <Button as="a" variant="ghost" aria-label="Home" my={5}>
              Home
            </Button>
            <Button as="a" variant="ghost" aria-label="Home" my={5}>
              About
            </Button>
            <Button as="a" variant="ghost" aria-label="Home" my={5}>
              Contact
            </Button>
          </Flex>
          <IconButton
            aria-label="open-menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            display={["flex", "flex", "none", "none"]}
            onClick={() => setDisplay("flex")}
          />
          <Switch
            mx={5}
            color="green"
            isChecked={isDark}
            onChange={toggleColorMode}
          />
        </Flex>
      </Flex>

      <Flex
        w="100vw"
        h="100vh"
        zIndex={20}
        pos="fixed"
        top="0"
        left="0"
        bgColor="black.50"
        overflow="auto"
        flexDirection="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            aria-label="close-menu"
            mt={2}
            mr={2}
            size="lg"
            icon={<CloseButton />}
            onClick={() => setDisplay("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Button as="a" variant="ghost" aria-label="Home" my={5}>
            Home
          </Button>
          <Button as="a" variant="ghost" aria-label="Home" my={5}>
            About
          </Button>
          <Button as="a" variant="ghost" aria-label="Home" my={5}>
            Contact
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
