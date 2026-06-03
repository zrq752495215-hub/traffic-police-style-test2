import type { ResultId } from './results';

export const scoreValues = {
  primary: 2,
  secondary: 1,
};

export const keyQuestionIds = [3, 5, 7, 10, 18, 19, 21, 23];

export const fallbackPriority: ResultId[] = [
  'steady',
  'communication',
  'observation',
  'action',
  'teamwork',
  'creative',
  'coordination',
  'persistence',
  'adaptability',
  'service',
];

export const resultWeights: Record<ResultId, number> = {
  steady: 1.03,
  communication: 1.07,
  observation: 1.12,
  action: 1.22,
  teamwork: 0.93,
  creative: 1.25,
  coordination: 0.9,
  persistence: 1.58,
  adaptability: 1.1,
  service: 1.32,
};
