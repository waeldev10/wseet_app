import Header_sec from '../Commponets/Header_/Header_sec';
import Error from '../Commponets/Error/Error';
import Footer from '../Commponets/Footer/Footer';
import { useEffect } from 'react';

const ErrorPage = () => {

    useEffect(() => {
        document.title = 'وسيط كار - الصفحة غير موجودة';
      }, []);

    return (

        <>

            <Header_sec />
            <Error />

        </>

    );
}

export default ErrorPage;