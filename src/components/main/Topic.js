
import Question from './Question'
import getQuestionList from './getQuestionList'
import { motion } from 'framer-motion'
import { topicContext } from '../topicContext'
import { useRef, useEffect, useContext } from 'react'



const Topic = (props) => {


    let list = getQuestionList(props.index);
    let i = 1;
    let tref = useRef();
    let [updateTopicIndex, questionStat, setQuestionStat] = useContext(topicContext);









    useEffect(() => {

        window.addEventListener('scroll', () => {

            let y = tref.current.getBoundingClientRect().top;

            if (
                window.innerHeight * (0.5) > y && y > 0
            ) {

                updateTopicIndex(props.index);
            }
        })
    }, []);


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.25, ease: 'anticipate' }}
            id={'t' + props.index} ref={tref} className='topic'>

            <div className='topic-nav'>

                <div className='topic-head'>
                    <span>
                        <p>Topic</p>
                        <h1>{props.topic}</h1>
                    </span>

                    <span>
                        <p>Progress</p>
                        <h1>0/{list.length}</h1>
                    </span>
                </div>

                <span className='topic-progress'>

                </span>

            </div>


            <div className='question-list'>

                {list.map((q) => {

                    return <Question topic={'t' + props.index} question={q} qno={i++} setQuestionStat={setQuestionStat} />

                })}




            </div>


        </motion.div>
    )
}

export default Topic