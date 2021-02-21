import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
	<div className="prose dark:prose-light">
		<Link to={post.slug}>
			{post.frontmatter.title} ({post.frontmatter.date})
		</Link>
	</div>
);

export default PostLink;
