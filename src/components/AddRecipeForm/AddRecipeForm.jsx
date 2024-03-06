import { addRecipe } from '../../redux/recipes/recipesOperations.jsx';
import blank from '../../images/AddRecipePage/background-for-image-desktop@2x.jpg';
// import { Camera } from "../AddRecipeForm/AddRecipeForm.styled.jsx";
//import camera from "../../images/graphics/AddRecipePage/svg/photocamera.svg";
import cookingTime from '../../components/AddRecipeForm/data/cookingTime.json';
import { fetchCategoriesList } from '../../redux/recipes/recipesOperations.jsx';
import { selectCategories } from '../../redux/recipes/recipesSelectors.jsx';
import selectTheme from '../../redux/theme/themeSelectors.jsx';
import { selectUser } from '../../redux/auth/authSelectors.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from '../../dummy components/Container/Container.styled.jsx';
import FollowUs from '../FollowUs/FollowUs.jsx';
import IngredientsFields from '../AddRecipeForm/RecipeIngredientsFields/RecipeIngredientsFields.jsx';
import MainPageTitle from '../MainPageTitle/MainPageTitle.jsx';
import PopularRecipe from '../PopularRecipe/PopularRecipe.jsx';

import {
  AddRecipeBoxTitle,
  AddRecipeContainer,
  AddRecipeDescript,
  AddRecipeFollowPopular,
  AddWrap,
  Form,
  FormImage,
  ButtonAdd,
  Input,
  InputSelect,
  InputSelectTitle,
  SelectCategory,
  SelectCooking,
  TextArea,
  TextAreaContainer,
} from './AddRecipeForm.styled.jsx';

const getFormData = () => {
  const formValues = localStorage.getItem('form');
  if (!formValues)
    return {
      title: '',
      description: '',
      category: '',
      time: '',
      instructions: '',
      ingredients: [],
    };
  return JSON.parse(formValues);
};

const AddRecipeForm = () => {
  const [fileUploaded, setFileUploaded] = useState();
  const [gettingFilterData, setGettingFilterData] = useState(false);
  const [initialList, setInitialList] = useState(false);
  const [preview, setPreview] = useState(blank);
  const [recipes, setRecipes] = useState(getFormData);

  const theme = useSelector(selectTheme);

  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(recipes));
  }, [recipes]);

  const { _id } = useSelector(selectUser);

  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const getFilterData = arr => {
    setRecipes(values => ({
      ...values,
      ingredients: arr.map(({ id, ttl, thb, size, service }) => ({
        id,
        ttl,
        thb,
        measure: size + service,
      })),
    }));
  };

  const handleChangePhoto = event => {
    const fileUpl = event.target.files[0];
    setFileUploaded(fileUpl);
    const objectUrl = window.URL.createObjectURL(fileUpl);
    setPreview(objectUrl);
  };
  const handleChange = event => {
    setGettingFilterData(false);
    setInitialList(false);
    const name = event.target.name;
    const value = event.target.value;
    setRecipes(values => ({ ...values, [name]: value }));
  };

  const resetForm = () => {
    setRecipes('');
    setPreview(blank);
    setInitialList(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setGettingFilterData(true);
    const formData = new FormData();
    if (fileUploaded !== undefined) {
      formData.append('preview', fileUploaded);
    }
    const ingredientsToJson = JSON.stringify(recipes.ingredients);
    Object.keys(recipes).map(key =>
      key === 'ingredients'
        ? formData.append(key, ingredientsToJson)
        : formData.append(key, recipes[key]),
    );
    dispatch(addRecipe({ formData, _id }));
    resetForm();
  };

  return (
    <AddRecipeContainer>
      <Container>
        <MainPageTitle />
        <AddWrap>
          <Form autoComplete="off" onSubmit={handleSubmit} id="resipeForm">
            <FormImage>
              <div>
                <label htmlFor="file-input">
                  <img
                    src={preview}
                    alt="Add recipe img"
                    style={{
                      maxWidth: '350px',
                      maxHeight: '340px',
                    }}
                  />
                  {/* <Camera width="100px" height="100px">
                    <use href={`${camera}#icon-input_camera`}></use>
                  </Camera> */}
                </label>

                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleChangePhoto}
                  style={{
                    display: 'none',
                    width: '350px',
                    height: '340px',
                  }}
                />
              </div>
              <AddRecipeDescript>
                <Input
                  type="text"
                  name="title"
                  value={recipes.title || ''}
                  placeholder="Enter item title"
                  onChange={handleChange}
                  mode={theme}
                />
                <Input
                  type="text"
                  placeholder="Enter about recipe"
                  name="description"
                  onChange={handleChange}
                  value={recipes.description || ''}
                  mode={theme}
                />
                <InputSelect mode={theme}>
                  <InputSelectTitle mode={theme}>Category</InputSelectTitle>
                  <SelectCategory
                    name="category"
                    onChange={handleChange}
                    value={recipes.category || ''}
                  >
                    {categories.map(category => (
                      <option key={category}>{category}</option>
                    ))}
                  </SelectCategory>
                </InputSelect>

                <InputSelect mode={theme}>
                  <InputSelectTitle mode={theme}>Cooking time</InputSelectTitle>
                  <SelectCooking
                    name="time"
                    value={recipes.time || ''}
                    onChange={handleChange}
                  >
                    {cookingTime.map(({ value }) => {
                      return <option key={value}>{value}</option>;
                    })}
                  </SelectCooking>
                </InputSelect>
              </AddRecipeDescript>
            </FormImage>

            <IngredientsFields
              getFilterData={getFilterData}
              setInitialList={initialList}
              gettingFilterData={gettingFilterData}
              recipes={recipes}
              mode={theme}
            />

            <TextAreaContainer>
              <AddRecipeBoxTitle mode={theme}>
                Recipe Preparation
              </AddRecipeBoxTitle>
              <TextArea
                name="instructions"
                value={recipes.instructions || ''}
                placeholder="Enter recipe"
                scroll={true}
                onChange={handleChange}
                mode={theme}
              ></TextArea>
            </TextAreaContainer>
            <ButtonAdd type="submit" mode={theme}>
              Add
            </ButtonAdd>
          </Form>
          <AddRecipeFollowPopular>
            <FollowUs mode={theme} />
            <PopularRecipe mode={theme} />
          </AddRecipeFollowPopular>
        </AddWrap>
      </Container>
    </AddRecipeContainer>
  );
};

export default AddRecipeForm;
