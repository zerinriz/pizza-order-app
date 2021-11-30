import React, { useState, useEffect } from "react";
import { listIngredients } from "./../order/api-order";
import IngredientsList from "./IngredientsList";
import * as actions from "./../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

function Ingredients() {
  const [listOfIngredients, setListOfIngredients] = useState([]);
  const dough = useSelector((state) => state.dough);
  const ingredients = useSelector((state) => state.ingredients);
  const sumOfPrices = useSelector((state) => state.price);
  const dispatch = useDispatch();

  useEffect(() => {
    listIngredients().then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setListOfIngredients(data);
      }
    });
  }, []);

  const onClick = () => {
    var orderID = Math.floor(1000 + Math.random() * 9000);
    dispatch(actions.addOrder(dough, ingredients, sumOfPrices, orderID));
  };

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
                        gluten={item.gluten_free}
                        name={item.name}
                        key={item._id}
                        id={item._id}
                        price={item.price}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div data-toggle="modal" data-target="#ingredientsModal">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onClick}
                >
                  +Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
