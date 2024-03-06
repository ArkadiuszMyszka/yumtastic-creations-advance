import { useDispatch } from "react-redux";

import SelectOption from "./SelectOption.jsx";

import { Label, BoxSelector } from "./SearchTypeSelector.styled";

export const selectOption = (selectedOption) => {
  console.log("type selector selectOption");
  return {
    type: "search/setSearchFilter",
    payload: selectedOption,
  };
};

const SearchTypeSelector = () => {
  const dispatch = useDispatch();

  const handleOptionChange = (value) => {
    dispatch(selectOption(value));
    console.log("type selector handleOptionChange");
  };

  return (
    <>
      <BoxSelector>
        <Label> Search by:</Label>
        <SelectOption
          options={["Title", "Ingredient"]}
          onChange={handleOptionChange}
        />
      </BoxSelector>
    </>
  );
};

export default SearchTypeSelector;
