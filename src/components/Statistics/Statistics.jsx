import { getColor } from "../FeedbackOptions/buttonColor"
import { Item,Ul } from "./Statistics.styled"
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return <Ul>
  <Item color={getColor('good')}><p>Good: <span>{good}</span></p></Item>
  <Item color={getColor('neutral')}><p>Neutral: <span>{neutral}</span></p></Item>
  <Item color={getColor('bad')}><p>Bad: <span>{bad}</span></p></Item>
  <Item><p>Total: <span>{total}</span></p></Item>
  <Item><p>Positive feedback: <span>{positivePercentage}%</span></p></Item>
</Ul>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired
}