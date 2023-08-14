import Badge from 'react-bootstrap/Badge';


function Tags (props){
    return(
        <>
         <Badge pill bg="color">  
         {props.texto}

         
         </Badge>
        
        
        </>
    )


}

export default Tags;