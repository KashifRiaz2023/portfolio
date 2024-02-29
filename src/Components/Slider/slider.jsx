import ImageSlider from "./ImageSlider";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
const App = () => {
  const slides = [
    {
      url: "https://i.pinimg.com/736x/ac/7e/68/ac7e68426314847472e3ecb77cf46867.jpg",
      title: "boat",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0070/7032/files/Nelsson_Mandela.png?v=1600448850",
      title: "forest",
    },
  ];
  const containerStyles = {
    width: "1500px",
    height: "900px",
    paddingBottom: "-500px",
    paddingTop: "100px",
    marginLeft: "10px",
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;