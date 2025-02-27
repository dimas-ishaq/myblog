"use server"

export async function createPost(formData: FormData){
    const data = {
        title:formData.get("title")?.toString() ?? "",
        content:formData.get("content")?.toString() ??"",
        category: formData.get("category")?.toString() ?? "",
        tag: formData.get("tag")?.toString() ?? "",
        status: formData.get("status")?.toString() ?? "",
    }

    console.log(data)
    
}
