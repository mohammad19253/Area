import React, { memo, useEffect, useState } from "react";

const Profile = (props) => {
    const [user,setUser]=useState(null)
    useEffect (()=>{
        setUser(props.user)
    },[props])
  
    const [description_load_more,set_description_load_more]=useState({key:'',state:false})
    const loadMoreDescription = () =>{

    }
    if(user){
        return  <div className="profile w-100 text-light-75">
        <div className="">
        <div>
            <img src={user.banner_image.src} className="banner-image"/>
        </div>
        <div className="profile-container ">
            <div className="d-flex  align-items-center">
                <img src={user.profile_picture.src} className="profile-img-2x"/>
                <h1 className="text-black-75 fs-2">{user.userName}</h1>
            </div>
            <div className="d-flex text-black-75">
                <div className="m-2 d-flex flex-column justify-conent-center align-items-center">
                    <strong className="fs-5">{user.posts.length}</strong>
                    <div>post</div>
                </div>
                <div className="m-2 d-flex flex-column justify-conent-center align-items-center">
                    <strong className="fs-5">{user.events.length}</strong>
                    <div>events</div>
                </div>
                <div className="m-2 d-flex flex-column justify-conent-center align-items-center">
                    <strong className="fs-5">{user.communicators.length}</strong>
                    <div>communicators</div>
                </div>
            </div>
            <div className="d-flex ">
                <div className="mx-2"> website:</div>
              <a href={`https://${user.website}`} >{user.website}</a> 
            </div>
            <div className="d-flex">
                <div className="mx-2"> bio:</div>
                <div>{user.bio}</div>
            </div>
          
            <div className="types">
                <div className="seleceted">     posts  </div>
                <div>     events  </div>
                <div>     videos  </div>
            </div>
            <div className="posts-container">
                {user.posts.map( post=>{
                        return   <div className="post banner-post border rounded"  key={post.id}>
                                    <div className="post-picture" key={post.id}>
                                        <img src={post.image.src}/>
                                    </div>
                                    <div className="interactions d-flex justify-content-between"  key={post.id}>
                                        <div className="d-flex">
                                            <div className="mx-1">like</div>
                                            <div className="mx-1">comment</div>
                                        </div>
                                        <div className="mx-1">share</div>
                                    </div>
                                    <div  className="like-numbers mx-1"  key={post.id}>
                                        {post.like.length}
                                    </div>
                                    <div  className="description mx-1 text-black-75" key={post.id}>
                                         <strong>{user.userName}</strong>
                                         { post.description.length > 30 && !description_load_more.state ? 
                                            <>
                                                {    post.description.slice(0,20)   }
                                                <span className="text-light-75 cursor-pointer"
                                                onClick={()=>{
                                                    set_description_load_more({
                                                        key:post.key,
                                                        state:true,
                                                    })
                                                }}
                                                >... more</span>
                                            </>  : 

                                                post.description
                                        }
                                    </div>
                                    <div className="comments">
                                        
                                    </div>
                                </div>
                        })
                    
                }
            </div>
        </div>
      
        </div>
                </div>
    }else{
        return 'something happend'
    }
   
}
export default memo(Profile)