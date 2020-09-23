import React, { Component } from 'react';
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";

import Title from './Title';

class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            }
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, i )=> (
                        <article key={ `item-${i}` } className="service">
                            <span>{ item.icon }</span>
                            <h6>{ item.title }</h6>
                            <p>{ item.info }</p>
                        </article> 
                    ))}
                </div>
          </section>
        );
    };
};

export default Services;
