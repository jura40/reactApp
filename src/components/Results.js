
const Results = (props) => {

    const {reposs } = props;
    // reposs.data.slice(0 ,7)
    
    const listReposs = 

      reposs.length !== 0 ? (
        reposs.data.map((item) => 
        <li key = {item.id}>
            <a href={item.html_url}>
                {item.name}</a></li>)
        ): (
        <li>Ingen repository</li>
         );

    return (
        <ul>
             
            <li>
            {listReposs}
            
            </li>
        </ul>
    )
};
export default Results;