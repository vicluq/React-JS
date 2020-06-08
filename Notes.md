## Fetching Data

- Use **componentDidMount** to fetch, because it will fetch the moment the State component (container) loads

- create a function to fetch the data and use it on the lifeCycle methods, such as _update_ and _mount_

  - use **async / await** or **promisses** to update the state

- **setState**, or other name if using hooks, to add the API content to state

- Use **map** to render a component for each element in the data array!!

<br>
<hr>

## Async st

]ate updates

- It can be async, especially when using fetch, so instead of passing the plain object, **pass a function to setState** and React will pass the previous state as an argument. This is especially usefull with useState hook

```
this.seState( previousState => {
    return {...previousState, upadatedData}
})
```

<br>
<hr>

## APIs with multiple page

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

## Using Firebase

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
