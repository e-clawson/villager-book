import { useState, useEffect} from "react";
import { VillagerFilter } from "../components/villagers/VillagerFilter";
import { VillagerForm } from "../components/villagers/VillagerForm";
import { VillagerList } from "../components/villagers/VillagerList";

export const VillagerContainer = () => {
    const [villagers, setVillagers] = useState([])
    const [filteredVillagers, setFilteredVillagers] = useState(villagers)
    const [favoriteView, setFavoriteView] = useState([])
    // const [villagerList, setVillagerList] = useState([])

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

    const favoriteList = (favoriteView) => {
        const {favorites} = favoriteView;
        return (
            <> 
                <h2> Favorite Villagers!</h2>
                <div>{favorites.length === 0 && <div> "No Favorites Selected" </div>}</div>
            </>
        )

    } 

    const onAdd = (favorites) => {
        const exist = favoriteView.find((favorites) => favorite.id === villager.id);
        if (exist) {
            setFavoriteView (
                favoriteView.map((favorite) =>
                x.id === villager.id ? { ...exist,} : favorite )
            )
        }
       
    }
    // const handleClick = e => {
    //     const selectedVillager = e.target.textContent.replaceAll ("-", "").replaceAll(" ", "")
    //     const filteredVillagers = villagers.filter(villager => villager.name["name-USen"] === selectedVillager)
    //     setVillagers(filteredVillagers)
    // }

    return(
        <div>
            <VillagerFilter handleSearch={handleSearch}/>
            <button onClick={favoriteList}>Favorites 💖</button>
            <VillagerList villagers={filteredVillagers} />
            <VillagerForm />
        </div>
    )
}
