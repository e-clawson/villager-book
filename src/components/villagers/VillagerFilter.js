import { useState } from "react"

export const VillagerFilter = ({handleSearch}) => {
    
    return (
        <div>
            <input type="text" placeholder="Search Villagers"
            onChange={e => handleSearch(e.target.value)}/>

        </div>
    )
}
