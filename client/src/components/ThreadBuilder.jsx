import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Box,
  Text,
  AccordionPanel,
  Textarea,
  Menu,
  MenuButton,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { BsInfoCircleFill, BsQuestionSquareFill } from "react-icons/bs";
import { AiOutlineDown, AiTwotoneBulb } from "react-icons/ai";
import { GiLotus } from "react-icons/gi";
import { MdMessage } from "react-icons/md";

export default function ThreadBuilder({ title, desc, content }) {
  return (
    <Box
      h="580px"
      bg="#FDFDFD"
      borderRadius={"15px"}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25)"
    >
      <Box
        w="100%"
        h="50px"
        bg="#000000"
        color={"#FFFFFF"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        position={"relative"}
        borderTopRadius={"15px"}
      >
        <Text>{title}</Text>
        <Box position="absolute" right={"14px"}>
          <BsInfoCircleFill color={"#FFFFFF"} />
        </Box>
      </Box>
      <Box px="11px" my="20px">
        <Text color={"#000000"}>
          {" "}
          <Text fontWeight={"bold"} display="inline-block">
            Description:
          </Text>{" "}
          {desc}
        </Text>
      </Box>
      <Accordion defaultIndex={[0]} allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box display={"flex"} gap="72px" alignItems={"center"}>
              <AccordionIcon />
              <Text fontSize={"20px"} fontWeight="bold">
                Thread A
              </Text>
            </Box>
          </AccordionButton>
          <AccordionPanel mt="30px">
            <Box
              w="90%"
              m="auto"
              display={"grid"}
              gridTemplateColumns="repeat(2,1fr)"
              gap="34px"
            >
              <Box
                boxShadow={"1px 3px 8px rgba(0, 0, 0, 0.25)"}
                borderRadius={"10px"}
                bg="rgba(0, 0, 0, 0.05)"
              >
                <Text fontSize={"12px"} ml="6px" my="3px">
                  Sub thread 1
                </Text>
                <Textarea
                  placeholder="Enter Text here"
                  boxShadow={"1px 3px 8px rgba(0, 0, 0, 0.25)"}
                  bg="#FFFFFF"
                  borderRadius={"10px"}
                  fontSize={"12px"}
                />
              </Box>
              <Box
                boxShadow={"1px 3px 8px rgba(0, 0, 0, 0.25)"}
                borderRadius={"10px"}
                bg="rgba(0, 0, 0, 0.05)"
              >
                <Text fontSize={"12px"} ml="6px" my="3px">
                  Sub Interpretation 1
                </Text>
                <Textarea
                  placeholder="Enter Text here"
                  boxShadow={"1px 3px 8px rgba(0, 0, 0, 0.25)"}
                  bg="#FFFFFF"
                  borderRadius={"10px"}
                  fontSize={"12px"}
                />
              </Box>
            </Box>
            <Box
              w="90%"
              m="auto"
              display={"flex"}
              justifyContent="flex-end"
              alignItems={"center"}
              gap="26px"
              mt="20px"
            >
              <Box display={"flex"} gap="14px" alignItems={"center"}>
                <AiTwotoneBulb size={"19px"} />
                <MdMessage size={"19px"} />
                <BsQuestionSquareFill size={"19px"} />
                <GiLotus size={"19px"} />
              </Box>
              <Box display={"flex"} gap="17px" alignItems={"center"}>
                <Box
                  fontSize="10px"
                  fontWeight={"bold"}
                  h="32px"
                  w="91px"
                  display={"flex"}
                  justifyContent="center"
                  gap="6px"
                  alignItems={"center"}
                  boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius={"5px"}
                  bg="#FFFFFF"
                >
                  <Text>Select Categ</Text>
                  <AiOutlineDown />
                </Box>

                <Box
                  fontSize="10px"
                  fontWeight={"bold"}
                  h="32px"
                  w="91px"
                  display={"flex"}
                  justifyContent="center"
                  gap="6px"
                  alignItems={"center"}
                  boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius={"5px"}
                  bg="#FFFFFF"
                >
                  <Text>Select Proces</Text>
                  <AiOutlineDown />
                </Box>
              </Box>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
