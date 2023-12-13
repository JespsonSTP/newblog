import fs from "fs"
import matter from "gray-matter"
import { PostMetadata } from "../components/postmetadata"


//get the post from the folder
function myPosTitles(): PostMetadata[]{
    //let the folder be known
    const folder = "posts/"
    //read from folder synchronous
    const allPosts = fs.readdirSync(folder)
    //get only files finishing with
    const markdownPost = allPosts.filter((post) => post.endsWith(".md"))
    //get only title
    //const postTitle = markdownPost.map((post) => post.replace(".md", ""))
    const posts = markdownPost.map((post) =>{
        //get post content
        const postContent = fs.readFileSync(`posts/${post}`, "utf8")
        //we just want the metadata to gray content
        const post_metadata_graymatter = matter(postContent)
        return {
            title: post_metadata_graymatter.data.title,
            date: post_metadata_graymatter.data.date,
            subtitle: post_metadata_graymatter.data.subtitle,
            slug: post.replace(".md", " ")
        }
    })
    return posts
}

export default myPosTitles