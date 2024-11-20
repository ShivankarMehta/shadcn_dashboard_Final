import PostsPagination from "@/components/posts/PostsPagination";
import PostTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
const PostsPage = () => {
    return ( <>
    <BackButton text='Go Back' link='/'/>
    <PostTable/>
    <PostsPagination/>
    </> );
}
 
export default PostsPage;