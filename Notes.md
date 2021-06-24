# Guideline

- <a href='#fetching-data'>Fetching Data</a> <br>
- <a href='#async-state'>Async State</a> <br>
- <a href='#multiple-page-api'>Multiple Page API</a> <br>
- <a href='#firebase'>Using Firebase</a> <br>
- <a href='#recoil'>Recoil.js</a> <br>
  - <a href='#recoil-selectors'>Recoil.js - Selectors</a> <br>

<hr>

<h2 id='fetching-data'>Fetching Data</h2>

- Use **componentDidMount** to fetch, because it will fetch the moment the State component (container) loads

- create a function to fetch the data and use it on the lifeCycle methods, such as _update_ and _mount_

  - use **async / await** or **promisses** to update the state

- **setState**, or other name if using hooks, to add the API content to state

- Use **map** to render a component for each element in the data array!!

<br>
<hr>

<h2 id='async-state'>Async State</h2>

]ate updates

- It can be async, especially when using fetch, so instead of passing the plain object, **pass a function to setState** and React will pass the previous state as an argument. This is especially usefull with useState hook

```
this.seState( previousState => {
    return {...previousState, upadatedData}
})
```

<br>
<hr>

<h2 id='multiple-page-api'>Multiple Page API</h2>

- Make use of conditional render. Store each page data inside a diferent variable inside state and store a **'page' variable inside state** and create a **"counter"** that increments and decrements the value of **this.state.page**. Remember: use **setState** to do all of it. Call the fetch function and pass the page as a parameter

- Outside of the return, **assign each page content to a variable** and **set the condition for the page counter value** to be x and render the content inside that x page

- Ou, eu poderia passar a **página na query da URL, passando como parametro a page**, ao clicar o botão (chamará a função que faz o fetch) e ele vai dar um refetch sempre que trocar a pág com o seu conteúdo

```
sate = {
    page1: [...],
    page2: [...],
    page3: [...],
    totalPages: 3, //only to set a boundry to make sure that the counter only goes that far
    pageCounter: 1,
}
```

<hr>

<h2 id='firebase'>Using Firebase</h2>

> Firebase is a google provided database client.

- Selecionar a RealTimeDatabase
- Como não vou criar auth, deixo pública para eu poder usar
- Para criar nós eu devo criar um _endpoint com o nome do nó_
- Eu **devo por o '.json'** pois o Firebase pede esse endpoint

```
axios.post(url + '/movies.json', {})

// na db
{
  "movies": {
    "movie1": {},
    "movie2": {}
  }
}
```

<h2 id='recois'>Recoil.js</h2>

### A React Official State Manager, powered by Facebook

- In a Separate file create your recoil state
- To start using recoil states, you must evolve your App with the </RecoilRoot/> H.O.C
- To create a recoil state you must use the **atom()** function from recoil
  > an **atom** is a particle of state. Basically: a state. you can have multiple atoms which are differened by a **'key'**
- We must export the constant where the atom/state was created

```
import { atom } from 'recoil'

const myState = atom({
  key: "uniqueKey",
  default: {}
})

function App () {
  const [ stateRecoil, setStateRecoil ] = useRecoilState(mystate)

  return (
    <RecoilRoot>
      <div className='App'>
         ....
      </div>
    </RecoilRoot>
  );
}
```

- The default state will be the initial value
- To read/use this state in a component, we must use the **useRecoilState(_mystate_)** function

  > useRecoilState() works exactly like useState({}) hook. The difference is that is receives the constant that holds the recoil state

- I can read the recoil state anywhere and set it anywhere in my App.
- Every **component that reads the Recoil State will suffer re-render** when there are changes to it

<h4 id='recoil-selectors'>Using Selectors</h4>

> Selectors are a piece of state that relie on an atom state information, hus meaning that they have their value changed if an atom's state changes, which the selector 'depends' on, the selector will also change

- They are used to read and return information based on an atom
- By default they should always have the **get method** and a **key**
- the **get** method must **return** the **selector state value**

```
import { atom, selector } from 'recoil'

const namesState = atom({
  key: "namesState",
  default: {names: ['victoria', 'carlos', 'victor', 'joao']}
})

const filterForSelector = atom({
  key: 'filterForSelector',
  default: 'all'
})

const filteredNames = selector({
  key: 'filteredNames',
  get: ({get}) => {

    const filter = get(filterForSelector)

    if(filter !== 'all' && (filter >= 'a' && filter <= 'z')) {
      return get(namesState).filter(name => name[0] === (filter.toLowerCase() || filter.toUpperCase()))
    }
    else {
      return get(namesState)
    }
  }
})

// Selectors are also states and should be read and written using the same hooks as the atom state, but depending on the type of the selector, it should be used with a specif hook (read-only, read&write)
```

<iframe
  src="https://carbon.now.sh/embed/"
  style="transform:scale(0.7); width:1024px; height:473px; border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

- If you want to create a _writable Selector_, you must also set the **set method**. This type of selector will be able to give new values to atoms

- Creating a filter state to set the filter in a component is a very good method to filter elements from state
  - Use the filter value as a state for the component, and use the value of the selector (filtered state) as a second state
  - The selector will have it's value updated if the filter is set to other
