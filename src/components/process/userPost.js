import { useState } from "react";
import {useHistory} from "react-router-dom";

const userPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const [isPending, setIsPending] = useState(false);
    // const history = useHistory();

    const handleSubmit = ((e) => {
        e.preventDefault();

        const blog = {title, body, author}

        setIsPending(true)

        fetch("http://localhost:8000/contact" , {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog),
        }).then(() => {
            setIsPending(false);
        })
    })

    const 
    return ( 
        <div className="userPost">
            <form  onSubmit={handleSubmit}>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}>
                </textarea>
                {!isPending && <button>Save</button>}
                {isPending && <button disabled>Loading...</button>}
            </form>
        </div>
     );
}
 
export default userPost;