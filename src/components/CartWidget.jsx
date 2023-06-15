import cart from "../assets/cart.png";

const styles = {
    img:{
        height: "2rem",
        width:"auto"
    },
    span: {
        color:"skyblue",
        paddingLeft: 12,
    },
}

export const CartW = () => {
  return (
    <>
      <img src={cart} style={styles.img} alt="Carrito" /> 
      <span style={styles.span}>0</span>
    </>
  );
};