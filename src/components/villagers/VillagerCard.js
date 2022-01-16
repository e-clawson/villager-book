import './Villager.css'

export const VillagerCard = ({villager}) => {
    return (
        <div className= "villager-card">
            <h2>Name: {villager.name.nameUsen}</h2>
            <img src={villager.image_uri} alt={villager.name} />
            <button>🏠</button>
            <button>⬅️ 🕦</button>
            <button>💖</button>
            <button>⛺</button>
            <button>🖼️</button>
            <button>🌴</button>
            <h4>Species: {villager.species}</h4>
            <h4>Gender: {villager.gender}</h4>
            <h4>Birthday: {villager.birthday}</h4>
            <h4>Hobby: {villager.hobby}</h4>
            <h4>Personality: {villager.personality}</h4>
            <h4>Catch-Phrase:{villager.catchphrase}</h4>
            <h4>Saying: "{villager.saying}"</h4>
            <h4>Favorite Color: {villager.bubblecolor}</h4>

        </div>
    )
}

// **want to make a button that when clicked, 
//causes that villagerCard to display under the correct page 
// 1. make buttons - check
// 2. make a clickevent - handleClick or onClick 
// 3. make it so when that handleclick is triggered it 
//displays on the correct page - how do I do this? 