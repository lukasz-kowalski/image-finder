"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";

import { UserContext } from "@/features/user/context/UserContext";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/button/Button";

const topics = [
  { label: "Travel", value: "travel" },
  { label: "Cars", value: "cars" },
  { label: "Wildlife", value: "wildlife" },
  { label: "Technology", value: "technology" },
  { label: "Other", value: "other" },
];

export const ImageForm = (): JSX.Element => {
  const router = useRouter();
  const userState = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      topic: "",
      customTopic: "",
    },
    onSubmit: async (values) => {
      userState?.setUserData({
        name: values.name,
        surname: values.surname,
        topic: values.topic === "other" ? values.customTopic : values.topic,
      });
      router.push("/image-select");
    },
  });

  return (
    <form
      className="p-4 grid grid-cols-2 gap-4 border shadow-sm shadow-gray-300"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col">
        <Input
          id="name"
          name="name"
          value={formik.values.name}
          label="Name"
          onChange={formik.handleChange}
        />
      </div>

      <div className="flex flex-col">
        <Input
          id="surname"
          name="surname"
          value={formik.values.surname}
          label="Surname"
          onChange={formik.handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="topic">Preferred topic</label>
        <select
          className="p-1 border-2 rounded-md"
          name="topic"
          id="topic"
          onChange={formik.handleChange}
          value={formik.values.topic}
        >
          <option value="">--Please choose an option--</option>
          {topics.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        {formik.values.topic === "other" && (
          <Input
            id="customTopic"
            name="customTopic"
            value={formik.values.customTopic}
            label="Please specify topic"
            onChange={formik.handleChange}
          />
        )}
      </div>

      <Button type="submit">Search image</Button>
    </form>
  );
};
