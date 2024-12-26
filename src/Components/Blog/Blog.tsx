import { articles } from "../../Utils/info";
import BlogCard from "./BlogCard";

interface BlogProps {
  upTo?: number;
}

const Blog = ({ upTo = articles.length }: BlogProps) => {
  return (
    <div className="flex-col items-center">
      <h2>
        I like <span className="text-gradient font-medium">sharing</span> what I
        learn
      </h2>
      <div className="flex gap-20 flex-wrap justify-center">
        {articles.slice(0, upTo).map((articles, index) => (
          <BlogCard key={index} {...articles} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
