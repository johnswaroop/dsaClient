import { useState, useEffect } from 'react'


const useGetSize = (conRef) => {

    const [size, setSize] = useState();


    useEffect(() => {

        triggerSize();

    }, [conRef])




    function triggerSize() {

        if (conRef) {

            setSize(conRef.current.getBoundingClientRect());

        }



    }






    return size

}

export default useGetSize

