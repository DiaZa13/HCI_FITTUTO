import React, { useState } from 'react';
import './Exercises.scss';
export default function App() {
	const questions = [
		{
			questionText: '¿Cuál es la solución de la siguiente ecuación? 3x = -2',
			answerOptions: [
				{ answerText: 'x = 2', isCorrect: false },
				{ answerText: 'x = -3/2', isCorrect: false },
				{ answerText: 'x = - 2/3', isCorrect: true },
				{ answerText: 'Ninguna de las anteriores', isCorrect: false },
			],
		},
		{
			questionText: '¿Cuál es la solución de la siguiente ecuación? 3x - 1 = x + 1 + 2x',
			answerOptions: [
				{ answerText: 'x = 0', isCorrect: false },
				{ answerText: 'No tiene solucion', isCorrect: true },
				{ answerText: 'x = 1', isCorrect: false },
				{ answerText: 'Todo numero real es solucion', isCorrect: false },
			],
		},
		{
			questionText: '¿Cuál de las siguientes ecuaciones significa "la suma de dos números consecutivos es igual a 19"?',
			answerOptions: [
				{ answerText: 'x + (x + 1) = 19', isCorrect: true },
				{ answerText: '2 + (x + x) = 19', isCorrect: false },
				{ answerText: '5 + (x + 10) = 19', isCorrect: false },
				{ answerText: 'Ninguna de las anteriores', isCorrect: false },
			],
		},
		{
			questionText: '¿Cuánto es 5 * 5?',
			answerOptions: [
				{ answerText: 'Muy dificil', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '10', isCorrect: false },
				{ answerText: '25', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className="app-container">
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions.length}
						
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
