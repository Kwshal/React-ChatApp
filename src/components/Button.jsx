function Button({id, type, btnText, btnFunction}) {
  return (
    <button id={id} type={type} onClick={btnFunction}>
      <p className="btnText">{btnText}</p>
    </button>
  );
}

export default Button;