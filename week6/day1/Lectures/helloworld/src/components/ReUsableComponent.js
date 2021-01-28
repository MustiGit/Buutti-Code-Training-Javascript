
const ReUsableComponent = (props) => {

   if (props.number % 2 === 0) {
    return (
        <div>
        <p>{props.string}{props.number}</p>
        </div>
      )
   } else {
    return (
        <div>
        <p>{props.number}{props.string}</p>
        </div>
      )
   }
  }

  // Or this one: <p>{number % 2 === 0 ? number+string : string+number }</p>

export default ReUsableComponent;