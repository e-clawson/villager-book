import './Villager.css'

export const VillagerCard = ({villager}) => {
    return (
        <div className= "villager-card">
            <h2>Name: {villager.name["name-USen"]}</h2>
            <img src={villager.image_uri} alt={villager.name["name-USen"]} />
            <button >🏠</button>
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
            {/* <h4>Favorite Color: {villager.bubblecolor}</h4> */}
        </div>
    )
}