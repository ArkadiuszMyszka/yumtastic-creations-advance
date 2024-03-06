import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSearchFilter } from "../../../redux/search/searchSelectors.js";

import { MdArrowDropDown } from "react-icons/md";

import {
  PositionWrapper,
  StyledFormControl,
  StyledSelect,
  StyledMenuItem,
  OptionWrapper,
} from "./SelectOption.styled";

const SelectOption = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const chosenOption = useSelector(selectSearchFilter);

  useEffect(() => {
    if (chosenOption !== "") {
      setSelectedOption(chosenOption);
    }
  }, [chosenOption]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
      console.log("selectOption handleSelect");
    }
  };

  return (
    <PositionWrapper>
      <StyledFormControl onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <MdArrowDropDown />
      </StyledFormControl>
      {isOpen && (
        <OptionWrapper>
          <StyledSelect>
            {options.map((option) => (
              <StyledMenuItem key={option} onClick={() => handleSelect(option)}>
                {option}
              </StyledMenuItem>
            ))}
          </StyledSelect>
        </OptionWrapper>
      )}
    </PositionWrapper>
  );
};

export default SelectOption;
