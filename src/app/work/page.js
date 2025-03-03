import getPosts from "../../../scripts/fileSystem";
import WorkUI from "./ui";

export const generateStaticParams = async () => {
    console.log("Path: ", path.join(process.cwd(), 'app', 'work'))
    const dirFiles = fs.readdirSync(path.join(process.cwd(), 'src', 'app', 'work'), {
        withFileTypes: true,
    });

    const posts = dirFiles
    .map((file) => {
        if (!file.name.endsWith('.mdx')) return;

        const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'pages', 'work', file.name),
        'utf-8'
        );
        const { data, content } = matter(fileContent);

        const slug = file.name.replace(/.mdx$/, '');
        return { data, content, slug };
    })
    .filter((post) => post)
    .sort((a, b) => {
        return new Date(b.data.finishDate) - new Date(a.data.finishDate);
    });

    if (limit) {
    return posts.filter((post, index) => {
        return index + 1 <= limit;
    });
    }

    return posts;
};

const WorkHome = async ({ params }) => {
    const { posts } = await params;
    console.log(posts)
    
    return (
        <WorkUI posts={posts} />
    )
}

export default WorkHome;
