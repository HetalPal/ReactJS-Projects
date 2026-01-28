import './App.css';
import UserProfileCard from "./Component/UserProfileCard";




function App() {
  return (
      <div>
        <h1 className='heading'>Indian Cricket Team</h1>

        <div className='container'>
            <UserProfileCard
              name = "K L Rahul"
              profile = "https://i.pinimg.com/736x/7f/b5/39/7fb539d2adeab84a902eff4908fd7564.jpg"
              role = "Wiket-keeper, Right-hand-Batsman"
              from = "Manglore, Banglore"
              best = "ODI- 112, T20I- 110, Test- 199"
              strikeRate = "ODIs: 90.44, T20Is: 139.12, Tests: 51.89"
            />

            <UserProfileCard
              name = "Virat Kohali"
              profile = "https://i.pinimg.com/1200x/b5/04/95/b504953b01235f463d014795e29c3da5.jpg"
              role = "Right-hand-Batsman"
              from = "Uttam-Nagar, Delhi"
              best = "ODI- 183, T20I- 122, Test- 254"
              strikeRate = "ODIs: 93.82, T20Is: 137, Tests: 55"
            />

            <UserProfileCard
              name = "Rohit Sharma"
              profile = "https://i.pinimg.com/1200x/a7/e6/17/a7e6179145629d4f03cd25bddf2802b3.jpg"
              role = "Right-hand-Batsman"
              from = "Bansod, Nagpur"
              best = "ODI- 264, T20I- 121, Test- 212"
              strikeRate = "ODIs: 92.75, T20Is: 274.41, Tests: 57.06"
            />

        </div>
      </div>
  )
}

export default App
