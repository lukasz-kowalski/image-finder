"use client";

import { useContext } from "react";
import { useFormik } from "formik";

import { UserContext } from "@/features/user/context/UserContext";

import { getImage } from "./getImage";

const topics = [
  { label: "Travel", value: "travel" },
  { label: "Cars", value: "cars" },
  { label: "Wildlife", value: "wildlife" },
  { label: "Technology", value: "technology" },
  { label: "Other", value: "other" },
];

export const ImageForm = (): JSX.Element => {
  const userState = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      topic: "",
      customTopic: "",
    },
    onSubmit: async (values) => {
      const topic =
        values.topic === "other" ? values.customTopic : values.topic;

      const image = await getImage(topic);
      userState?.setUserData({
        name: values.name,
        surname: values.surname,
        img: image,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="surname">Surname</label>
      <input
        id="surname"
        name="surname"
        onChange={formik.handleChange}
        value={formik.values.surname}
      />

      <label htmlFor="topic">Topic</label>
      <select
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

      {formik.values.topic === "other" && (
        <>
          <label htmlFor="customTopic">Preferred topic</label>
          <input
            id="customTopic"
            name="customTopic"
            onChange={formik.handleChange}
            value={formik.values.customTopic}
          />
        </>
      )}

      <button type="submit">Search</button>

      {/* <button type="button" onClick={onCancel}>
      Reject
    </button>
    <button type="submit">Accept</button> */}
    </form>
  );
};
