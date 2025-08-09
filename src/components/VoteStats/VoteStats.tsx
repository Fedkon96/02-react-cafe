import css from "./VoteStats.module.css";
import type { Status } from "../../types/votes";

interface VoteStatsProps {
  vote: Status;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats = ({ vote, totalVotes, positiveRate }: VoteStatsProps) => {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{vote.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{vote.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{vote.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
};

export default VoteStats;
