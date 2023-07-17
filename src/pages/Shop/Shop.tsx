import { BlogCard } from "src/components/blogCard/BlogCard";
import { TitleBar } from "src/components/titlebar/TitleBar";

export const Shop = () => {
  return (
    <div>
      <TitleBar title="Blogs" />
      <div className="grid grid-cols-2 ">
        <BlogCard />
        <img src="src/" alt="" />
      </div>
    </div>
  );
};
