import PostItem from "./PostItem.jsx";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{title}</h1>
            {posts.map(post => <PostItem post={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;