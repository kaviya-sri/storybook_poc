import Card from '../components/Card';
import '../style/Card.css';

export default {
  title: "Components/Card",
  component: Card,
  argTypes: { handleClick: { action: "Clicked" } },
}

const Template = ({ ...args }) => (
    <Card {...args}/>)
        
export const Normal = Template.bind({})
Normal.args={
    variant1 : 'movieTitle',
    variant2 : 'movie2Title',
    variant3 : 'year',
   
}
export const Small = Template.bind({})
Small.args={
    variant1 : 'movieTitle3',
    variant2 : 'movie2Title3',
    variant3 : 'year3',
    
}
export const Medium = Template.bind({})
Medium.args={
    variant1 : 'movieTitle2',
    variant2 : 'movie2Title2',
    variant3 : 'year2',
    
}
export const Large = Template.bind({})
Large.args={
    variant1 : 'movieTitle1',
    variant2 : 'movie2Title1',
    variant3 : 'year1',
}

