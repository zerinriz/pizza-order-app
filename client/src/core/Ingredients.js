import React, { useState, useEffect } from "react";
import { listIngredients } from "./../order/api-order";
import IngredientsList from "./IngredientsList";


function Ingredients() {
  const [listOfIngredients, setListOfIngredients] = useState([]);
  useEffect(() => {
    listIngredients().then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setListOfIngredients(data);
        console.log(data);
      }
    });
  }, []);

  return (
    <div
      className="modal fade"
      id="ingredientsModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="container">
              <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div className="col">
                  <div className="p-3 ">
                    {listOfIngredients.map((item) => (
                      <IngredientsList
                        name={item.name}
                        key={item._id}
                        id={item._id}
                      />
                    ))}
                  </div>
                </div>
                <div className="col">
                  <div className="p-3 ">Row column</div>
                </div>
          
              </div>
            </div>
            <div class="modal-footer">
                  <button type="button" class="btn btn-primary">
                    +Add to cart
                  </button>
                </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Ingredients;
