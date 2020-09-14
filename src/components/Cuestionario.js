import React from 'react';

const Button = ({ answer }) => (
    <button className="bg-white p-4
    text-puple-800 font-semibold rounded shadow">
        {answer}
    </button>
)

const Cuestionario = ({ data: { question, correct_answer, incorrect_answers }, }) => {
    const shuffledAnswer = [correct_answer, ...incorrect_answers]

    return (
        <div>
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
                <h2
                    className="text-2xl"
                    dangerouslySetInnerHTML={{ __html: question }}
                />
            </div>
            <div className=" grid grid-cols-2 gap-6 mt-6 ">
                <Button onClick={() => shuffledAnswer[0]} answer={correct_answer} />
                <Button onClick={() => shuffledAnswer[1]} answer={incorrect_answers[0]} />
                <Button onClick={() => shuffledAnswer[2]} answer={incorrect_answers[1]} />
                <Button onClick={() => shuffledAnswer[3]} answer={incorrect_answers[2]} />
            </div>
        </div>

    );
}

export default Cuestionario;