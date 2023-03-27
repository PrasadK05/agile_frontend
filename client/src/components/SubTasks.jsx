import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Assets from "./Assets";

export default function SubTasks({ assets, task_title, task_description }) {
  return (
    <>
      <Box
        w="70%"
        h="135px"
        bg="#E9ECEF"
        px="27px"
        py="25px"
        m="auto"
        mt="43px"
      >
        <Text color={"#000000"} fontSize="20px" fontWeight={"700"}>
          {task_title}
        </Text>
        <Text mt="10px" fontSize="14px" color={"#000000"}>
          {task_description}
        </Text>
      </Box>
      <Box
        w={"70%"}
        m="auto"
        border={"1px solid red"}
        display="grid"
        gridTemplateColumns={"repeat(2,1fr)"}
        gap="52px"
        mt="75px"
      >
        {assets &&
          assets.map((el) => {
            return (
              <Assets
                key={el.asset_id}
                asset_title={el.asset_title}
                asset_description={el.asset_description}
                asset_content={el.asset_content}
                asset_type={el.asset_type}
                asset_content_type={el.asset_content_type}
              />
            );
          })}
      </Box>
    </>
  );
}
