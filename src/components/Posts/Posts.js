import Post from "./Post/Post";
import { likePost } from "../../features/posts/postsSlice";
import { useDispatch } from "react-redux";

const Posts = () => {
    return (
        <div className="postsContainer">
            <Post/>
        </div>
    );
}

export default Posts;