import { blogService } from "@/components/services/blogs.service";
import { BlogPost } from "@/types/blogpost";


export async function generateStaticParams() {
    const {data} = await blogService.getAllBlogs();

return data?.data?.data?.map((blog:BlogPost)=>({id:blog.id})).splice(0,3);
}

const BlogDetails = async(
    {params}:
    {params:
        Promise<{id:string}>}
    ) => {
    const {id} = await params

    const {data} = await blogService.getBlogsById(id)
    return (
        <div>
            this is dynamic page of {id}
            <div className=" mt-28 p-5 border-amber-2000 border-2 py-8 text-center rounded-2xl mx-32">
                <h1>Title: {data?.data?.title}</h1>
                <h6>Content: {data?.data?.content}</h6>
                <p>views:{data?.data?.views}</p>
            </div>
        </div>
    );
};

export default BlogDetails;