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
            setFilteredVillagers(data)
        } catch (error) {
          alert(error)  
        }
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    const handleSearch = (searchValue) => {
        const filteredVillagers = villagers.filter(villager => villager.hobby.toLowerCase().startsWith(searchValue.toLowerCase()))
        
        setFilteredVillagers(filteredVillagers)
    }

    return (
        <div>
            <VillagerFilter handleSearch={handleSearch}/>
            <VillagerList villagers={filteredVillagers} />
            <VillagerForm />
        </div>
    )
}
