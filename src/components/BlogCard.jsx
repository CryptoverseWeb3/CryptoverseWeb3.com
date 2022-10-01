import {
  ArrowRightOutlined,
  EyeOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const BlogCard = ({ category, title, viewCount, commentCount }) => {
  return (
    <article className="max-w-sm overflow-hidden transition-shadow duration-150 ease-in-out border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:shadow-lg">
      <img
        className="w-full"
        src="https://picsum.photos/id/237/720/400"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <h5 className="mb-1 text-sm font-semibold text-gray-500 uppercase">
          {category}
        </h5>
        <h3 className="mb-3 text-2xl font-semibold">Title</h3>
        <p className="text-base text-gray-700">{title}</p>
      </div>
      <div className="flex justify-between px-6 pt-4 pb-2">
        <div className="flex items-center gap-1 font-semibold text-blue-500 group ">
          <span className="group-hover:underline">Learn More</span>
          <ArrowRightOutlined />
        </div>
        <div className="flex divide-x-2">
          <div className="flex items-center gap-1 pr-2">
            <EyeOutlined />
            <span>{commentCount}</span>
          </div>
          <div className="flex items-center gap-1 pl-2">
            <CommentOutlined />
            <span>{viewCount}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
export default BlogCard;
