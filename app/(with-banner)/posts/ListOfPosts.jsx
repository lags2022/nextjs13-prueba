import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPosts = () => {
  // SSG
  // return fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());

  // SSR
  // return fetch("https://jsonplaceholder.typicode.com/posts", {
  //   cache: "no-store",
  // }).then((response) => response.json());

  // ISR
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 10,
    },
  }).then((response) => response.json());
};

export default async function Listofposts() {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      {/* <Link href="/posts/[id]" as={`/posts/${post.id}`}> */}
      <Link href={`/posts/${post.id}`}>
        <h2 style={{ color: "green" }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
}
