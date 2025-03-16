import { getAllPost } from "@/app/actions/post";
import PostCard from "@/app/components/my-blog/PostCard";

export default async function MyBlog() {
  const posts = await getAllPost();
  console.log(posts)
  return (
    <div className="">
      <PostCard posts={posts}/>
    </div>
  );
}
