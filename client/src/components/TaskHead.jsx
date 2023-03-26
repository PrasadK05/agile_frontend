import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export default function TaskHead({ title }) {
  return (
    <Box
      w="70%"
      m="auto"
      mt="15px"
      border={"1px solid red"}
      display="flex"
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Text fontSize={"28px"} color="#0029FF" fontWeight={"bold"}>
        {title}
      </Text>
      <Button
        w="121px"
        h="36px"
        border={"10px"}
        bg="#0029FF"
        color={"#FFFFFF"}
        fontSize="12px"
      >
        Submit Taks
      </Button>
    </Box>
  );
}
