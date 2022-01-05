import React from 'react';
import "./Post.css"
import Avatar from '@mui/material/Avatar';


function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}


function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    //  src="https://media.istockphoto.com/photos/old-wall-background-picture-id1296377266?b=1&k=20&m=1296377266&s=170667a&w=0&h=s55vLec8A-pDVLUjI148h1DLpQseSX1aJPJLyOV3SOc="
                    {...stringAvatar('Kent Dodds')} />
                <h3>Username</h3>

            </div>

            <img className="post__image" src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" alt=""></img>

            <h4 className="post__text">
                <strong>Sudhanshu  </strong>
                This is instagram clone projectt
            </h4>

        </div>
    )
}

export default Post
