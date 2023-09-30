
import { Link } from "react-router-dom";

const Footer = () => {

    return (

        <>

            <footer id="footer" className="">

                <div className="container">

                    <div className="container row position-relative">

                            <div className="col-lg-4">
                                
                                <h4 className="m-1">تابعنا على مواقع التواصل</h4>
                                <nav className="link mx-1 my-3">
                                    <a href="">فيسبوك</a>
                                    <a href="">واتساب</a>
                                    <a href="">الهاتف</a>
                                </nav>
                                <nav className="icon mx-1 my-3">
                                    <a href="" className="d-inline-flex justify-content-center align-items-center rounded-2 "><i className="fa-brands fa-facebook"></i></a>
                                    <a href="" className="d-inline-flex justify-content-center align-items-center rounded-2 "><i className="fa-brands fa-whatsapp"></i></a>
                                    <a href="" className="d-inline-flex justify-content-center align-items-center rounded-2 "><i className="fa-solid fa-phone"></i></a>
                                </nav>
                            </div>

                            <div className="col-lg-3">
                                <h4 className="m-1">اقسام منصة وسيط كار</h4>
                                <ul className="m-1">
                                    <li>معارض السيارات</li>
                                    <li>الصيانه وقطع الغيار</li>
                                    <li>غسيل السيارات</li>
                                </ul>
                            </div>

                            <div className="col-lg-2">
                                <Link to={'/'}>
                                    <h4 className="m-1">الرئيسية</h4>
                                </Link>
                                
                                <ul className="m-1">
                                   
                                
                                    <li>
                                        <Link to={'/we_are'}>
                                            <a href="">من نحن</a>
                                        </Link>
                                    </li>
                                   
                                    <li>
                                        <Link to={'/more'}>
                                            <a href="">عن التطبيق</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/news'}>
                                            <a href="">الاخبار</a>
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-lg-3">
                                
                                <h4 className="m-1 mb-5">البريد الالكتروني</h4>
                                <a className="m-1 my-3 email" href="">
                                    <span className="rounded-2">wsset@gmail.com</span>
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                            </div>       

                    </div>

                    <div className="copy text-center">
                        <p>تم التطوير بواسطة 
                            <a href="">
                             <svg width="26" height="26" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.1136 0.458313L21.2191 25.2949L29.1081 17.9074L36.8628 25.1691L34.0239 25.1644V32.4816C34.0239 32.7701 34.1168 33.0518 34.2903 33.2901C34.4638 33.5285 34.7099 33.7123 34.9966 33.8178C35.2832 33.9232 35.5972 33.9453 35.8975 33.8813C36.1978 33.8172 36.4705 33.6699 36.6802 33.4586L50 20.0191L29.1136 0.458313Z" fill="#3CB29D"/>
                                <path d="M45.4406 49.952H45.4366L36.104 41.2847L19.7833 25.92L18.643 24.8474L26.5264 0L0 24.838H0.00352287L15.7271 39.6096L26.7845 50H45.4959L45.4406 49.952Z" fill="#0D2A3C"/>
                                </svg>
                            </a>
                       
                            انمار سوفت 2023</p>
                    </div>
                </div>

            </footer>

        </>

    );

}

export default Footer;