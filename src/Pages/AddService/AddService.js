import React from "react";
import "./AddService.css";
import { useForm } from "react-hook-form";
import axios from "axios";
const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://immense-coast-96318.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  console.log(watch("example"));

  return (
    <div className="add-service">
      <h2>Please Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: true,
            maxLength: 20,
          })}
          placeholder="Name"
        />
        {errors?.name?.type === "required" && <p>This field is required</p>}
        {errors?.name?.type === "maxLength" && (
          <p>Name cannot exceed 20 characters</p>
        )}

        <textarea {...register("description")} placeholder="Description" />

        <input type="number" {...register("price")} placeholder="Price" />

        <input
          {...register("img", { required: true })}
          placeholder="Image url"
        />
        {errors?.img?.type === "url" && <p>Please Insert an image url</p>}
        {errors?.name?.type === "required" && (
          <p>Required ! Please insert an image url. Be careful!</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
