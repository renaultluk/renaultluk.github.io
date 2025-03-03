import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import getPosts from "../../../scripts/fileSystem";
import WorkUI from "./ui";

export const revalidate = 60
export const dynamicParams = true
export async function generateStaticParams() {
    const posts = await fetch('https://api.vercel.app/blog').then((res) =>
      res.json()
    )
    return posts.map((post) => ({
      id: String(post.id),
    }))
}

const WorkHome = async ({ params }) => {
    const { posts } = await params;
    console.log(path.join(process.cwd(), 'data', 'work'), posts)
    
    return (
        <WorkUI posts={posts} />
    )
}

export default WorkHome;
