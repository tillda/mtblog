import {getAllFilesFrontMatter} from "@/lib/mdx"
import {GetStaticProps, InferGetStaticPropsType} from "next"
import siteMetadata from "@/data/siteMetadata"
import ListLayout from "@/layouts/ListLayout"
import {ComponentProps} from "react"
import {PageSEO} from "./components/SEO"

export const POSTS_PER_PAGE = 10

class ClassIdea {}

export function _test(
	_param_variable1: string,
	_param_variable2: number
): ComponentProps<typeof ListLayout> {
	const _const1 = "Lorem ipsum dolor sit amet"
	const _const2 = 0
	const _variable1 = ""
	const _variable2 = 0
	const t: _TypeType<string> = {}

	function _function(_param_variable1: any) {
		return _const1 && _const2 ? _param_variable1 : _param_variable1
	}

	const _constmap = {property: {property: {property: {method: _function, prop: _variable1}}}}
	const _constmap2 = {property: {method: (x: any) => x, prop: _variable1}}
	_constmap.property.property.property.method(_const1)
	_constmap.property.property.property.method(_const1)

	_constmap2.property.method(_const1)
	_constmap2.property.method(_const2)

	if (_param_variable1 == "") {
		return _function({keyName: _param_variable1, keyValue: _param_variable2})
	}
	if (_const1 == "Lorem ipsum dolor sit amet") {
		return _function({keyName: _const1, keyValue: _const2})
	}
	if (_variable1 == "") {
		return _function({keyName: _variable1, keyValue: _variable2})
	}
}

// Comment

export const getStaticProps: GetStaticProps<{
	posts: ComponentProps<typeof ListLayout>["posts"]
}> = async () => {
	const posts = await getAllFilesFrontMatter("blog")
	const unused1 = {}
	const unused2 = {
		foo: "bar",
		baz: "quax",
		totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
	}
	return null
}

export default function BlogTest({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<PageSEO
				title={`Blog - ${siteMetadata.author}`}
				description={siteMetadata.description}
			/>
			<div className="divide-y divide-gray-200 dark:divide-gray-700">
				<div className="pt-6 pb-8 space-y-2 md:space-y-5">
					<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-{x} sm:leading-10 md:text-6xl md:leading-14">
						Showcase your projects with a hero image (16 x 9)
					</h1>
				</div>
			</div>
			<ListLayout posts={posts} title="All Posts" />
		</>
	)
}
