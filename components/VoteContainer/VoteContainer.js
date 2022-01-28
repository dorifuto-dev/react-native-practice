/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text } from 'react-native';
import VoteCard from '../VoteCard/VoteCard';

const VoteContainer = ({ votes, incrementVote }) => {

  const totalVotes = votes.reduce((acc, vote) => {
    acc += vote.numVotes
    return acc
  }, 0)

  const voteCards = votes.map((vote) => {
    return (
      <VoteCard 
        key={vote.voteId}
        songInfo={vote}
        incrementVote={incrementVote}
        totalVotes={totalVotes}
      >
      </VoteCard>
    )
  })

  return (
    <View>
      {voteCards}
    </View>
  );
}

export default VoteContainer;