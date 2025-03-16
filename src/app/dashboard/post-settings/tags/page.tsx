import { findManyTag } from "@/app/actions/tag";
import TagsTable from "@/app/components/post-settings/TagsTable";
import CreatePostTag from "@/app/components/post-settings/CreatePostTag";
export default async function Tags() {
  const tags = await findManyTag();
  return (
    <div className="flex flex-col w-full p-4 space-y-4">
      <CreatePostTag />
      <TagsTable tags={tags} />
    </div>
  );
}
