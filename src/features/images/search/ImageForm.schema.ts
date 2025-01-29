import * as Yup from "yup";

export const imageFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Field is required"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Field is required"),
  topic: Yup.string().required("Field is required"),
  customTopic: Yup.string().when("topic", {
    is: (val: string) => val === "other",
    then: (schema) =>
      schema
        .min(2, "Too Short!")
        .max(100, "Too Long!")
        .required("Field is required"),
  }),
});
