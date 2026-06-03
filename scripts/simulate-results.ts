import { questions } from '../src/config/questions';
import { resultOrder } from '../src/config/results';
import { calculateResult, type Answers } from '../src/utils/calculateResult';

const runs = 1000;
const counts = Object.fromEntries(resultOrder.map((id) => [id, 0])) as Record<string, number>;

for (let i = 0; i < runs; i += 1) {
  const answers: Answers = {};
  for (const question of questions) {
    answers[question.id] = Math.floor(Math.random() * question.options.length);
  }
  counts[calculateResult(answers)] += 1;
}

console.log(`模拟 ${runs} 组随机答题结果：`);
for (const id of resultOrder) {
  const count = counts[id];
  const percent = ((count / runs) * 100).toFixed(1).padStart(5, ' ');
  console.log(`${id.padEnd(14)} ${String(count).padStart(4)} 次  ${percent}%`);
}
