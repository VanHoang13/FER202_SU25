// src/slices/quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Inside which HTML element do we put the JavaScript?',
      options: ['javascript', 'scripting', 'script', 'js'],
      correctAnswer: 'script',
      selectedAnswer: null,
    },
    {
      id: 2,
      text: 'What are variables used for in JavaScript Programs?',
      options: ['Storing numbers, dates, or other values', 'Causing high-school algebra flashbacks', 'None of these'],
      correctAnswer: 'Storing numbers, dates, or other values',
      selectedAnswer: null,
    },
    {
      id: 3,
      text: 'Which of the following can’t be done with client-side JavaScript?',
      options: ['Validating a form', 'Sending a form’s contents by email'],
      correctAnswer: 'Sending a form’s contents by email',
      selectedAnswer: null,
    },
  ],
  currentQuestion: 0,
  submitted: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) {
        question.selectedAnswer = answer;
      }
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    submitQuiz: (state) => {
      state.submitted = true;
    },
    resetQuiz: (state) => {
      state.questions.forEach((question) => {
        question.selectedAnswer = null;
      });
      state.currentQuestion = 0;
      state.submitted = false;
    },
  },
});

export const { selectAnswer, setCurrentQuestion, submitQuiz, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;