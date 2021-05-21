
import Topic from './Topic'
import useGetSize from '../useGetSize'
import { useEffect, useRef, useState } from 'react'

const topics = ["Array", "Matrix", "String", "Searching & Sorting", "LinkedList", "Binary Trees", "Binary Search Trees", "Greedy", "BackTracking", "Stacks & Queues", "Heap", "Graph", "Trie", "Dynamic Programming", "Bit Manipulation"];



const ContainerMain = (props) => {

    const conRef = useRef();







    return (
        <div ref={conRef} className='container-main'>

            <div className='topic-container' ref={conRef} >

                <div className='greeting'>

                    <span>
                        <h1>Welcome back  Anna !</h1>
                        <p>You have completed 20% of the Questions
                        keep it and improve your results !
                       </p>
                    </span>

                    <img src="images/guy.png" alt="" />

                </div>

                {topics.map((t) => {

                    return <Topic topic={t} index={topics.indexOf(t)} />

                })}

            </div>










        </div>
    )


}

export default ContainerMain;




