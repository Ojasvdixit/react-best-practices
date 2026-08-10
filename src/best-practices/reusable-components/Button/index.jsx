import Text from "../Text";

const Size = {
  Medium: 1,
  Small: 2,
  Large: 3,
};

function Button({ label, onClick, size = "medium" }) {
  return (
    <button onClick={onClick}>
      <Text text={label} />
    </button>
  );
}

Button.Size = Size;

// Function JavaScript me object bhi hota hai.
// So tum function ke upar property attach kar sakte ho.

/** function greet() {}

 greet.message = "Hello";

 console.log(greet.message);

 */

export default Button;
