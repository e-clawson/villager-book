import { useState, useEffect} from "react";
import { VillagerFilter } from "../components/villagers/VillagerFilter";
import { VillagerForm } from "../components/villagers/VillagerForm";
import { VillagerList } from "../components/villagers/VillagerList";

export const VillagerContainer = () => {
    const [villagers, setVillagers] = useState([])
    const [filteredVillagers, setFilteredVillagers] = useState(villagers)

    const fetchData = async() => {
        try {
            const resp = await fetch("http://localhost:3001/villagers")
            const data = await resp.json()
            setVillagers(data) 
        } catch (error) {
          alert(error)  
        }
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    const handleSearch = (searchValue) => {
        
        filteredVillagers = villagers.filter(villager => villager.name.toLowerCase().startsWith(searchValue.toLowerCase()))
        console.log(filteredVillagers)

        //filter  full list based on typed input 
        //update filteredCharacters using new array returned by filter

    }
    

    return (
        <div>
            <VillagerFilter handleSearch= {handleSearch}/>
            <VillagerList villagers={villagers} />
            <VillagerForm />
        </div>
    )
}
