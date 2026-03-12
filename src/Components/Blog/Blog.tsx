import { articles } from "../../Assets/Data/articles";
import BlogCard from "./BlogCard";
import { useNavigate } from "react-router-dom";

interface BlogProps {
  upTo?: number;
}

const Blog = ({ upTo = articles.length }: BlogProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex-col items-center gap-10 pb-[15vh]">
      <h2>
        I like <span className="text-gradient font-medium">sharing</span> what I learn
      </h2>
      <div className="flex ~gap-10/20 flex-wrap justify-center">
        {articles.slice(0, upTo).map((articles, index) => (
          <BlogCard key={index} {...articles} />
        ))}
      </div>
      {upTo !== articles.length && (
        <button
          onClick={() => navigate("/blog")}
          className="btn btn-lg bg-gray-400 bg-opacity-10 shadow-lg text-gray-200 text-shadow hover:bg-gray-500 hover:bg-opacity-30"
        >
          View All
        </button>
      )}
    </div>
  );
};

export default Blog;
