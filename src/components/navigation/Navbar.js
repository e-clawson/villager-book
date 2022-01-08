import { NavLink } from "react-router-dom";

const style = {
    width: "80%",
    margin: "5% 0 1%",
    padding: "1em"
};

export const Navbar = () => {
    return (
        <div>
           <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "green"
           }}
                exact 
                style={style}
                to="/"
           >Home</NavLink> 

            <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "green"
           }}
                exact 
                style={style}
                to="/about"
           >About</NavLink>

            <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "green"
           }}
                exact 
                style={style}
                to="/villagers/current"
           >CurrentVillagers</NavLink>

            <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "green"
           }}
                exact 
                style={style}
                to="/villagers/former"
           >Former Villagers</NavLink>

        <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "green"
           }}
                exact 
                style={style}
                to="/villagers/favorite"
           >Favorite Villagers</NavLink>

            <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "green"
           }}
                exact 
                style={style}
                to="/villagers/visitors"
           >Campsite Visitors</NavLink>

            <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "green"
           }}
                exact 
                style={style}
                to="/villagers/photos"
           >Villager Photos</NavLink>

            <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "green"
           }}
                exact 
                style={style}
                to="/villagers/happyhomes"
           >Happy Homes</NavLink>
        </div>
    )
}
