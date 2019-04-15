import React from 'react'
import {Link} from 'react-router-dom'

export default function SearchUser(props){
    const {questionee_id :id, profile_pic, username} = props   
    return (        
        <div>
            <Link to = {`/surveypage/${id}`}>
                <div>{username}</div>
                <img url={profile_pic} />
            </Link>
        </div>
    )

}