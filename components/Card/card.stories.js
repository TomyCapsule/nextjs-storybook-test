import Card from "./index";

export default {
  title: "My Cards",
};

const Template = (arguments_) => <Card {...arguments_} />;

export const GreenCard = Template.bind({});

GreenCard.args = {
  title: "Hello World",
  showSub: false,
  background: "yellow-600",
  imgUrl: "https://images.pexels.com/photos/50588/kuang-si-falls-waterfall-water-laos-50588.jpeg?cs=srgb&dl=pexels-pixabay-50588.jpg&fm=jpg",
  children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?",
};