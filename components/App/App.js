/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {Text, View} from 'react-native';
import VoteContainer from '../VoteContainer/VoteContainer';

const App = () => {

  const [voteData, setVoteData] = useState([
      {
        songName: "A lot",
        artist: "21 Savage",
        numVotes: 0,
        voteId: "20211021"
      },
      {
        songName: "Firework",
        artist: "Katy Perry",
        numVotes: 0,
        voteId: "20211022"
      },
      {
        songName: "Never Gonna Give You Up",
        artist: "Rick Assley",
        numVotes: 0,
        voteId: "20211023"
      },
      {
        songName: "Lovely Day",
        artist: "Bill Withers",
        numVotes: 0,
        voteId: "20211024"
      },
      {
        songName: "W.A.P.",
        artist: "Cardi B",
        numVotes: 0,
        voteId: "20211025"
      }
    ]
  )

  const incrementVote = (voteId) => {
    const found = voteData.find((vote) => voteId == vote.voteId)
    const foundIndex = voteData.indexOf(found)
    found.numVotes++ 
    voteData.splice(foundIndex, 1, found)
    setVoteData([...voteData])
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text
        style={{
          fontSize: 30
        }}
      >
        Q App
      </Text>
      <VoteContainer 
        votes={voteData}
        incrementVote={incrementVote}
      />
    </View>
  )
}

export default App;
