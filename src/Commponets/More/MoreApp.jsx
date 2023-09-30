import { useEffect,useState } from 'react';
import car from '../../images/caar.webp';
import header_car from '../../images/car-engineering.svg';
import MoreShemmer from "../../Commponets/Shemmers/MoreShrmer";
import CarMore from "../../Commponets/Shemmers/CarMore";

const MoreApp = () => {

    const [loading,setLoading] = useState(false);
    useEffect(() => {
     
        window.onload = () => {
            setLoading(true);
        } 
    
    },[]);

    return (

        <>

            <section className="more">

                <div className="container">

                    <article>
                        
                        {loading ? (
                            <CarMore />
                        ):(
                        <>
                            
                            <div className="line"></div>
                            <figure>
                                <img src={car} alt="car" />
                                <div></div>
                            </figure>
                        </>
                        )}

                        {loading ? (
                            <MoreShemmer />
                        ):(
                        <div className="content">
                            <img src={header_car} className="header_car position-absolute " alt="car"/>
                            <h2>وسيط كار</h2>
                            <p>
                            منصة وسيط كار هي تطبيق بيع وشراء 
                            السيارات الجديدة والمستعمل . تطبيق يقدم كل شئ من بيع وشراء السيارات والبحث عنها
                             مرورا بقطع الغيار وخدمات الصيانة المتعددة وصولا الى غسيل السيارات
                             تطبيق بيع وشراء السيارات الجديدة والمستعملة . تطبيق يقدم كل شئ من بيع وشراء السيارات والبحث 
                             عنها مرورا بقطع الغيار وخدمات الصيانة المتعددة وصولا الى غسيل السيارات
                            </p>
                            <a href="">
                                <span>حمل التطبيق الان</span>
                                <i class="fa-solid fa-download"></i>
                            </a>
                        </div>
                        )}
                    </article>

                </div>

            </section>

        </>

    );

}

export default MoreApp;