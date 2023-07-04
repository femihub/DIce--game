import React from "react";
import { useParams } from "react-router-dom";  // use in getting id


// Van detailed view.....

export default function VanDetail(){
    const params = useParams()
    const [van, setVan] = React.useState([null])

    React.useEffect(() => {
            fetch(`/api/vans/${params.id}`)  // get the specific data with this id (from useParams)
            .then(res => res.json())  // convert it to understandable data
            .then(data => setVan(data.vans))
        },[params.id]) // the useEffect will rerun if the params.id changes 
        

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img className="van--detail__img" src={van.imageUrl}  alt="van"/>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>

                </div> ) 
                : <h2>loading...</h2>}
        </div>)
}