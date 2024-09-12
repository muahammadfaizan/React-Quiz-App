import axios from "axios"
import { useEffect, useRef, useState } from "react"

function App (){
 
  const [questionsQuiz , setQuestionsQuiz] = useState([])
  const [questionState , setQuestionState] = useState (0)

  const inputVal = useRef([])
  
  useEffect(()=>{
    axios("https://the-trivia-api.com/v2/questions")
    .then((res)=>{
      console.log(res.data);
      setQuestionsQuiz(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  } , [])

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
  }

  const nextBtn = ()=>{
    console.log("next button");
    // setQuestionState(questionsQuiz + 1);
    const checkBtn = inputVal.current.find(input => input.checked)
    if(checkBtn){
      const selectVal = checkBtn.value
      console.log(selectVal);
       return
    }
    


    questionState < questionsQuiz.length -1 ? setQuestionState(questionState + 1) : alert("bhai question khatam hoge")

  }


  return (
    <div>
      <h1>Quiz App</h1>
      <div>
        {questionsQuiz.length > 0 ? (
          <div>
            <h1>Q{questionState + 1} : {questionsQuiz[questionState].question.text}</h1>
            <ul>
            {shuffleArray([...questionsQuiz[questionState].incorrectAnswers , questionsQuiz[questionState].correctAnswer]).map((item , index) => (
                <li key={index}>
                  <input type="radio" name="choice" id={item} ref={el => inputVal.current.find[index] = el} />
                  <label htmlFor={item}>{item}</label>
                </li>
              ))}
            </ul>
            <button onClick={nextBtn}>Next</button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}





export default App




















