"use client"
import { useState } from "react";
import { saveToDb } from "./saveUser";


const CreatePost = () => {

    const [formFields, setFormFields] = useState({
    title: "",
    description: "",
    userId: "",
    slug: "",
  });

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
    saveToDb(formFields)
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        value={formFields.title}
        onChange={handleChange}
        style={{ margin: "10px 0" }}
        placeholder="Title"
      />

      <input
        type="text"
        name="description"
        value={formFields.description}
        onChange={handleChange}
        style={{ margin: "10px 0" }}
        placeholder="Description"
      />

      <input
        type="text"
        name="userId"
        value={formFields.userId}
        onChange={handleChange}
        style={{ margin: "10px 0" }}
        placeholder="UserId"
      />

      <input
        type="text"
        name="slug"
        value={formFields.slug}
        onChange={handleChange}
        style={{ margin: "10px 0" }}
        placeholder="Slug"
      />

      <input type="submit" value="Submit" style={{ margin: "10px 0" }} />
    </form>
  );
};

export default CreatePost;
