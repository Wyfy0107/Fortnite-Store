// import React from "react";
// import { connect } from "react-redux";
// import { useEffect, useState } from "react";

// function SearchProduct({ itemsArray, userInput }) {
//   // if (userInput) {
//   //   const regex = new RegExp(`${userInput}`);
//   //   console.log(itemsArray);
//   //   console.log(userInput);
//   //   let matchResult = itemsArray.map((val) => val.name.match(regex));
//   //   console.log(matchResult);
//   // }
//   const [input, setInput] = useState(userInput);
//   useEffect(() => {
//     console.log(userInput);
//   }, [userInput]);

//   return <div>{input}</div>;
// }

// const mapStateToProps = (state) => {
//   return {
//     itemsArray: state.itemsList,
//     userInput: state.userInput,
//   };
// };

// export default connect(mapStateToProps, {})(SearchProduct);
