import AccordionItem from "./accordionitem";

const Accordion=(data)=>{
    console.log("Accordion log:",data);
    
    return (
      <>
        <div className="accordion">
          {data.data.map((el, i) => (
            <AccordionItem
              title={el.title}
              text={el.text}
              num={i}
              key={el.title}
            />
          ))}
        </div>
      </>
    );
}

export default Accordion