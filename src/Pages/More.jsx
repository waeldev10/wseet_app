import Header_sec from "../Commponets/Header_/Header_sec";
import MoreApp from "../Commponets/More/MoreApp";
import { useEffect } from "react";

const More = () => {

    useEffect(() => {
        document.title = 'وسيط كار - عن التطبيق';
      }, []);

    return (

        <>

            <Header_sec />
            <MoreApp />   
             
        </>

    );

}

export default More;