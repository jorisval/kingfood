import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeaderContext } from "../utils/context";
import { useFetch } from "../utils/hooks";
import { PostContainer, LoaderContainer } from "../styles/Artice";
import { BASE_URL } from '../../config';

function Article() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("blog");
    }, [setActivePage]);
    const { articleId } = useParams();
    const { data, dataIsLoading } = useFetch(`${BASE_URL}/api/post/${articleId}`);
    const formatedDate = (isoDate) => {
        // Create a new Date object from the ISO date string
        const date = new Date(isoDate);

        // Define an array of month names
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Format the date into the desired format
        const formatDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

        return(formatDate); // "March 29, 2023"

    }

    async function handleSubmit(event) {
        event.preventDefault();
    }

    return(
        <>
            {dataIsLoading && (
            <LoaderContainer>
                <div className="bounce bounce1"></div>
                <div className="bounce bounce2"></div>
                <div className="bounce"></div>
            </LoaderContainer>
            )}
            <PostContainer className="article-content">
                <h1>{ data.title }</h1>
                <span className="date">{ formatedDate(data.dateCreated) }</span>
                <img src={data.imageUrl} alt=""/>
                <div className="description">
                    {data.content}
                </div>
                <form onSubmit={handleSubmit}>
                    <div><textarea name="comment" id="comment" rows="6" placeholder="Comment..."></textarea></div>
                    <div><input type="submit" value="Send"/></div>
                </form>
            </PostContainer>
        </>
    );
}

export default Article;