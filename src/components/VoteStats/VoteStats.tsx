import css from './VoteStats.module.css';
import { Votes } from '../../types/votes';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Statistics</h2>
      <ul className={css.list}>
        <li className={css.item}>Good: <span>{votes.good}</span></li>
        <li className={css.item}>Neutral: <span>{votes.neutral}</span></li>
        <li className={css.item}>Bad: <span>{votes.bad}</span></li>
        <li className={css.item}>Total: <span>{totalVotes}</span></li>
        <li className={css.item}>Positive: <span>{positiveRate}%</span></li>
      </ul>
    </div>
  );
}