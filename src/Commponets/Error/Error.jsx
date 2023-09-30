
import { Link } from 'react-router-dom';
import error from '../../images/error-404.png';

const Error = () => {

    return (

        <>
            
            <div className="container">

                <div dir='ltr' className="row error">

                    <div className="col-lg-6 d-flex align-items-center justify-content-center">

                        <div className="content p-3">

                            <h2>أوووبس</h2>
                            <p>
                                الصفحة غير متوفرة قد يكون هناك خطاء في المسار تأكد جيدا من المسار اللذي تود الوصول اليه
                            </p>
                            <Link to={'/'}>
                                <a href="">
                                    العودة الى الرئيسية
                                </a>
                            </Link>
                        

                        </div>
                        
                    </div>

                    <div className="col-lg-6 d-flex align-items-center justify-content-center">

                        <img src={error} alt="" />
                    </div>

                </div>

            </div>
 
        </>

    );

}

export default Error;