



import React from 'react'

const ProdcutItem = ({productname, productimg, productprice, productid}) => {


  return (
    <div className="col-md-6">
                <div className="p-lg-5 p-4 ">
                    <div className="lc-block mb-4"><img alt="" className="img-fluid " src={productimg} />


                        <h4 className="my-3" editable="inline">{productname}</h4>
                       
                        

                        <a className="btn btn-outline-primary mt-4" href={`productdetail/${productid}`} role="button">More Info</a>
                     <div className="row">
                      <div className="col-md-4">

                          
      


                      </div>

                     </div>
                    </div>
                </div>
            </div>

            
  )
}

export default ProdcutItem

