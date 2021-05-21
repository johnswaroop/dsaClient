import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import ContainerMain from './components/main/ContainerMain'
import { topicContext } from './components/topicContext'
import { useContext, useState } from 'react'
import getDate from './components/main/getDate'









function App() {

  let date = new Date;
  let indexTopic = useContext(topicContext);
  let [topicIndex, setTopicIndex] = useState(indexTopic);
  let [questionStat, setQestionStat] = useState({ t0q0: { completed: false, difficult: 0, date: getDate() }, t0q1: { completed: false, difficult: 0 }, t0q2: { completed: false, difficult: 0 }, t0q3: { completed: false, difficult: 0 } });


  console.log(questionStat)

  function updateTopicIndex(i) {
    //console.log(topicIndex)
    setTopicIndex(i)
  }



  return (
    <div className="App">

      <topicContext.Provider value={[updateTopicIndex, questionStat, setQestionStat]}>
        <SideNav topicIndex={topicIndex} />
        <TopNav />
        <ContainerMain />
      </topicContext.Provider>






    </div>
  );
}

export default App;
