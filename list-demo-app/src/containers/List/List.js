import React from "react";
import "./List.css";
import ListItem from "../../components/ListItem/ListItem";

const List = () => {
    return (
        <div className="list-items">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
    );
}

export default List;