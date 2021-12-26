const Book = (props) => {
  const { img, title, author } = props;


  const clickHandler = (e) => {
    alert("You have succesfully purchased your NFT!!");
  };
 
 
  return (
    <>
      <article>
        <img src={img} alt="" />
        <h1
          onClick={() => {
            alert("h1 clicked!!");
          }}
        >
          {title}
        </h1>
        <h3>{author}</h3>
        <button type="button" onClick={clickHandler}>
          Buy NFT!
        </button>
       
      </article>
    </>
  );
};

export default Book;