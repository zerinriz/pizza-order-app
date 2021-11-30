const finalSum = (state = 0, action) => {
    switch (action.type) {
      case "ADD_FINALSUM":
        return  action.finalSum ;
  
      default:
        return state;
    }
  };
  
  export default finalSum;