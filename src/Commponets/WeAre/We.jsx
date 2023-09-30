import we from '../../images/ask-for-help.svg';
import header_car from '../../images/ask-for-help.svg';

const We = () => {

    return (

        <>
                
            <section className="we">

                <div className="container">

                    <article className="row">
                        
                        <div className="col-lg-6 ">
                            <img src={header_car} className="header_car position-absolute" alt="car"/>
                            <div className="content">
                                <h2>من نحن</h2>
                                <p>
                                منصة إلكترونية تجد فيها كل مايخص سيارتك يل وسيارتك! ونسعى لتقديم تجربة مميزة وشاملة ومرضية لكل العملاء
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <div className="we_are">
                                <div className="border"></div>
                                <dir className="box"></dir>
                                <img src={we} className='shadow' alt="" />
                            </div>
                        </div>

                    </article>

                </div>

            </section>

        </>

    );

}

export default We;