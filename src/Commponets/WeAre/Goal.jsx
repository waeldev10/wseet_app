import goal from '../../images/aim.svg';

const Goal = () => {

    return (

        <>

            <section className="msg">

                <div className="container">
                    
                    <article>
                        <div className="img">
                            <img className='shadow' src={goal} alt="" />
                        </div>
                        <div className="content">

                            <div>
                            </div>

                            <aside>
                                <h2>أهدافنا</h2>
                                <p>
                                    من اهمها تحقيق التميز في توفير خدماتنا وجعلها شاملة في كل ما يتعلق بمجال السيارات وأن تصبح الأولى والأكثر موثيقية في اليمن
                                </p>
                            </aside>
                            
                        </div>

                    </article>

                </div>

            </section>

        </>

    );

}

export default Goal;