import Items from "./Items/Items";

function List({data}: {data: string[]}){
    const mapItems = data.map(item => <Items data={item}/>)
    return(
       <div>
        {mapItems}
       </div> 
    )
}

export default List;