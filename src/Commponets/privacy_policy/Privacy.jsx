import { useEffect,useState } from "react";
import PrivaciOne from "../Shemmers/PrivaciOne";
import PrivaciTow from "../Shemmers/PrivaciTow";
import PrivaciThree from "../Shemmers/PrivaciThree";
import PrivaciFour from "../Shemmers/PrivaciFour";
import PrivaciFive from "../Shemmers/PrivaciFive";

const Privacy = () => {
    
    const [loading,setLoading] = useState(true);

    useEffect(() => {
     
            window.onload = () => {
                setLoading(false);
            } 
        
    },[]);

    return (

        <>

            <div className="container">

                {loading ?(
                    <PrivaciOne />
                ):(
                <div className="privacy shadow mt-3">

                    <h2>سياسية الخصوصية</h2>
                    <p>
                    تُدرك إدارة تطبيق وسيط كار حرصك على المعلومات التي نجمعها عنك وإهتمامك حيال كيفية إستخدامنا لها، ولكي تكون على بينة
                     وإدراك كامل، نضع بين يديك سياسة الخصوصية، ونحن بدورنا نقدر ثقتكم بنا والتي تضمن لكم التعامل مع معلوماتكم بعناية وثقة.
                      من خلال إستخدامك لتطبيق وسيط كار أنت تقبل الأمور الواردة في هذه البيان:
                    </p>

                </div>
                )}

                {loading ?(
                    <PrivaciTow />
                ):(
                <div className="privacy shadow">

                    <h2>ما هي المعلومات التي يتم جمعها من قبل تطبيق وسيط كار عنك؟</h2>
                    <p>
                    المعلومات التي نجمعها من مستخدمي تطبيق وسيط كار تساعدنا على أن نقدم لهم خدمة أفضل مبنية على الطبيعة الشخصية
                     للمستخدم للتحسين من طريقة تصفحك كمستخدم لتطبيق وسيط كار. التالية هي أنواع المعلومات التي نجمعها:
                    </p>
                    <ul>
                        <li>
                            المعلومات التي نجمعها عنك من خلال تسجيلك في التطبيق وهي (رقم الجوال، الاسم الكامل , المحافظة ) ومن خلال تسجيلك ستحصل على حساب أو عضوية في
                             التطبيق وهي مكونة من رقم جوال وكلمة سر تتيح لك استخدام التطبيق. 

                        </li>
                        <li>
                        المعلومات التي تقوم بتقديمها: نقوم بتخزين المعلومات المُدخلة على سرفراتنا بأكثر من وسيلة،
                         مثلاً عند تسجيلك في التطبيق أو عند إضافتك لمعلومات الإعلانات عند إضافة إعلان، يتم إستخدام رقم الجوال المستخدم للتسجيل كوسيلة ليسهل علينا الرد على طلباتكم و وإعلامكم بكل ما هو جديد على التطبيق . وتذكر أنّه كلما زادت صحة المعلومات المقدمة من قبلكم، زادت المزايا المقدمة للمستخدم.
                        </li>
                        <li>
                        المعلومات المطلوبة من قسم خدمة العملاء : قد تتواصل مع خدمة العملاء لطلب 
                        أو إستفسار أو مشكلة أو اي نوع آخر من الطلبات أو قد يتواصل معك خدمة العملاء لنفس الأغراض سابقة الذكر، وقد يترتب على هذا التواصل طلب معلومات معينة منك والتي تساهم في حل مشكلتك أو إستفسارك مثال لا الحصر: نوع جوالك، رقم هاتفك ، وغيرها الكثير. وكل هذه المعلومات تستخدم لغايات تحسين الخدمة. 
                        </li>
                    </ul>

                </div>
                )}

                {loading ?(
                    <PrivaciThree />
                ):(
                <div className="privacy shadow">

                    <h2>هل يشارك تطبيق وسيط كار المعلومات التي يتلقاها؟</h2>
                    <p>
                    المعلومات عن مستخدمي تطبيق وسيط كار هو جزء مهم من عملنا، ولن نسمح ببيع هذه المعلومات للآخرين.
                     ولكن فقط يتم تبادل معلومات مستخدمي تطبيق وسيط كار فقط كما هو موضح أدناه: 
                    </p>
                    <ul>
                        <li>
                        إضافة إعلان : عند إضافة إعلانك من خلال تطبيق وسيط كار فإنه يطلب منك أن تقدم لنا معلومات الاتصال الخاصة بك.
                         وذلك لتسهيل عملية التواصل بين الطرفين (صاحب الإعلان، والمهتم به)
                        </li>
                        <li>
                        عروض ترويجية : أحيانا نقوم بإرسال عروض لمجموعات مختارة من مستخدمي تطبيق وسيط كار حول آخر العروض التي نقدمها على التطبيق.
                        </li>
                    </ul>

                </div>
                )}

                {loading ? (
                    <PrivaciFour />
                ):(
                <div  className="privacy shadow">

                    <h2>شروط الاستخدام:</h2>
                    <p>
                    إذا اخترت إستخدام تطبيق وسيط كار فإن زيارتك وأي خلاف حول الخصوصية يخضع لسياسة الخصوصية ولأحكام وشروط الاستخدام ( اتفاقية المستخدم ). إذا كان لديك أية مخاوف حول الخصوصية في تطبيق وسيط كار يرجى الاتصال بنا وسنحاول حلها. 
                    تابعوا حساباتنا على تواصل الاجتماعي باستمرار لمعرفة كل ما هو جديد حول التغييرات الطارئة على كل من سياسة الخصوصية وأحكام وشروط الاستخدام. 
                    </p>

                </div>
                )}

                {loading ? (
                    <PrivaciFive />
                ):(
                <div className="privacy shadow priv">

                    <h2>
                        للتواصل : 
                    </h2>
                    <p>
                    في أي وقت يمكنك التواصل مع الإدارة على البريد الرسمي للشركة  <a  href="mailto:info@waseet-ye.com">info@waseet-ye.com</a>
                    </p>
                    <p>
                    الإسم التجاري: "مؤسسة وسيط "، اليمن – مأرب جوال رقم <a href="tel: +967 780 066 622">    622 066 780 967+</a>
                    </p>
                </div>
                )}

            </div>

        </>
        
    );

}

export default Privacy;