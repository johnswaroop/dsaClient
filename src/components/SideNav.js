import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { getQuestionListLength } from './main/getQuestionList'


const SideNav = (props) => {

    const index = ["Array", "Matrix", "String", "Searching & Sorting", "LinkedList", "Binary Trees", "Binary Search Trees", "Greedy", "BackTracking", "Stacks & Queues", "Heap", "Graph", "Trie", "Dynamic Programming", "Bit Manipulation"];
    const indexJsx = [];



    const selectStyle = {
        yes: {

            backgroundColor: 'white'
        },
        no: {
            backgroundColor: 'rgba(255, 255, 255,0)'
        },

        bold: {
            color: 'rgba(255,255,255, 1)'
        },

        noBold: {
            color: 'rgba(255,255,255, 0.7)'
        }
    }



    const [selectedIndex, setSelectedIndex] = useState(props.topicIndex);

    useEffect(() => {

        setSelectedIndex(props.topicIndex)

    }, [props.topicIndex])



    function handleClik(e) {


        setSelectedIndex(e.currentTarget.id)
        document.querySelector('#t' + (e.currentTarget.id)).scrollIntoView();
        window.scrollBy(0, -70);

    }

    for (let i = 0; i < index.length; i++) {

        indexJsx.push(<li>
            <motion.div whileHover={{ x: 20 }} transition={{ duration: 0.1, easings: ['easeIn', 'easeOut'] }}
                name={`index-${i + 1}`} id={i} className='index-item' onClick={handleClik} >

                <p>{i + 1}</p>



                <div className='item-main'>

                    <h1 style={selectedIndex == i ? selectStyle.bold : selectStyle.noBold} >{index[i]}</h1>


                    <div className='index-select-bar'>
                        <motion.div key={selectedIndex} initial={{ width: '25%', opacity: '25%' }} animate={{ width: '100%', opacity: '100%' }} transition={{ duration: 0.3 }}
                            className='index-select-progress' style={selectedIndex == i ? selectStyle.yes : selectStyle.no} >

                        </motion.div>
                    </div>


                </div>

                <div className='nav-question-count'>

                    <p>0/{getQuestionListLength(i)}</p>

                </div>




            </motion.div>
        </li >)

    }


    return (
        <div className='left-nav'>

            <div className='nav-list'  >
                <ul>

                    {indexJsx}


                </ul>

            </div>

        </div>
    )
}

export default SideNav;