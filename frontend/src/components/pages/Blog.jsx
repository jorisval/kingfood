import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../utils/context";
import { useFetch } from "../utils/hooks";
import { BlogContainer, SkeletonLoader } from "../styles/Blog";

function Blog() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("blog");
    }, [setActivePage]);
    const { data, dataIsLoading } = useFetch('http://localhost:3000/api/post');
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(8);
    const indexOfLastPost = currentPage * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    const currentPosts = Array.isArray(data) && data?.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumber = [];

    for(let i=1; i <= Math.ceil(data?.length / perPage); i++) {
        pageNumber.push(i);
    }

    const nextButton = () => {
        currentPage < pageNumber.length && setCurrentPage(currentPage + 1);
    }
    const previousButton = () => {
        currentPage > 1 && setCurrentPage(currentPage - 1);
    }

    const formatedDate = (isoDate) => {
        // Create a new Date object from the ISO date string
        const date = new Date(isoDate);

        // Define an array of month names
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Format the date into the desired format
        const formatDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

        return(formatDate); // "March 29, 2023"

    }

    return(
        <BlogContainer className="Blog">
            <div className="blog-title">
            <h1>Blog</h1>
        </div>
        <div className="articles">
            { dataIsLoading
                    ? Array.from({ length: perPage }).map((_, i) => <SkeletonLoader key={i} />)
                    : Array.isArray(currentPosts) && currentPosts.map((post) => {
                return(
                    <div className="article" key={post._id}>
                        <Link to={`/article/${post._id}`}>
                            <img src={post.imageUrl} alt=""/>
                            <h3>
                                {post.title.slice(0, 40)}
                                {post.title.length > 40 && '...'}
                            </h3>
                            <p>
                                {post.content.slice(0, 150)}
                                {post.content.length > 150 && '...'}
                            </p>
                            <span>{formatedDate(post.dateCreated)}</span>
                        </Link>
                    </div>
                )
            }) }
        </div>
        <div className="buttons-article">
            <button className="previous" onClick={() => previousButton()}>Previous</button>
            <button className="next" onClick={() => nextButton()}>Next</button>
        </div>
        </BlogContainer>
    );
}

export default Blog;