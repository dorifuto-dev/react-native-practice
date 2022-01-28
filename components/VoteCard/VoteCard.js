/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native'

const VoteCard = ({ songInfo, incrementVote, totalVotes }) => {

  let { songName, artist, numVotes, voteId } = songInfo;

  return (
    <View>
      <Text>
        {songName}      
      </Text>
      <Text>
        {numVotes}
      </Text>
      <Text>
        {totalVotes}
      </Text>
      <Button 
        title="Clicky"
        onPress={() => incrementVote(voteId)}
      />
    </View>
  );
}

export default VoteCard;