import BlogCard from "./BlogCard";

const blogList = [...Array(2).keys()].map((_, key) => {
  return (
    <BlogCard
      key={key}
      category="Around the block"
      title="Scaling Ethereum and crypto for a billion users"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus enim magna, at suscipit ex mattis id. Pellentesque efficitur nunc nibh, ac cursus erat placerat nec. Donec tincidunt quam iaculis, porta turpis non, sodales eros. Phasellus aliquam tempus lectus sed hendrerit."
      commentCount={20}
      viewCount={6}
      imgUrl={
        "https://images.ctfassets.net/q5ulk4bp65r7/4sCdtXufV4yr6NPAccRXhI/69332d7e5228db0a4b038914e2bbc5ce/ATB-3__1_.png?w=768&fm=png"
      }
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
