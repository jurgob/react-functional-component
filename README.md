# react-functional-component

No React class component anymore!


## example

```js
<FunctionalComponent
  initialState={{initial: "state"}}
  componentDidMount={ ({setState}) =>  {
    setState({componentDidMount: "componentDidMount"})
  }}
>
  {({setState, state}) => {
    return (
      <div>
        Be Functional, Be Lazy: {state && JSON.stringify(state)} <br />
        <a onClick={() => {
          !state.onClick
            ? setState({onClick:"onClick"})
            : setState((state) => {
                delete state["onClick"]
                return state
              }) }}
        >Click here!</a>
      </div>
    )
  }}

</FunctionalComponent>
```
