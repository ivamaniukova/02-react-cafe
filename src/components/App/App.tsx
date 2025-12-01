import { useState } from 'react';
import Description from '../Description/Description';
import VoteStats from '../VoteStats/VoteStats.tsx';
import Notification from '../Notification/Notification';
import css from './App.module.css';
import type {Votes, VoteType} from '../../types/votes'
import VoteOptions from '../VoteOptions/VoteOptions';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
	  neutral: 0,
	  bad: 0
  });

  const handleVote = (type: VoteType) => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  


  return (
  <div className={css.app}>
    <Description />
    <VoteOptions 
      onVote={handleVote}
      onReset={resetVotes}
      canReset={totalVotes > 0} />
    {totalVotes > 0 ?
    (<VoteStats 
      votes = {votes}
      totalVotes = {totalVotes}
      positiveRate = {positiveRate}
      />): 
      (<Notification />)}
  </div>

  )

}

