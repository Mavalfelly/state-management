import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ])
  const handleAddFighter = (fighter) => {
    if(money >= fighter.price){
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setTotalStrength(totalStrength + fighter.strength);
      setTotalAgility(totalAgility + fighter.agility);
      setZombieFighters(zombieFighters.filter(f => f.name !== fighter.name))
    }else{
      console.log("You dont have enough money")
    }
  }
  const handleRemoveFighter = (fighterToRemove) => {
    const newTeam = team.filter((member) => member !== fighterToRemove);
    setTeam(newTeam);
    setMoney(money + fighterToRemove.price); 
    setTotalStrength(totalStrength - fighterToRemove.strength);
    setTotalAgility(totalAgility - fighterToRemove.agility);
    setZombieFighters([...zombieFighters, fighterToRemove])
  };
  return (
    <>
    <div>
      <h1>Welcome to the fight</h1>
    </div>
    <div>
      <h3>You curently have {money} dollars to spend on fighters</h3>
      <h3>Your team has {totalStrength} total strength</h3>
      <h3>Your team has {totalAgility} total agility</h3>
      <h3>Your Team</h3>
      <div>
      {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <div className="fighter-container">
            {team.map((member, i) => (
              <div className="fighterInfo" key={i}>
                <img src={member.img} alt={member.name} />
                <ul>
                  <li>Name: {member.name}</li>
                  <li>Price: {member.price}</li>
                  <li>Strength Level: {member.strength}</li>
                  <li>Agility Level: {member.agility}</li>
                </ul>
                <button id="addFighter" onClick={() => handleRemoveFighter(member)}>Remove from Team</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <div>
      <h2>OPTIONS</h2>
      <div className="fighterContainer">
        {zombieFighters.map((fighter, i) =>(
          <div className="fighterInfo" key={i}>
            <img src={fighter.img} alt={fighter.name}/>
            <ul>
              <li>Name: {fighter.name}</li>
              <li>Price: {fighter.price}</li>
              <li>Strength Level: {fighter.strength}</li>
              <li>Agility Level: {fighter.agility}</li>
            </ul>
            <button id="addFighter" onClick={() => handleAddFighter(fighter)}>Add to Team</button>
          </div>
        ))}
      </div>  
    </div>
    <div>
      <h2></h2>
    </div>
    </>
  )
}

export default App
