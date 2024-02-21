import React from 'react'

function Loading(props) {
    return ( 
        <div class="ui active dimmer">
            <div class="ui text loader">{props.message}</div>
        </div>
     );
};

export default Loading;
