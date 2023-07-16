import { Fragment } from "react";
import Post from "./Post";

export default function Blog(props) {
    return (
    <Fragment>
        <div className="bg-neutral-50">
            <div className="container py-20 xl:px-[10rem] 2xl:px-[15rem]" id="team">
                <div className="grid gap-y-5">

                    {/* Blog Posts */}
                    <div className="pt-12">
                        <div className="grid gap-y-10 lg:grid-cols-2 gap-x-8">
                            {Object.keys(props.blogData).map((key) => {
                                const blog = props.blogData[key];
                                return (
                                    <Post key={key} blog={blog} image={props.image}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </Fragment>
    );
}
