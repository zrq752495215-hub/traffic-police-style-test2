import { questions } from '../config/questions';
import { fallbackPriority, keyQuestionIds, resultWeights, scoreValues } from '../config/scoring';
import { resultOrder, type ResultId } from '../config/results';

export type Answers = Record<number, number>;

export function calculateResult(answers: Answers): ResultId {
  const scores = Object.fromEntries(resultOrder.map((id) => [id, 0])) as Record<ResultId, number>;
  const keyScores = Object.fromEntries(resultOrder.map((id) => [id, 0])) as Record<ResultId, number>;

  for (const question of questions) {
    const optionIndex = answers[question.id];
    const option = question.options[optionIndex];
    if (!option) continue;

    scores[option.primary] += scoreValues.primary;
    scores[option.secondary] += scoreValues.secondary;

    if (keyQuestionIds.includes(question.id)) {
      keyScores[option.primary] += scoreValues.primary;
      keyScores[option.secondary] += scoreValues.secondary;
    }
  }

  return resultOrder
    .map((id) => ({
      id,
      score: scores[id] * resultWeights[id],
      keyScore: keyScores[id] * resultWeights[id],
      fallback: fallbackPriority.indexOf(id),
    }))
    .sort((a, b) => b.score - a.score || b.keyScore - a.keyScore || a.fallback - b.fallback)[0].id;
}

export function emptyAnswers(): Answers {
  return {};
}
