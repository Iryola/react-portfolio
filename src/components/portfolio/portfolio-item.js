import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
    // Data that we'll need
        // background image: thumb_image_url
        // logo
        // description: description
        // id: id
        // "position"
    console.log(props);
    
    const { id, description, thumb_image_url, logo } = props.whatever;
    return (
        <div>
        <img src={thumb_image_url} />
        <img src={logo} />
        <div>{description}</div>
        <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    )
}