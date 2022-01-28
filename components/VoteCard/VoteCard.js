/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, Button } from 'react-native'

const VoteCard = ({ songInfo, incrementVote, totalVotes }) => {

  let { songName, artist, numVotes, voteId } = songInfo;

  const percentage = totalVotes ? ((numVotes / totalVotes) * 100).toFixed(1) : 0

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "7px%",
        backgroundColor: "#f5f5f5",
        position: "relative",
        borderRadius: 10,
        margin: 10
      }}
    >
      <View>
        <Text
          style={{
            fontWeight: "700"
          }}
        >
          {songName}      
        </Text>
        <Text>
          {artist}
        </Text>
        <Text>
          {`${numVotes} votes`}
        </Text>
        <Text>
          {`${percentage}%`}
        </Text>
      </View>
      <Button
        styles={{
        }}
        title="Vote"
        onPress={() => incrementVote(voteId)}
      />
    </View>
  );
}

export default VoteCard;