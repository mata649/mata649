declare interface Skill {
	id: string;
	name: string;
	idCategory: string;
}

declare interface Category {
	id: string;
	color: string;
	name: string;
}

declare interface Project {
	id: string;
	name: string;
	description: string;
	githubUrl: string;
	idCategory: string;
}

declare interface Post {
	id: string;
	slug: string;
	defaultTitle: string;
	publishedDate?: string;
}
declare interface Pagination {
	currentPage: number;
	limit: number;
}
declare interface Order {
	by: string;
	order: 'asc' | 'desc';
}

declare interface PostContent {
	id: string;
	idPost: Post['id'];
	language: Languages;
	title: string;
	content: string;
}
