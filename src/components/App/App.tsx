import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
import { useState } from "react";
import type { Status, VoteType } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

const App = () => {
  const [votes, setVotes] = useState<Status>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (value: VoteType) => {
    setVotes({
      ...votes,
      [value]: votes[value] + 1,
    });
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = Math.round((votes.good / totalVotes) * 100 || 0);
  const canReset: boolean = totalVotes > 0 ? true : false;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={canReset}
      />
      {totalVotes > 0 ? (
        <VoteStats
          vote={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
