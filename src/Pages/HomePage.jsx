
import Header from '../Commponets/Home/Header';
import Serves from '../Commponets/Home/Serves';
import WseetApp from '../Commponets/Home/WseetApp';
import { useEffect } from 'react';

function HomePage(){

    useEffect(() => {
        document.title = 'وسيط كار - الرئيسية';
      }, []);

    return (

        <>
            
            <Header />
            <Serves />
            <WseetApp />
            
        </>

    );

}

 export default HomePage;