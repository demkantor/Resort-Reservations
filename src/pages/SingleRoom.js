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
                        <h6>price : ${ price }</h6>
                        <h6>size : { size } SQFT</h6>
                        <h6>
                            max capacity :
                            {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                        </h6>
                        <h6>{ pets ? "pets allowed" : "no pets allowed" }</h6>
                        <h6>{ breakfast && "free breakfast included" }</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
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
