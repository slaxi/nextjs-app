const getPostAuthor = async (userId) => {
  return await fetch(`${process.env.USERS}/${userId}`, {cache: 'no-store'})
    .then((response) => {
      if (!response.ok) {
        throw new Error("Blog doesn 't have a user");
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

const User = async ({id}) => {
  const author = await getPostAuthor(id);
  return <div>{author?.name}</div>;
};

export default User;
