import Image from "next/image";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // //aqui estamos forzando un error
  // throw new Error("Error al cargar los comentarios");

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((response) => response.json());
};

export default async function Post({ params }) {
  const { id } = params;
  const commments = await fetchComments(id);

  return (
    <ul style={{ maxWidth: "500px", margin: "auto" }}>
      {commments.map((comment) => (
        <li key={comment.id}>
          <Image
            src={`https://i.pravatar.cc/150?u=${comment.email}`}
            alt={comment.name}
            width="50"
            height="50"
          />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
