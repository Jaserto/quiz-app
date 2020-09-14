import React from 'react';



const Cuestionario = ({ handleNextQuestion, showAnswers, handleAnswer, data: { question, correct_answer, answers }, }) => {



    return (
        <div>
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
                <h2
                    className="text-2xl"
                    dangerouslySetInnerHTML={{ __html: question }}
                />
            </div>
            <div className=" grid grid-cols-2 gap-6 mt-6 ">
                {answers.map((answer, idx) => {
                    const bgColor = showAnswers ? answer === correct_answer ? 'bg-green-500' : 'bg-red-500' : 'bg-white'

                    const textColor = showAnswers ? 'text-white' : 'text-purple-800'

                    return (
                        <button
                            key={idx}
                            className={`${bgColor} ${textColor} p-4
                            text-purple-800 font-semibold rounded shadow`}
                            onClick={() => handleAnswer(answer)}
                            dangerouslySetInnerHTML={{ __html: answer }}
                        />

                    )
                })}
                {showAnswers && (
                    <button
                        onClick={handleNextQuestion}
                        className={`bg-purple-700 p-4
                        text-white font-semibold rounded shadow col-start-2 ml-auto`}>
                        Next Question
                    </button>
                )}

            </div>
        </div>

    );
}

export default Cuestionario;