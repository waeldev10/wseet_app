import CardServes from './CardServes';
import car_show from '../../images/car-showroom.svg';
import car_serve from '../../images/car-engineering.svg';
import car_clean from '../../images/car-wash.svg';

const Serves = () => {

    return (

        <>

            <section id="serves" className="serves py-5 position-relative">
                    
                    <div className="to-section">

                    </div>

                    <a className="down position-absolute d-flex align-items-center justify-content-center" href="#serves">
                        <i className="fa-solid fa-angles-down"></i>
                    </a>

                    <div className="container ss">

                        <div className="title text-center mb-5">
                            <h2 className="position-relative mb-3 m-auto">اقسام المنصة</h2>
                            <p>اهم الاقسام منصة وسيط كار</p>
                        </div>
                
                        <article className="rows d-flex align-items-start justify-content-space-between mt-5">
   
                            <CardServes myImg={car_show} 
                                        Title="معارض السيارات"
                                        myText="في وسيط كار نعمل جاهدين لدعم نمو المعارض وتوفير فرص تسويق وتةاصل جديدة" 
                                        myId="id1"
                                        Content="
                                            
                                             . نجمع الزبائن في مكان واحد لتوفير فرص وصول أوسع للمشترين وزيادة الاهتمام بعروض المعارض
                                             . نهدف الى تحقيق منافسه قوية في سوق السيارات عن طريق توسيع رقعة المنافسة وطرق عرض غير متوفرة في المعارض
                                             . من خلال منصتنا , تصبح الاسعار والتقييمات بين المنافسن واضحة ونساهم في تعزيز موثوقية المعارض
                                             . نهدف ايضا إلى توفير خيارات دفع متنوعة لزيادة العائدات وتسهيل عملية البيع وضمان الحقوق .
                                        "
                            />
        
                                <CardServes myImg={car_serve} 
                                        Title="الصيانه وقطع الغيار"
                                        myText="   تقدم وسيط كار فرصا رائعة للمهندسين , حيث يمكنهم البحث عن زبائن وتقديم عروضهم" 
                                        myId="id2"
                                        Content="
                                         
                                             واستعراض خدماتهم.
                                             كما يمكن للمهندسين استعراض تقييماتهم من عملائهم السابقين مما يعزز مكانتهم وفرص عملهم ويزيد من وصولهم لزبائن أكثر
                                        "
                            />
                                <CardServes myImg={car_clean} 
                                        Title="غسيل السيارات"
                                        myText="توفير وسيط كار فرصا مميزة لمقدمي خدمات غسيل السيارات , حيث توفر لهم"
                                        myId="id3" 
                                        Content="
                                            
                                             عرض موقعهم على المنصة للبحث عن زبائن جدد وتقديم خدماتهم . كما يمكنهم التسويق لها واستعراض تقييمات العملاء
                                             السابقين , مما يعزز ثقة الزبائن بجودة خدماتهم ويزيد من فرص جذب زبائن جدد. بفضل وسيط كار 
                                            , يمكن لمقدمي خدمات غسيل السيارات تحسين وصولهم لعملاء جدد وتعزيز نجاح أعمالهم في هذا المجال.
                                        "
                            />
                
                        </article>

                    </div>
                    
            </section>

        </>

    );

}

export default Serves;