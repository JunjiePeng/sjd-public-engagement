export type QuizState = { index: number; answers: number[]; finished: boolean };
export function initialQuiz(): QuizState {
  return { index: 0, answers: [], finished: false };
}
export function answerQuestion(
  state: QuizState,
  answer: number,
  optionCount: number,
): QuizState {
  if (
    state.finished ||
    state.answers[state.index] !== undefined ||
    !Number.isInteger(answer) ||
    answer < 0 ||
    answer >= optionCount
  )
    return state;
  return { ...state, answers: [...state.answers, answer] };
}
export function nextQuestion(state: QuizState, count: number): QuizState {
  if (state.finished || state.answers[state.index] === undefined) return state;
  if (state.index === count - 1) return { ...state, finished: true };
  return { ...state, index: state.index + 1 };
}
export function scoreQuiz(
  state: QuizState,
  questions: { correct: number }[],
): number {
  return questions.reduce(
    (score, question, index) =>
      score + Number(state.answers[index] === question.correct),
    0,
  );
}
