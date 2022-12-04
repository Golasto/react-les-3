import posts from '../data/posts.json';
import {Link} from "react-router-dom";
import React from "react";

   export function BlogPost() {
        console.log(posts);
        return (
            <>
                <h1>Blogposts</h1>
                {
                    posts.map( post => {
                        return(
                            <ul className="Blogs">
                                <li className="blogLinks"><Link to="posts/1">{post.id} {post.title}</Link></li>
                            </ul>
                        )
                    })
                }
            </>
        );
    }