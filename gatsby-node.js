/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// create a node for each md/mdx file
// This is for the main pages of our site
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `Mdx`) {
		const value = createFilePath({ node, getNode });

		createNodeField({
			name: `slug`,
			node,
			value: `${value}`,
		});
	}
};

const path = require("path");

// create a page based on each md/mdx node
exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const result = await graphql(`
		query {
			allMdx {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							template
						}
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
	}

	// Create blog post pages.
	const files = result.data.allMdx.edges;

	files.forEach(({ node }, index) => {
		if (node.frontmatter.template === "page") {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/page.template.js`),
				context: { id: node.id },
			});
		} else if (node.frontmatter.template === "post") {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/post.template.js`),
				context: { id: node.id },
			});
		} else {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/default.template.js`),
				context: { id: node.id },
			});
		}
	});
};
