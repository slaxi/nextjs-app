import styles from "./Blog.module.css";
import Card from "@/components/card/Card";

const getPostsList = () => {
    return fetch(process.env.BASE_URL).then((response) => {
        if(!response.ok) {
            throw new Error("Something went wrong!")
        
        }
        return response.json()
    }).then(data => data.slice(0, 15))
    .catch((err) => console.error(err))
}

const Blog = async () => {
  const posts = await getPostsList()
  return (
    <div className={styles.blog}>
      {posts.map(post => <Card key={post.id} title={post.title} desc={post.body} id={post.id}/>)}
    </div>
  );
};

export default Blog;
