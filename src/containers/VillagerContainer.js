import { useState, useEffect} from "react";
import { VillagerCard } from "../components/villagers/VillagerCard";
import { VillagerFilter } from "../components/villagers/VillagerFilter";
import { VillagerForm } from "../components/villagers/VillagerForm";
import { VillagerList } from "../components/villagers/VillagerList";

export const VillagerContainer = () => {
    const [villagers, setVillagers] = useState([])

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

    return (
        <div>
            <VillagerFilter />
            <VillagerList villagers={villagers} />
            <VillagerForm />
        </div>
    )
}
