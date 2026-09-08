import assert from 'node:assert/strict';
import test from 'node:test';
import {
  initialQuiz,
  answerQuestion,
  nextQuestion,
  scoreQuiz,
} from '../app/quiz-state.ts';
import {
  questions,
  sources,
  topics,
  audiencePaths,
} from '../app/learning-content.ts';

test('cannot skip an unanswered question', () => {
  const state = initialQuiz();
  assert.equal(nextQuestion(state, questions.length), state);
  assert.equal(scoreQuiz(state, questions), 0);
});
test('first answer is final even after repeated or different selections', () => {
  const state = answerQuestion(initialQuiz(), 0, questions[0].options.length);
  assert.equal(answerQuestion(state, 1, questions[0].options.length), state);
  assert.deepEqual(state.answers, [0]);
});
test('invalid answer choices do not alter the session', () => {
  const state = initialQuiz();
  for (const answer of [-1, 2, 1.5, NaN])
    assert.equal(answerQuestion(state, answer, 2), state);
});
test('all correct choices reach completion exactly once', () => {
  let state = initialQuiz();
  questions.forEach((question, i) => {
    assert.equal(state.index, i);
    state = answerQuestion(state, question.correct, question.options.length);
    state = nextQuestion(state, questions.length);
  });
  assert.equal(state.finished, true);
  assert.equal(state.index, questions.length - 1);
  assert.equal(scoreQuiz(state, questions), questions.length);
  assert.equal(nextQuestion(state, questions.length), state);
  assert.equal(answerQuestion(state, 0, 2), state);
});
test('wrong choices still complete learning and give an accurate score', () => {
  let state = initialQuiz();
  questions.forEach((q, i) => {
    state = answerQuestion(
      state,
      i % 2 ? q.correct : 1 - q.correct,
      q.options.length,
    );
    state = nextQuestion(state, questions.length);
  });
  assert.equal(state.finished, true);
  assert.equal(scoreQuiz(state, questions), 2);
  assert.deepEqual(initialQuiz(), { index: 0, answers: [], finished: false });
});
test('quiz restart creates fresh answer storage', () => {
  const first = initialQuiz();
  const second = initialQuiz();
  assert.notEqual(first.answers, second.answers);
});
test('every learning topic and quiz answer has a valid supporting source', () => {
  for (const item of [...questions, ...topics]) {
    assert.ok(sources[item.source], item.id);
    assert.equal(new URL(sources[item.source].url).protocol, 'https:');
  }
  for (const question of questions) {
    assert.ok(question.explanation.length > 30);
    assert.ok(
      question.correct >= 0 && question.correct < question.options.length,
    );
  }
});
test('topic, quiz and audience identifiers stay unique', () => {
  for (const items of [
    topics,
    questions,
    audiencePaths,
    ...audiencePaths.map((path) => path.items),
  ]) {
    assert.equal(new Set(items.map((item) => item.id)).size, items.length);
  }
});
