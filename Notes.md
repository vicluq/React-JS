## Fetching Data

- Use **componentDidMount** to fetch, because it will fetch the moment the State component (container) loads

- **setState**, or other name if using hooks, to add the API content to state

- Can set interval to maybe 5/10 min to fetch updated data and setState again. React will render it again with the new data, because whenever State changes,the component is rendered again 

- Use **map** to render a component for each element in the data array!!