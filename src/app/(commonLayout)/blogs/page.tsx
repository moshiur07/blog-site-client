import BlogCard from "@/components/modules/homepage/Blogcard";
import { blogService } from "@/components/services/blogs.service";
import { BlogPost } from "@/types/blogpost";

const BlogPage = async() => {
const blogs = await blogService.getAllBlogs()
const dataArr= await blogs?.data?.data?.data
    return (
        <div>
            this is blogs
            <div className=" grid grid-cols-3 gap-5 px-5">
            {dataArr?.map((data:BlogPost)=> <BlogCard key={data.id} post={data} /> )}
            </div>
        </div>
    );
};

export default BlogPage;