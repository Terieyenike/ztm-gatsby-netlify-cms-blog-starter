import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
	query PageByID($id: String!) {
		mdx(id: { eq: $id }) {
			body
			frontmatter {
				title
				date(formatString: "YYYY MMMM Do")
			}
		}
	}
`;

const PageTemplate = ({ data }) => {
	const { frontmatter = "", body } = data.mdx;
	return (
		<Layout>
			<SEO title={`${frontmatter.title} | Blog`} />
			<article className="prose prose-sm sm:prose md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-light mx-auto">
				<h1>{frontmatter.title}</h1>
				<p>{frontmatter.date}</p>
				<MDXRenderer>{body}</MDXRenderer>
			</article>
			<p>THIS IS THE PAGE TEMPLATE</p>
		</Layout>
	);
};

export default PageTemplate;
