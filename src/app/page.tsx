import Link from "next/link"
import  myPosTitles  from '../../components/getPost'
import PostPreview from "../../components/PostPreview"


const Home = () =>{
    const allposts = myPosTitles()
    const postPreview = allposts.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreview}</div>
    )

}

export default Home;