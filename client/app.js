import React from 'react'

export default class CornyJokes extends React.Component {
  componentDidMount() {
    this.nextJoke()
  }

  nextJoke = () =>
    this.setState({
      joke: randomJoke(),
      answered: false,
    })

  answer = () =>
    this.setState({answered: true})

  render() {
    if (!this.state) { return null }

    const {joke, answered} = this.state
    return (
      <div onClick={answered ? this.nextJoke : this.answer}>
        <h1>{joke.q}</h1>
        {answered && <h2>{joke.a}</h2>}
        <cite>~xoxo, Kate</cite>
      </div>
    )
  }
}

function randomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)]
}

const jokes = `Q: Who won the skeleton beauty contest? 
A: No body
Q: What do skeletons say before they begin dining? 
A: Bone appetit !
Q: When does a skeleton laugh? 
A: When something tickles his funny bone.
Q: Why didn't the skeleton dance at the Halloween party? 
A: It had no body to dance with.
Q: What did the Arctic wolf ask in the restaurant?
A: Are these lemmings fresh off the tundra?
Q: What did the big furry hat say to the warm woolly scarf?
A: You hang around while I go on ahead.
Q: What's the difference between an iceberg and a clothes brush?
A: One crushes boats and the other brushes coats!
Q: Why aren't penguins as lucky as Arctic murres?
A: The poor old penguins can't go south for the winter. (they live in Antarctica)
Q: How do you keep from getting cold feet?
A: Don't go around BRRfooted!`
  .split('\n')
  .reduce((all, row, i) =>
    i % 2 === 0
    ? [...all, {q: row}]
    : [...all.slice(0, all.length - 1), Object.assign({a: row}, all[all.length - 1])],
    [])