"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";

import { UserContext } from "@/features/user/context/UserContext";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/button/Button";
import { Select } from "@/components/select/Select";

import { imageFormSchema } from "./ImageForm.schema";

const topics = [
  { label: "Travel", value: "travel" },
  { label: "Cars", value: "cars" },
  { label: "Wildlife", value: "wildlife" },
  { label: "Technology", value: "technology" },
  { label: "Other", value: "other" },
];

interface FormFields {
  name: string;
  surname: string;
  topic: string;
  customTopic: string;
}

export const ImageForm = (): JSX.Element => {
  const router = useRouter();
  const userState = useContext(UserContext);

  const formik = useFormik<FormFields>({
    initialValues: {
      name: "",
      surname: "",
      topic: "",
      customTopic: "",
    },
    validationSchema: imageFormSchema,
    onSubmit: async (values) => {
      if (formik.isValid) {
        userState?.setUserData({
          name: values.name,
          surname: values.surname,
          topic: values.topic === "other" ? values.customTopic : values.topic,
          selectedImg: null,
        });
        router.push("/image-select");
      }
    },
  });

  return (
    <form
      className="p-4 grid grid-cols-2 gap-4 border shadow-sm shadow-gray-300"
      onSubmit={formik.handleSubmit}
    >
      <Input
        id="name"
        name="name"
        value={formik.values.name}
        label="Name"
        error={formik.touched.name ? formik.errors.name : undefined}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Input
        id="surname"
        name="surname"
        value={formik.values.surname}
        label="Surname"
        error={formik.touched.surname ? formik.errors.surname : undefined}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Select
        id="topic"
        name="topic"
        value={formik.values.topic}
        label="Preferred topic"
        error={formik.touched.topic ? formik.errors.topic : undefined}
        options={topics}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.values.topic === "other" ? (
        <Input
          id="customTopic"
          name="customTopic"
          value={formik.values.customTopic}
          label="Please specify topic"
          error={
            formik.touched.customTopic ? formik.errors.customTopic : undefined
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      ) : (
        <div />
      )}

      <Button type="submit" disabled={!formik.dirty}>
        Search image
      </Button>
    </form>
  );
};
