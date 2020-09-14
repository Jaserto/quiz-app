import React from 'react';



const Cuestionario = ({ handleAnswer, data: { question, correct_answer, incorrect_answers }, }) => {
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
    console.log(shuffledAnswers);


    return (
        <div>
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
                <h2
                    className="text-2xl"
                    dangerouslySetInnerHTML={{ __html: question }}
                />
            </div>
            <div className=" grid grid-cols-2 gap-6 mt-6 ">
                {shuffledAnswers.map(answer => (

                    <button
                        className='bg-white p-4
                        text-puple-800 font-semibold rounded shadow'
                        onClick={() => handleAnswer(answer)}
                        dangerouslySetInnerHTML={{ __html: answer }}
                    />

                ))}
            </div>
        </div>

    );
}

export default Cuestionario;