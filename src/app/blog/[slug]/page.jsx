import Image from "next/image";
import styles from "./SingleBlog.module.css";
import User from "@/components/user/User";
import { Suspense } from "react";

const getSinglePost = async (id) => {
  return await fetch(`${process.env.BASE_URL}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Blog with the given id not found!");
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

const SingleBlog = async ({ params }) => {
  const blog = await getSinglePost(params.slug);

  return (
    <div className={styles.card}>
      <h2>{blog?.title}</h2>
      <div className={styles.imgWrapper}>
        <Image
          src={
            "https://media.istockphoto.com/id/491523503/photo/belgrade.jpg?s=612x612&w=0&k=20&c=3-r7kKJW6eExPkz5--0_O3sRXRG3-4NDpdOk50o-8oY="
          }
          alt="home image"
          fill
        />
      </div>
      <p>{blog?.body}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <h4>
          Author: <User id={1} />
        </h4>
      </Suspense>
    </div>
  );
};

export default SingleBlog;

const Schema = new mongoose.Schema({})

const Course = mongoose.model('Course', Schema)

const course = new Course({})
