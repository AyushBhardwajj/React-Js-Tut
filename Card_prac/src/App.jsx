import "./App.css";
import Card from "./components/Card";

function App() {
  let user = [
    {
      name: "Alice Johnson",
      age: 29,
      profession: "Software Engineer",
      city: "New York",
    },
    {
      name: "Bob Smith",
      age: 34,
      profession: "Graphic Designer",
      city: "San Francisco",
    },
    {
      name: "Charlie Brown",
      age: 41,
      profession: "Teacher",
      city: "Chicago",
    },
    {
      name: "Diana White",
      age: 27,
      profession: "Marketing Manager",
      city: "Los Angeles",
    },
    {
      name: "Evan Green",
      age: 38,
      profession: "Data Scientist",
      city: "Austin",
    },
  ];

  return (
    <div>
      <div className='p-10'>
        <Card user={user} />
      </div>
    </div>
  );
}

export default App;
