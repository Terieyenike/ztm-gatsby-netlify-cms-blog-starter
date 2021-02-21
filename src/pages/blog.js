import React from "react";
import { graphql } from "gatsby";
import PostLink from "../components/postLink";
import Layout from "../components/layout";
import SEO from "../components/seo";

import BlogCard from "../components/blogCard.component";


const IndexPage = ({ data }) => {
	const files = data.allMdx.edges;

	const filteredPosts = files.filter(
		({ node }) => node.frontmatter.template === "post"
	);

	let renderedPosts;

	// <PostLink key={node.id} post={node} />
	if (filteredPosts.length === 0) {
		renderedPosts = <p>No posts available</p>;
	} else {
		renderedPosts = filteredPosts.map(({ node }) => (

			<BlogCard key={node.id} {...node} />
		));
	}

	return (
		<Layout>
			<SEO title="Blog" />
			<div className="p-4">
				<h2 className="text-2xl font-bold mb-4">Zero to Mastery Blog</h2>
				<p>
					Enjoy free Zero to Mastery posts, guides, and tutorials to help you
					learn to code and sharpen your skills to achieve your goals.
				</p>
			</div>
			<section className="bg-purple-200 dark:bg-indigo-900 p-4 rounded-sm">
				{renderedPosts}
			</section>
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query {
		allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					slug
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						template
						author
						teaserImage
						tags

					}
				}
			}
		}
	}
`;
