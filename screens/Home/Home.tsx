import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";

import { getStory, getStoryIds } from "../../data/api";
import Story from "../../components/Story";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isListEnd, setIsListEnd] = useState(false);
  const [moreLoading, setMoreLoading] = useState(false);

  const [storyIds, setStoryIds] = useState([]);
  const [page, setPage] = useState(1);

  const getFeedStories = () => {
    setIsLoading(true);
    setTimeout(() => {
      getStoryIds({
        page: page,
      }).then((data) => setStoryIds(data));
    }, 1000);
    setIsLoading(false);
  };

  const fetchMoreData = () => {
    if (isListEnd && !moreLoading) {
      setPage(page + 1);
    }
    setIsListEnd(true);
    setMoreLoading(false);
  };

  const renderFooter = () => (
    <View style={{ flex: 1, alignItems: "center" }}>
      {moreLoading && <ActivityIndicator size={"large"} color="blue" />}
      {isListEnd && (
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          No more stories at the moment.
        </Text>
      )}
    </View>
  );

  useEffect(() => {
    getFeedStories();
    // getStory(34330640).then((data) => console.log(data));
  }, [page]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      {isLoading ? (
        <View style={{ flex: 1, alignItems: "center" }}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <FlatList
          data={storyIds}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={{ margin: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Top Stories
              </Text>
            </View>
          }
          renderItem={({ item }) => {
            console.log(JSON.stringify(item));
            return <Story storyId={item} />;
          }}
          ListFooterComponent={renderFooter}
          onRefresh={() => getFeedStories()}
          refreshing={isLoading}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreData}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
