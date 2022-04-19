import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1650347325312-f2dea7f5a50e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=270&q=80",
    "https://images.unsplash.com/photo-1650347325312-f2dea7f5a50e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=270&q=80",
    "https://images.unsplash.com/photo-1650347325312-f2dea7f5a50e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=270&q=80",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div >
      <div style={{ left: 0 }} onClick={()=>handleArrow("left")}>
        <img src="https://images.unsplash.com/photo-1569041032556-6485fc04aff0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=87&q=80" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div c key={i}>
            <img src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div style={{ right: 0 }} onClick={()=>handleArrow("right")}>
        <img src="https://images.unsplash.com/photo-1569041032556-6485fc04aff0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=87&q=80" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;