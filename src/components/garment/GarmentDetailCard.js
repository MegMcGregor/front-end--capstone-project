import React, { useState, useEffect } from "react"
import { getGarmentById } from "../../modules/GarmentManager"
import { useParams, useHistory } from "react-router-dom"
import "./GarmentDetailCard.css"

export const GarmentDetail = () => {
    const [garment, setGarment] = useState({ title: ""})
    const [isLoading, setIsLoading] = useState(true);
    const { garmentId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", garment)
        getGarmentById(garmentId)
        .then(garment => {
            setGarment({
                title: garment.title
            });
            setIsLoading(false);
        });
    }, [garmentId]);




    return (
        <div className="main-container">

            <div className="page-title-container">
                <h2>
                    garment details
                </h2>
            </div>

            <div className="detail-card-container">

                <div className="detail-card-header-border">
                    <div className="detail-container-top-left">
                        <span className="dot"></span>
                        <h2>{garment.title}</h2>
                    </div>
                    <div className="detail-container-top-right">
                        <img alt="clothing icon"></img>
                    </div>
                </div>


                <div className="detail-info-border">
                    <ul>
                         <li>{garment.type.type}</li>
                        {/* <li>{garment.occcasion}</li> */}
                        {/* <li>{garment.season}</li>
                        <li>{garment.condition}</li>
                        <li>{garment.composition}</li>  */}
                    </ul>
                </div>

                <div className="detail-footer-border">
                    <div className="detail-container-bottom-left">
                        <a href="/">back</a>
                    </div>
                    <div className="detail-container-bottom-right">
                         <a href="/">edit</a>
                         <a href="/">delete</a>
                    </div>
                </div>

            </div>
            
        </div>
    )
}