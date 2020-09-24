import React, { Component, createContext } from "react";
import items from './data';
import Client from "../Contentful";

const RoomContext = createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    componentDidMount = () => {
        // comment out getdata function to use local data
        this.getData();
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        });
    };

    // dynamically change rooms displayed by form input
    filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;
    
        let tempRooms = [...rooms];
        // get capacity and price
        capacity = parseInt(capacity);
        price = parseInt(price);

        // filter by type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        };

        // filter by capacity
        if (capacity !== 1) {
          tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        };

        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);

        //filter by size
        tempRooms = tempRooms.filter(
            room => room.size >= minSize && room.size <= maxSize
        );

        //filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        };

        //filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        };

        this.setState({ sortedRooms: tempRooms });
    };

    formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    };

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "beachHotelRooms",
                order: 'fields.price'
            });
            let rooms = this.formatData(response.items);

            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price));
            let maxSize = Math.max(...rooms.map(item => item.size));
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize
            });
        } catch (error) {
            console.error(error);
        };
    };

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({ [name]: value }, this.filterRooms );
    };


    render() {
        return (
            <RoomContext.Provider 
                value={{ 
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange
                }}>
                    { this.props.children }
            </RoomContext.Provider>
        );
    };
};


export { RoomContext, RoomProvider };
