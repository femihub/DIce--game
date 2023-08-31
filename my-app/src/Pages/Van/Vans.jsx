import React, { Suspense } from "react";
import { 
    Link,
    useSearchParams, 
    useLoaderData, 
    defer, 
    Await
 } from "react-router-dom";
import { getVans } from "../../api";




// All vans view...
export function loader () {

    return  defer({ vans: getVans() })
         
}

export default function Vans(){
    const [searchParams, setSearchParams] = useSearchParams()
    // const [vans, setVans] = React.useState([])
    // const [loading, setLoading] = React.useState(false)
    // const [error, setError] = React.useState(null)
    
    const typeFilter = searchParams.get("type")
    const dataPromise = useLoaderData()
    
    // React.useEffect(() => {
    //     async function loadVans () {
    //         setLoading(true)
    //         try {
    //             const data = await getVans()
    //             setVans(data) 
    //         } catch (err) {
    //             setError(err)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     loadVans()
    // }, [])

    
      function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            }
            else {
                prevParams.set(key, value)
            }
            return prevParams
        })
       }

    //    if (loading) {
    //         return <h1>loading....</h1>
    //    }

    //    if (error) {
    //     return <h1>There was an error: {error.message}</h1>
    //    }


       function renderVanElement(vans) {

            const filteredVan = typeFilter 
                    ? vans.filter(van => van.type === typeFilter)
                    : vans
            
                // {props}state is like URL history....
            const vanElements = filteredVan.map(van => (
                <div key={van.id} className="van-tile">
                    <Link 
                        to={van.id} 
                        state={{
                            search: `?${searchParams.toString()} `,
                            type: typeFilter}}
                    > 
                        <img src={van.imageUrl} alt="van"/> 
                        <div className="van-info">
                            <h3>{van.name}</h3>
                            <p>${van.price}<span>/day</span></p>
                        </div>
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    </Link>  
                </div>  
            
            ))
                            
        return (
            <>              
            <div className="van-list-filter-button">
                <button 
                    onClick={() => handleFilterChange("type", "simple")} 
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >
                Simple
                </button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`van-type simple ${typeFilter === "luxury" ? "selected" : ""}`}
                >   
                Luxury
                </button>
                <button 
                    onClick={() => handleFilterChange("type", "rugged")} 
                    className={`van-type simple ${typeFilter === "rugged" ? "selected" : ""}`}
                >
                Rugged
                </button>
            
                { typeFilter ? 
                    (<button 
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >
                    Clear filter
                    </button>) : null } 
                </div>
                <div className="van-list">
                {vanElements}
                </div>
            </>
        )
        }
       
     
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <Suspense fallback={<h2>Loading vans....</h2>}>
                <Await resolve={dataPromise.vans}>

                    {renderVanElement}
                    
                </Await>
            </Suspense>
        </div>
    )
};