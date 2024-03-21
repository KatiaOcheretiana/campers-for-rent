import { Field, Form, Formik } from "formik";
import sprite from "../../assets/sprite.svg";
import {
  Button,
  FilterTitle,
  Group,
  GroupTitle,
  Input,
  Label,
  Span,
  SvgIcon,
  SvgIconCampers,
} from "./Filters.styled";
import { useDispatch } from "react-redux";
import { changeEquipment, changeType } from "../../redux/filter/filterSlice";

export const Filters = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(changeEquipment(values.equipment));
    dispatch(changeType(values.type));
  };

  return (
    <>
      <FilterTitle>Filters</FilterTitle>

      <Formik
        initialValues={{
          equipment: [],
          type: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <GroupTitle id="checkbox-group-equipment">
            Vehicle equipment
          </GroupTitle>
          <Group role="group" aria-labelledby="checkbox-group-equipment">
            <Label>
              <Input type="checkbox" name="equipment" value="airConditioner" />
              <Span>
                <SvgIcon style={{ fill: "#101828" }}>
                  <use href={sprite + "#icon-ac"} />
                </SvgIcon>
                AC
              </Span>
            </Label>
            <Label>
              <Input type="checkbox" name="equipment" value="automatic" />
              <Span>
                <SvgIcon>
                  <use href={sprite + "#icon-automatic"} />
                </SvgIcon>
                Automatic
              </Span>
            </Label>

            <Label>
              <Input type="checkbox" name="equipment" value="kitchen" />
              <Span>
                <SvgIcon>
                  <use href={sprite + "#icon-kitchen"} />
                </SvgIcon>
                Kitchen
              </Span>
            </Label>
            <Label>
              <Input type="checkbox" name="equipment" value="TV" />
              <Span>
                <SvgIcon>
                  <use href={sprite + "#icon-tv"} />
                </SvgIcon>
                TV
              </Span>
            </Label>
            <Label>
              <Input type="checkbox" name="equipment" value="shower" />
              <Span>
                <SvgIcon>
                  <use href={sprite + "#icon-shower"} />
                </SvgIcon>
                Shower/WC
              </Span>
            </Label>
          </Group>

          <GroupTitle id="checkbox-group-type" style={{ marginTop: "30px" }}>
            Vehicle type
          </GroupTitle>
          <Group role="group" aria-labelledby="checkbox-group-type">
            <Label>
              <Input type="radio" name="type" value="panelTruck" />
              <Span>
                <SvgIconCampers>
                  <use href={sprite + "#icon-van"} />
                </SvgIconCampers>
                Van
              </Span>
            </Label>
            <Label>
              <Input type="radio" name="type" value="fullyIntegrated" />
              <Span>
                <SvgIconCampers>
                  <use href={sprite + "#icon-fully-integrated"} />
                </SvgIconCampers>
                Fully Integrated
              </Span>
            </Label>

            <Label>
              <Input type="radio" name="type" value="alcove" />
              <Span>
                <SvgIconCampers>
                  <use href={sprite + "#icon-alcove"} />
                </SvgIconCampers>
                Alcove
              </Span>
            </Label>
          </Group>

          <Button type="submit">Search</Button>
        </Form>
      </Formik>
    </>
  );
};
