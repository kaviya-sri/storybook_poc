import MovieCard from "../components/MovieCard";

export default {
  title: "Components/MovieCard",
  component: MovieCard,
}

const Template = ({ ...args }) => (
  <MovieCard {...args}/>)
    

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: "row",
  spacing: 2,
  backgroundColor : "black",
}

export const Vertical = Template.bind({})
Vertical.args = {
  direction: "column",
  spacing: 2,
  backgroundColor : "red",
}

export const NoSpacing = Template.bind({})
NoSpacing.args = {
  direction: "row",
  spacing: 0,
  backgroundColor : "blue",
}

