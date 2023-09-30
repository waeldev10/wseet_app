import Header_sec from '../Commponets/Header_/Header_sec';
import We from '../Commponets/WeAre/We';
import Goal from '../Commponets/WeAre/Goal';
import See from '../Commponets/WeAre/See';
import { useEffect } from 'react';

const WeAre = () => {

    useEffect(() => {
        document.title = 'وسيط كار - من نحن';
      }, []);

    return (

        <>

            <Header_sec />
            <We />
            <Goal />
            <See />
            
        </>

    );

}

export default WeAre;
