
import PostPanel from "@/app/components/start-writing/PostPanel";
import {Tiptap} from "@/app/components/Tiptap";

export default function StartWriting() {
  return (
    <div className="flex ">
      <section className="flex-1 flex flex-col min-h-screen px-2 border-x-2 pt-4">
        <Tiptap />
      </section>
      <section className="flex-none w-48 relative mx-auto bg-gray-100 px-2">
        <PostPanel />
      </section>
    </div>
  );
}
