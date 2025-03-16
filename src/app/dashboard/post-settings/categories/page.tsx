import { findManyCategory } from "@/app/actions/category";
import CategoriesTable from "@/app/components/post-settings/CategoriesTable";
import CreatePostCategory from "@/app/components/post-settings/CreatePostCategory";
export default async function Categories() {
  const categories = await findManyCategory();

  return (
    <>
      <div className="flex flex-col w-full p-4 space-y-4">
        <CreatePostCategory />
        <CategoriesTable categories={categories} />
      </div>
    </>
  );
}
