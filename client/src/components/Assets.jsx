import { Box } from "@chakra-ui/react";
import React from "react";
import ArticleDisplay from "./ArticleDisplay";
import ArticleInput from "./ArticleInput";
import ThreadBuilder from "./ThreadBuilder";
import VideoType from "./VideoType";

export default function Assets({
  asset_title,
  asset_description,
  asset_content,
  asset_type,
  asset_content_type,
}) {
  if (asset_type === "display_asset" && asset_content_type === "video") {
    return (
      <VideoType
        title={asset_title}
        desc={asset_description}
        content={asset_content}
      />
    );
  }

  if (asset_type === "input_asset" && asset_content_type === "threadbuilder") {
    return (
      <ThreadBuilder
        title={asset_title}
        desc={asset_description}
        content={asset_content}
      />
    );
  }

  if (asset_type === "input_asset" && asset_content_type === "article") {
    return <ArticleInput />;
  }

  if (asset_type === "display_asset" && asset_content_type === "article") {
    return <ArticleDisplay />;
  }
}
