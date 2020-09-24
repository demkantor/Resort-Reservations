import React, { Component } from 'react';



class SingleRoom extends Component {

    render() {
        const { feturedRooms: rooms } = this.context;

        
        return (
            <div>
                <h1>hello from single room</h1>
            </div>
        );
    };
};

export default SingleRoom;
