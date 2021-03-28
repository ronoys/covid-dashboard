import React, {useEffect, useState} from 'react'

function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=true&allowNull=true")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    

    return (
      <ul>

        
        
          <p>
            {items.active.toLocaleString()}
          </p>
        
      </ul>
    );
  }
}

export default function Test123() {
  
  return (
    <div>
      <MyComponent></MyComponent>
    </div>
  );
}
    