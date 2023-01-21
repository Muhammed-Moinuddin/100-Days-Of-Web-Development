import Items from "../Item/item";

function List({data}: {data: string[]}){
    const collectdata = data.map(eachdata => <Items data={eachdata}/>)
    return(
        <div>
            {collectdata}
        </div>
    )
}
export default List;