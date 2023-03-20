import { useState } from 'react';
import './App.css';
function App() {
  
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];


  const [result , setresult] = useState(false)
  const [currentquestion , setcurrentquestion] = useState(0)
  const [score , setScore] = useState(0)

  const handleRetry = () =>{ 
    setresult(false)
    setcurrentquestion(0)
    setScore(0)
  }

  const handleAnswer = (isCorrect) =>{

    const nextquestion = currentquestion + 1

    if(nextquestion < questions.length){
      setcurrentquestion(nextquestion)
    }
    else{
      setresult(true)

    }
    
    
    if(isCorrect){
      setScore(score + 1)
    }


}


  return (
    <div className="h-[100vh] w-full flex justify-center items-center ">
      {
        result ? <div className='bg-cyan-900 rounded-lg text-white w-[90%] p-5 flex flex-col items-center  md:w-[70%]'>
                    <div className='mb-3'>You Scored {score} Out Of {questions.length}</div>
                    <button onClick={handleRetry} className='bg-cyan-700 hover:bg-cyan-800 py-1 px-3 my-2 rounded-lg'>Retry</button>
                  </div>:

      <div className='bg-cyan-900 rounded-lg text-white w-[90%] p-5 flex flex-col md:w-[70%] md:flex-row justify-between md:px-10'>
          <div>
            <p className='text-2xl'><span className=' text-3xl'>question {currentquestion+1}/</span>{questions.length}</p>
            <p className='text-xl mt-5'>{questions[currentquestion].questionText}</p>
          </div>


          <div className='flex flex-col mt-7 md:w-[30%]'>
            {questions[currentquestion].answerOptions.map((answerOption)=>{
              return <button onClick={()=>handleAnswer(answerOption.isCorrect)} key={answerOption.answerText} className='bg-cyan-700 hover:bg-cyan-800 py-1 px-3 my-2 rounded-lg'>{answerOption.answerText}</button>
            })}
          </div>
      </div>
      }
    </div>
  );
}

export default App;
