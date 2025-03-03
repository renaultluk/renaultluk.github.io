import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPosts = (limit) => {
  console.log(path.join(process.cwd(), 'data', 'work'))
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'data', 'work'), {
    withFileTypes: true,
  });

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'data', 'work', file.name),
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

  return dirFiles;
};

export const getPostMeta = (slug) => {
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), 'pages', 'work', `${slug}.mdx`),
    'utf-8'
  );
  const { data, content } = matter(fileContent);
  return data;
}

export default getPosts;