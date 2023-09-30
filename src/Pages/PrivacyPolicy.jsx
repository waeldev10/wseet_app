import Header_sec from '../Commponets/Header_/Header_sec';
import Privacy from '../Commponets/privacy_policy/Privacy';
import { useEffect } from 'react';

const PrivacyPolicy = () => {

    useEffect(() => {
        document.title = 'وسيط كار - سياسية الخصوصية';
      }, []);

    return (

        <>

            <Header_sec />
            <Privacy />

        </>

    );

}

export default PrivacyPolicy;