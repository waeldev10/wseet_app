
import { useState,useEffect } from "react";
import CardShemmer from "../Shemmers/CardShemmer";

const CardServes = ({Title,myText,myImg,Content,myId}) =>{

    const [loading,setLoading] = useState(false);

    useEffect(() => {
     
        window.onload = () => {
            setLoading(true);
        } 
    
    },[]);

    return (

        <>
            {loading ? (
                <CardShemmer />
            ):(

                <div className="colom m-auto my-1 p-3  rounded-3 position-relative">

                    <div className="capital"></div><div className="small"></div>

                    <img src={myImg} className="my-3" alt="servis" />
                
                    <h2>
                        {Title}
                    </h2>

                    <p className="w-75">   
                        {myText}
                    </p>

                    <div id={myId} class="collapse hide my-3" >
                        <div>
                            {Content}
                        </div>
                    </div>
                    <a  id="more" 
                    //  onClick={(e) =>{e.target.style.position = "absolute";
                    //                                 e.target.style.bottom = "15px";
                    //                                 e.target.style.right = "15px";
                    //                                 
                                                    
                    //                                 }}
                        data-bs-toggle="collapse"
                        href={`#`+myId} 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls={myId} >
                        <span className="m">اكثر</span>
                        <span className="n">اقل</span>
                    </a>

                </div> 

          )}

        </>

    );
}

export default CardServes;