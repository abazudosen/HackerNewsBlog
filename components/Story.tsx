import { View, Text, Linking, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Card } from "react-native-paper";
import { getStory } from "../data/api";
import dayjs from "dayjs";

interface IStory {
  title?: string;
  by?: string;
  url?: string;
  time?: any;
}

const Story = ({ storyId }: any) => {
  const [story, setStory] = useState<IStory>({});

  const onURLPress = (url: string) => {
    Linking.openURL(url);
  };

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <Card style={{ margin: 5 }}>
      <Card.Title
        titleNumberOfLines={2}
        titleStyle={{ fontSize: 14, lineHeight: 20, fontWeight: "bold" }}
        title={story.title}
      />
      <Card.Content>
        <Text style={{ fontSize: 14 }}>Story by: {story?.by}</Text>
        <TouchableOpacity onPress={() => onURLPress(`${story.url}`)}>
          <Text style={{ fontSize: 12, paddingTop: 6, color: "blue" }}>
            {story?.url}
          </Text>
        </TouchableOpacity>
      </Card.Content>

      <Card.Content style={{ paddingTop: 6 }}>
        <Text style={{ fontSize: 14 }}>posted: {dayjs(story?.time).fromNow()}</Text>
      </Card.Content>
    </Card>
  ) : (
    <View />
  );
};

export default Story;
