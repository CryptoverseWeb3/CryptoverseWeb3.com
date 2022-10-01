import BlogCard from "./BlogCard";

const blogList = [...Array(12).keys()].map((_, key) => {
  return (
    <BlogCard
      key={key}
      category="Pets"
      title="Adopt Cute Pets"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus enim magna, at suscipit ex mattis id. Pellentesque efficitur nunc nibh, ac cursus erat placerat nec. Donec tincidunt quam iaculis, porta turpis non, sodales eros. Phasellus aliquam tempus lectus sed hendrerit."
      commentCount={20}
      viewCount={6}
    />
  );
});

const Blogs = () => {
  return (
    <div className="grid gap-y-6 sm:gap-6 2xl:gap-10  xl:gap-y-8 mx-auto justify-items-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {blogList}
    </div>
  );
};
export default Blogs;
