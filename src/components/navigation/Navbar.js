import { NavLink } from "react-router-dom";

const style = {
    width: "100%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    backgroundColor: "lightGreen",
    verticalAlign: "center",
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
                to="/newvillager"
           >New Villager</NavLink>
           
        </div>
    )
}
