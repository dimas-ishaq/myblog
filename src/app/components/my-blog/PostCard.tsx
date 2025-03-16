import Link from "next/link"; 
type Category ={
  id?:string,
  name?:string
}
type Tag ={
  id?:string,
  name?:string
}
type postsProps = {
  id:string,
  title:string,
  name:string, 
  slug:string,
  content:string,
  categories: Category[],
  tags: Tag[],
  status:string,
  createdAt:Date,
  updatedAt:Date,
}
export default function PostCard({ posts }: { posts: postsProps[] }) {
  return (
    <div className="w-full grid grid-cols-4 gap-3 mt-4 px-4 h-full">
      {posts?.map((post, index) => (
        <Link
          href={`/blog/${post?.slug}`}
          key={index}
          className="flex flex-col bg-gray-100 border-2 border-gray-300 rounded-lg p-4 hover:shadow hover:shadow-gray-800"
        >
          <span className="capitalize text-xs bg-teal-800 text-white rounded-full w-fit px-4 py-1 ">
            {post?.status}
          </span>
          <div className="flex flex-col mt-2">
            <p className="text-lg text-slate-500 capitalize">{post?.title}</p>
            <div
              dangerouslySetInnerHTML={{ __html: post?.content }}
              className="text-sm text-slate-600"
            ></div>
            <div className="flex flex-col mt-2">
              <p className="text-xs text-slate-600">
                Last Update: {new Date(post?.updatedAt).toLocaleString()}
              </p>
              <div className="flex space-x-2 mt-2">
                {post?.categories?.map(
                  (category: { id?: string; name?: string }) => (
                    <span
                      key={category?.id}
                      className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full"
                    >
                      {category.name}
                    </span>
                  )
                )}
                {post?.tags?.map((tag: { id?: string; name?: string }) => (
                  <span
                    key={tag?.id}
                    className="text-xs bg-orange-600 text-white px-2 py-1 rounded-full"
                  >
                    {tag?.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
