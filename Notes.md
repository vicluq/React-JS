## Fetching Data

- Use **componentDidMount** to fetch, because it will fetch the moment the State component (container) loads

- **setState**, or other name if using hooks, to add the API content to state

- Can set interval to maybe 5/10 min to fetch updated data and setState again. React will render it again with the new data, because whenever State changes,the component is rendered again

- Use **map** to render a component for each element in the data array!!

<br>
<hr>

## Async state updates

- It can be async, especially when using fetch, so instead of passing the plain object, **pass a function to setState** and React will pass the previous state as an argument. This is especially usefull with useState hook

```
this.seState( previousState => {
    return {...previousState, upadatedData}
})
```

<br>
<hr>

## APIs with multiple page

- Make use of conditional render. Store each page data inside a diferent variable inside state and store a **'page' variable inside state** and create a **"counter"** that increments and decrements the value of **this.state.page**. Remember: use **setState** to do all of it

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
