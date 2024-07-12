import { BlogCard } from "./lib/interface";
import { sanityClient } from "./lib/sanityClient";

async function getData() {
	const query = `*[_type == 'blog'] |order(_created asc){
  title,
  description,
    "currentSlug": slug.current,
  }`;

	const data = await sanityClient.fetch(query);

	return data;
}
export default async function Home() {
	const data: BlogCard[] = await getData(); // runs on server so we can use async/await
	console.log("posts:", data);

	return (
		<div>
			<h1>My Blog</h1>
		</div>
	);
}
