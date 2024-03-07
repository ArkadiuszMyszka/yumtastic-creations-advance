import { fetchIngredients } from "../../../redux/ingredients/ingredientsOperations.jsx";
import { selectIngredients } from "../../../redux/ingredients/ingredientsSelectors.jsx";
import { toast } from "react-hot-toast";
import units from "./data/units.json";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  AddBoxTitle,
  AddRecipeIngredientsContainer,
  Buttons,
  FlexContainer,
  IngredietsListSetting,
  Input,
  InputFieldsContainer,
  SelectCust,
  SelectUnit,
} from "./RecipeIngredientsFields.styled.jsx";
import Select from "react-select";

const IngredientsFields = ({
  getFilterData,
  setInitialList,
  gettingFilterData,
  mode,
}) => {
  const [serviceList, setServiceList] = useState([{}]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);
  useEffect(() => {
    if (setInitialList) {
      setServiceList([{}]);
    }
  }, [setInitialList]);
  useEffect(() => {
    if (gettingFilterData) {
      window.document.getElementById("sizeSelect").value = "";
      window.document.getElementById("serviceSelect").value = "";
      window.document.querySelector(".css-1dimb5e-singleValue").textContent =
        "Type ingredient";
    }
  }, [gettingFilterData]);

  const ingredientsList = useSelector(selectIngredients);

  const ingredients = ingredientsList.map((item) => ({
    label: item.ttl,
    value: item._id,
  }));
  const handleServiceAdd = () => {
    setServiceList([...serviceList, {}]);
  };

  const handleServiceRemove = (index) => {
    const list = serviceList.filter((_, idx) => idx !== index);
    setServiceList(list);
    getFilterData(list);
  };

  const handleIngredientChange = (value, index, key) => {
    if (serviceList.length > 1 && serviceList.find((el) => el.id === value)) {
      toast.error("You already have such an ingredient!", {
        duration: 3000,
        position: "top-center",
      });
      return handleServiceRemove(index);
    }
    const selectedIngredient = ingredientsList.find(
      (ingredient) => ingredient._id === value
    );
    const newService = serviceList.map((item, idx) => {
      if (index === idx) {
        if (selectedIngredient) {
          const { _id, thb, ttl } = selectedIngredient;
          item[key] = ttl;
          item.id = _id;
          item.thb = thb;
        } else {
          item[key] = value;
        }
      }
      return item;
    });
    getFilterData(newService);
  };

  return (
    <AddRecipeIngredientsContainer>
      <IngredietsListSetting>
        <AddBoxTitle mode={mode}>Ingredients</AddBoxTitle>
        {serviceList.length > 0 && (
          <Buttons>
            <button
              type="button"
              onClick={handleServiceRemove}
              disabled={serviceList.length < 2}
            >
              -
            </button>
            <p>{serviceList.length}</p>
            <button
              type="button"
              onClick={handleServiceAdd}
              disabled={serviceList.length > 9}
            >
              +
            </button>
          </Buttons>
        )}
      </IngredietsListSetting>

      <InputFieldsContainer>
        {serviceList.map((_, index) => (
          <FlexContainer key={index}>
            <SelectCust>
              <Select
                id="customSelect"
                required
                options={ingredients}
                maxMenuHeight={156}
                placeholder="Type ingredient"
                onChange={(e) => handleIngredientChange(e.value, index, "ttl")}
              />
            </SelectCust>
            <div>
              <Input
                id="sizeSelect"
                required
                type="text"
                maxLength={6}
                length={10}
                name="size"
                onChange={(e) =>
                  handleIngredientChange(e.target.value, index, "size")
                }
              />
              <SelectUnit
                id="serviceSelect"
                required
                name="service"
                onChange={(e) =>
                  handleIngredientChange(e.target.value, index, "service")
                }
              >
                {units.map(({ value }) => (
                  <option key={value}>{value}</option>
                ))}
              </SelectUnit>
            </div>

            {serviceList.length > 1 && (
              <button type="button" onClick={() => handleServiceRemove(index)}>
                <span>X</span>
              </button>
            )}
          </FlexContainer>
        ))}
      </InputFieldsContainer>
    </AddRecipeIngredientsContainer>
  );
};
export default IngredientsFields;
