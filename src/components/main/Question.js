import { useRef, useState } from 'react';

const Question = (props) => {

    let checkBox = useRef();
    const [difficulty, setDifficulty] = useState(2);
    const qid = props.topic + 'q' + (props.qno - 1);

    function checkHandle(e) {


        console.log('click');

    }

    function handleDifficulty(e) {

        setDifficulty(e.target.value);

    }







    return (
        <div className='question' id={qid}>

            <div className='q-text'>

                <div>
                    <h1 className='qno'>{props.qno}.</h1>

                    <h1>{props.question}</h1>
                </div>

                <div className='qTools'>

                    <div className='difficulty'>
                        <label htmlFor="difficulty">
                            Difficulty :
                        </label>
                        <select value={difficulty} name="difficulty" id="" onChange={handleDifficulty} >

                            <option value="" disabled selected >N/A</option>
                            <option value="0">Easy</option>
                            <option value="1">Medium</option>
                            <option value="2">Hard</option>
                        </select>

                    </div>

                    <div ref={checkBox} name={qid} onClick={checkHandle} className='check-box'>



                    </div>




                </div>




            </div>



            <span className='divider'>
                <span></span>
            </span>

        </div>
    )
}


export default Question