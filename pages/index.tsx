import { AboutSection } from "components/home/about";
import { PostList, PostCard } from "components/post";
import { ProjectList, ProjectCard } from "components/home/projects";
import { SkillList, SkillRow, CategoryList } from "components/home/skills";
import { useGetCategoriesMap, useFetch, useGetAPI, useGetSkillsByCategory } from "hooks";
import Link from "next/link";
import { CategoryAPI, PostAPI, ProjectAPI, SkillAPI } from "api";



export default function Home() {

	const projectAPI = useGetAPI(new ProjectAPI(`${process.env.NEXT_PUBLIC_API_HOST}/projects`))
	const categoryAPI = useGetAPI(new CategoryAPI(`${process.env.NEXT_PUBLIC_API_HOST}/categories`))
	const postAPI = useGetAPI(new PostAPI(`${process.env.NEXT_PUBLIC_API_HOST}/posts`))
	const skillAPI = useGetAPI(new SkillAPI(`${process.env.NEXT_PUBLIC_API_HOST}/skills`))

	const { items: projects, setFilters, totalPages, setPagination, pagination } = useFetch<Project>(projectAPI, { currentPage: 1, limit: 6 }, [{ by: 'name', order: 'asc' }])
	const { items: categories } = useFetch<Category>(categoryAPI, { currentPage: 1, limit: 10 }, [])
	const { items: skills } = useFetch<Skill>(skillAPI, { currentPage: 1, limit: 100 }, [])
	const { items: posts } = useFetch<Post>(postAPI, { currentPage: 1, limit: 3 }, [{ order: 'desc', by: 'publishedDate' }])

	const categoriesMap = useGetCategoriesMap(categories)
	const skillsByCategory = useGetSkillsByCategory(skills, categoriesMap)
	return (<>

		<AboutSection>
			<div className="flex flex-col items-center justify-center col-span-6 mx-4 md:col-start-2 md:col-span-4">
				<h1 className="text-6xl ">Jose Mata</h1>
				<p className="mt-10 text-2xl">
					I&#39;m a person who is passionate about software development, software architecture and the cloud.
					For that reason, I always try to write a code which is clean, testable, maintainable, reusable, and easy to extend,
					following design patterns like Clean Architecture. I found my passion in Back-End development, although I&#39;m not limited to that. I also have solid knowledge
					about Front-End development with React/Next.js and cloud services such as AWS.
				</p>

			</div>
		</AboutSection>
		<h1 id="skills" className="pt-10 mt-32 mb-10 text-6xl text-center">Skills</h1>
		<CategoryList>
			{Array.from(skillsByCategory.keys()).length > 0 &&
				Array.from(skillsByCategory.keys()).map((idCategory) => (
					<SkillList key={`cat-${skillsByCategory.get(idCategory)?.name as string}`} name={skillsByCategory.get(idCategory)?.name as string} color={skillsByCategory.get(idCategory)?.color as string}>
						{
							skillsByCategory.get(idCategory)?.skills.map((skill) => (
								<SkillRow key={`skill-${skill.name}`} name={skill.name} />
							))
						}
					</SkillList>
				)
				)

			}
		</CategoryList>

		<h1 id='projects' className='mt-32 text-6xl text-center'>Projects</h1>
		<ProjectList setFilters={setFilters} categories={categories} totalPages={totalPages} pagination={pagination} setPagination={setPagination} >
			{projects.length > 0 &&
				projects.map((project) => (
					<ProjectCard key={`skill-${project.id}`} project={project} categoriesMap={categoriesMap} />
				))
			}

		</ProjectList>
		<h1 id="blog" className='mt-32 mb-20 text-6xl text-center'>Latest Posts</h1>
		{/* <PostList>
			{
				posts.length > 0 &&
				posts.map(({ id, defaultTitle, publishedDate, slug }) => (
					<PostCard id={id} slug={slug} defaultTitle={defaultTitle} publishedDate={publishedDate} key={`post-${id}`} />
				))
			}

		</PostList> */}
		<div className="flex justify-center mt-10">
			<Link className="w-full text-2xl text-center text-primary" href="/blog" >See more..</Link>
		</div>

	</>
	)
}
