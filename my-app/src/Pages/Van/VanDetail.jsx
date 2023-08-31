import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";  // use in getting id
import { getVans } from "../../api";


// Van detailed view.....
export function loader ({params}) {
    return getVans(params.id)
}

export default function VanDetail(){
    const van = useLoaderData()
    // const params = useParams()  // for get vans/id
    // const [van, setVan] = React.useState([null])
    const location = useLocation() // for URL location definer

    // React.useEffect(() => {
    //         fetch(`/api/vans/${params.id}`)  // get the specific data with this id (from useParams)
    //         .then(res => res.json())  // convert it to understandable data
    //         .then(data => setVan(data.vans))
    //     },[params.id]) // the useEffect will rerun if the params.id changes 
        
   
    const search = location.state?.search || "";    // recieving the props{state URL history} from the vans.jsx 
    const type = location.state?.type || "all";

    return (
        <div className="van-detail-container">

            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>

            
                <div className="van-detail">
                    <img className="van--detail__img" src={van.imageUrl}  alt="van"/>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>

                </div>  
                
        </div>)
}