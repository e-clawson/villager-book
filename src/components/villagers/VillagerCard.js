import './Villager.css'
 
export const VillagerCard = ({villager, addToFavorites}) => {

    return (
        <div className= "villager-card">
            <h2>Name: {villager.name["name-USen"] || villager.name}</h2>
            <img src={villager.image_uri} alt={villager.name["name-USen"]} />
            <button >🏠</button>
            <button>⬅️ 🕦</button>
            <button onClick={() => addToFavorites(villager)}>💖</button>
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
        </div>
    )
}
