import React from "react";

const Author = ({ data }) => {
	const d = new Date().getFullYear().toString();
	const { author = "ghostwriter", date = { d }, twitter } = data;
	return (
		<div className="bg-white dark:bg-gray-700 max-w-full flex items-center px-2 rounded-xl shadow border dark:border-gray-700">
			<div className="flex items-center mr-2 overflow-hidden">
				<img
					src="https://i.pravatar.cc/50"
					alt="My profile"
					className="w-16 rounded-full"
				/>
			</div>
			<div className="m-0 p-0 line-height-0">
				<div className="font-semibold text-gray-700 dark:text-gray-200">
					{author}
				</div>
				<div className="text-sm text-gray-500 dark:text-gray-200">
					{date}
				</div>
			</div>
		</div>
	);
};

export default Author;
