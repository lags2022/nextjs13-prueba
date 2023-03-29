import Listofposts from "./Listofposts";
import { Suspense } from "react";

export default async function PostsPage() {
  return (
    <section>
      <Suspense fallback={<p>Cargandooooooooooooooo posts...</p>}>
        <Listofposts />
      </Suspense>
    </section>
  );
}
