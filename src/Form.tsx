import { useFormik } from "formik";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Button,
  Select,
  Heading,
  VStack,
} from "@chakra-ui/react";
import "./states/FormStates";

function Form() {
  const [camp, setCamp] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const handleDayChange = (e: any) => {
    const limit = 2;
    setDay(e.target.value.slice(0, limit));
  };
  const handleMonthChange = (e: any) => {
    const limit = 2;
    setMonth(e.target.value.slice(0, limit));
  };

  const handleYearChange = (e: any) => {
    const limit = 4;
    setYear(e.target.value.slice(0, limit));
  };

  const campColors = {
    chb: "#ed8936",
    spqr: "#805ad5",
    background: "linear(to-r, purple.400, orange.300)",
  };

  const colorChanger = (camp: any) => {
    if (formik.values.camp === "CHB") {
      return "#F6AD55";
    } else if (formik.values.camp === "SPQR") {
      return "#9F7AEA";
    } else if (formik.values.camp === "SPQR/CHB") {
      return "blue.200";
    }
  };

  const changeCamp = (e: any) => {
    setCamp(e.target.value);
    console.log(camp);
  };

//   const getData = (e: any) => {
//     e.preventDefault();

//     let data = e.target;
//     let demigod = {
//       firstName: data.firstName.value,
//       lastName: data.lastName.value,
//       godlyParent: data.godlyParent.value,
//       mortalParent: data.mortalParent.value,
//       weapon: data.weapon.value,
//       camp: data.camp.value,
//       day: data.day.value,
//       month: data.month.value,
//       year: data.year.value,
//     };
//     console.log(demigod);
//   };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      godlyParent: "",
      mortalParent: "",
      weapon: "",
      camp: "",
      day: "",
      month: "",
      year: "",
    },
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });
  return (
    <VStack className="Form">
      <form onSubmit={formik.handleSubmit}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem
          colSpan={2}
        >
          <Heading>Olympians API submitter</Heading>
        </GridItem>
        <GridItem
          colSpan={[2, null, 1]}
        >
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder="First Name"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={[2, null, 1]}>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              onChange={formik.handleChange}
              value={formik.values.lastName}
              name="lastName"
              placeholder="Last Name"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={[2, null, 1]}>
          <FormControl isRequired>
            <FormLabel>Godly Parent</FormLabel>
            <Input
              onChange={formik.handleChange}
              value={formik.values.godlyParent}
              name="godlyParent"
              placeholder="Godly Parent"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={[2, null, 1]}>
          <FormControl isRequired>
            <FormLabel>Mortal Parent</FormLabel>
            <Input
              onChange={formik.handleChange}
              value={formik.values.mortalParent}
              name="mortalParent"
              placeholder="Mortal Parent"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={[2, null, 1]}>
          <FormControl isRequired>
            <FormLabel>Weapon</FormLabel>
            <Input
              onChange={formik.handleChange}
              value={formik.values.weapon}
              name="weapon"
              placeholder="Weapon"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={[2, null, 1]}>
          <FormControl isRequired>
            <FormLabel>Camp</FormLabel>
            <Select
              onChange={formik.handleChange}
              value={formik.values.camp}
              name="camp"
              placeholder="Select Camp"
              bg={
                formik.values.camp === "CHB"
                  ? "orange.400"
                  : formik.values.camp === "SPQR"
                  ? "purple.500"
                  : formik.values.camp === "SPQR/CHB"
                  ? "blue.300"
                  : "none"
              }
              _hover={{
                backgroundColor: colorChanger(camp),
                cursor: "pointer",
              }}
            >
              <option value="CHB">Camp Half-Blood(Greek)</option>
              <option value="SPQR">SPQR(Roman)</option>
              <option value="SPQR/CHB">Both(SPQR/CHB)</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Birth Date</FormLabel>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              <GridItem colSpan={1}>
                <FormControl isRequired>
                  <FormLabel>Day</FormLabel>
                  <Input
                    name="day"
                    onChange={formik.handleChange}
                    value={formik.values.day}
                    type="number"
                    placeholder="Day"
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl isRequired>
                  <FormLabel>Month</FormLabel>
                  <Input
                    name="month"
                    onChange={formik.handleChange}
                    value={formik.values.month}
                    type="number"
                    placeholder="Month"
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl isRequired>
                  <FormLabel>Year</FormLabel>
                  <Input
                    name="year"
                    onChange={formik.handleChange}
                    value={formik.values.year}
                    type="number"
                    placeholder="Year"
                  />
                </FormControl>
              </GridItem>
            </Grid>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            type="submit"
            colorScheme="purple"
          >
            Submit
          </Button>
        </GridItem>
      </Grid>
      </form>
    </VStack>
  );
}

export default Form;
