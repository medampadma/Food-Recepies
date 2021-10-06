import React from 'react'


export default function Product({data}) {
    return (
        <div>
            <div className="row">
            {
                data.map(data=><div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={data.recipe.image} style={{"width":"18rem"}} alt="card img cap" />
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">{data.recipe.label}</h5>
                        <p className="card-text">Total amount of calories:{Math.round(data.recipe.calories)}</p>
                        <a href="#" className="btn btn-primary">Buy</a>
                        </center>
                        </div>
                    </div>
                </div>)}

            </div>
            
                
        </div>
    )
}
