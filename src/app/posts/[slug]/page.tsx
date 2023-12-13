import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import  myPosTitles  from '../../../../components/getPost'

function myPost(title: any){
    //let the folder be known
    const folder = "posts/"
    //slelecting the file
    const theFile = `${folder}/${title}.md`
    //tell fs to read the file
    const thePost = fs.readFileSync(theFile,"utf-8")
    //get only files finishing with
    const matterResult = matter(thePost)
    return matterResult;
}

export const generateStaticParams =async () => {
    const posts = myPosTitles()
    return posts.map((post) => ({
            slug: post.slug
        }))
}

const Post = (props: any) => {
    //get url params
    const slug= props.params.slug
    //console.log(urlparams)
    const getPost = myPost(slug)
    //console.log(getPost)
    return (
        <div>
            <div className="my-12 text-center">
                <h1 className="text-2xl text-slate-600 ">{getPost.data.title}</h1>
                <p className="text-slate-400 mt-2">{getPost.data.date}</p>
            </div>
            <article className="prose">
                <Markdown>{getPost.content}</Markdown>
            </article>
        </div>
    )
}

export default Post