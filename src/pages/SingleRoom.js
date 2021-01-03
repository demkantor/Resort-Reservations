import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { RoomContext } from "../context/context";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import defaultBcg from "../images/default-room.jpeg";

const SingleRoom = (props) => {

    const slug = props.match.params.slug;
    const { getRoom } = useContext(RoomContext);
    const room = getRoom(slug);

    if (!room) {
        return (
            <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        );
    };

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    const [main, ...otherImages] = images;

    return (
        <>
            <StyledHero img={ main || defaultBcg }>
                <Banner title={ `${name} room` }>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {otherImages.map((item, i) => (
                        <img key={i} src={item} alt={name} />
                    ))}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{ description }</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h5>price : ${ price }</h5>
                        <h5>size : { size } SQFT</h5>
                        <h5>
                            max capacity :
                            {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                        </h5>
                        <h5>{ pets ? "pets allowed" : "no pets allowed" }</h5>
                        <h5>{ breakfast && "free breakfast included" }</h5>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h5>extras</h5>
                <ul className="extras">
                    {extras.map((item, i) => (
                        <li key={i}>- {item}</li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default SingleRoom;
