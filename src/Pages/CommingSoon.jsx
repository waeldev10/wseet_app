
import Header_sec from "../Commponets/Header_/Header_sec";
import Soon from '../Commponets/Soon/Soon';
import { useEffect } from "react";

const CommingSoon = () => {
    
    useEffect(() => {
        document.title = 'وسيط كار - الاخبار قريبا';
      }, []);

    return (

        <>

            <Header_sec />
            <Soon />

        </>

    );

}

export default CommingSoon;