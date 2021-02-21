// create a post template here...
// this template should be used for
// pages under /pages/blog/ or maybe
// under just /pages ??? Not sure.
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Author from "../components/author";

export const query = graphql`
	query PostByID($id: String!) {
		mdx(id: { eq: $id }) {
			body
			frontmatter {
				title
				date(formatString: "YYYY MMMM Do")
			}
		}
	}
`;

const PostTemplate = ({ data }) => {
	const { frontmatter, body } = data.mdx;
	return (
		<Layout>
			<SEO title={`${frontmatter.title} | Blog`} />
			<section className="max-w-lg mx-auto">
				<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3">
					{frontmatter.title}
				</h1>
				<div className="mb-8 prose prose-sm sm:prose md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-light mx-auto">
					<p className="text-xl">{frontmatter.description}</p>
				</div>
			</section>
			<article className="prose prose-sm sm:prose md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-light mx-auto">
				<MDXRenderer>{body}</MDXRenderer>
				<Author data={frontmatter} />
			</article>
		</Layout>
	);
};

export default PostTemplate;
