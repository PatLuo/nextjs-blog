import { createClient } from "next-sanity";

export const sanityClient = createClient({
	apiVersion: "2023-05-03",
	dataset: "production",
	projectId: "tb6tl7q5",
	useCdn: false,
});
