import { useState, useEffect} from "react";
import { VillagerFilter } from "../components/villagers/VillagerFilter";
import { VillagerList } from "../components/villagers/VillagerList";
import {Favorites} from "../hooks/Favorites";

export const VillagerContainer = () => {
    const [villagers, setVillagers] = useState([])
    const [filteredVillagers, setFilteredVillagers] = useState(villagers)
    // const [favoriteView, setFavoriteView] = useState([])
    // const [favoriteVillagers, setFavoriteVillagers] = useState([])

    const fetchData = async() => {
        try {
            const resp = await fetch("http://localhost:3001/villagers")
            const data = await resp.json()
            setVillagers(data) 
            setFilteredVillagers(data)
        } catch (error) {
            const err = new Error(error)
          alert(err)  
        }
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    const handleSearch = (searchValue) => {
        const filteredVillagers = villagers.filter(villager => villager.name["name-USen"].toLowerCase().startsWith(searchValue.toLowerCase()))
        
        setFilteredVillagers(filteredVillagers)
    }

    // const onAdd = (favoriteVillagers) => {
    //     const exist = favoriteView.find((favorites) => favorite.id === villager.id);
    //     if (exist) {
    //         setFavoriteView (
    //             favoriteView.map((favorite) =>
    //             x.id === villager.id ? { ...exist,} : favorite )
    //         )
    //     }
       
    // }
    // const handleClick = e => {
    //     const selectedVillager = e.target.textContent.replaceAll ("-", "").replaceAll(" ", "")
    //     const filteredVillagers = villagers.filter(villager => villager.name["name-USen"] === selectedVillager)
    //     setVillagers(filteredVillagers)
    // }

    return(
        <div>
            <VillagerFilter handleSearch={handleSearch}/>
            <button onClick={<Favorites />}> Favorites 💖</button>
            <VillagerList villagers={filteredVillagers} />
        </div>
    )
}
