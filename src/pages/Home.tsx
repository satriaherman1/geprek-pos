import { useEffect, useState } from "react";
import Onboarding from "@src/components/common/Onboarding";

import { StepProps } from "@src/components/common/Onboarding/onboarding";

import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  List,
  ListItem,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box textAlign="center" pt="12vh">
        <Heading>Aplikasi POS Geprek</Heading>
        <Flex
          flexDir="column"
          width="80%"
          maxW="450px"
          mt="40px"
          mx="auto"
          rowGap="15px"
        >
          <Button colorScheme="teal">
            <Link to="/sales">Penjualan</Link>
          </Button>
          <Button colorScheme="teal">
            <Link to="/stock">Pembelian</Link>
          </Button>
        </Flex>

        <Flex justifyContent="center" mt="50vh">
          <Button variant="solid" colorScheme="gray" onClick={onOpen}>
            Tech Stack
          </Button>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">Tech Stack</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <List
                display="flex"
                flexDir="column"
                gap="12px"
                textAlign="center"
              >
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap="12px"
                >
                  Reactjs{" "}
                  <Image
                    width="50px"
                    src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"
                  />
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap="12px"
                >
                  Go{" "}
                  <Image
                    width="50px"
                    src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
                  />
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap="20px"
                >
                  GraphQL{" "}
                  <Image
                    width="30px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sEofibUmrpTqeczv9TCUqmVGhCDUIfkSJN5DeIY&s"
                  />
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap="20px"
                >
                  Vite <Image width="30px" src="/vite.svg" />
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap="20px"
                >
                  Chakra UI{" "}
                  <Image
                    width="50px"
                    src="https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-768x431.png"
                  />
                </ListItem>
              </List>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
