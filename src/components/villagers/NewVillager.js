import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import React from 'react'

export const NewVillager = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [personality, setPersonality] = useState("")
    const [birthday, setBirthday] = useState("")
    const [species, setSpecies] = useState("")
    const [gender, setGender] = useState("")
    const [hobby, setHobby] = useState("")
    const [catchphrase, setCatchphrase] = useState("")
    const [saying, setSaying] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if ([name, personality, birthday, species, gender, hobby, catchphrase, saying, image].some(val => val.trim() === "")) {
            alert("Please fill out all the fields, thank you!!!")
            return null
        }
        const newVillager = {name, personality, birthday, species, gender, hobby, catchphrase, saying, image}
        fetch("http://localhost:3001/villagers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newVillager)
        })
        setName("")
        setPersonality("")
        setBirthday("")
        setSpecies("")
        setGender("")
        setHobby("")
        setCatchphrase("")
        setSaying("")
        setImage("")
        history.push("/villagers")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={e => setName(e.target.value)} type="text" name="name" id="name" value={name["name-USen"]} required/><br /><br />
                <label htmlFor="personality">Personality</label>
                <input onChange={e => setPersonality(e.target.value)} type="text" name="personality" id="personality" value={personality} required/><br /><br />
                <label htmlFor="birthday">Birthday</label>
                <input onChange={e => setBirthday(e.target.value)} type="text" name="birthday" id="birthday" value={birthday} required/><br /><br />
                <label htmlFor="species">Species</label>
                <input onChange={e => setSpecies(e.target.value)} type="text" name="species" id="species" value={species} required/><br /><br />
                <label htmlFor="gender">Gender</label>
                <input onChange={e => setGender(e.target.value)} type="text" name="gender" id="gender" value={gender} required/><br /><br />
                <label htmlFor="hobby">Hobby</label>
                <input onChange={e => setHobby(e.target.value)} type="text" name="hobby" id="hobby" value={hobby} required/><br /><br />
                <label htmlFor="catchphrase">Catch-Phrase</label>
                <input onChange={e => setCatchphrase(e.target.value)} type="text" name="catchphrase" id="catch-phrase" value={catchphrase} required/><br /><br />
                <label htmlFor="saying">Saying</label>
                <input onChange={e => setSaying(e.target.value)} type="text" name="saying" id="saying" value={saying} required/><br /><br />
                <label htmlFor="image">Image</label>
                <input onChange={e => setImage(e.target.value)} type="text" name="image" id="image-uri" value={image} required/><br /><br />
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}
