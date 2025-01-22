
import React from 'react'

function UseImagePUrl(props) {
    
            const {imageurlp}=props;
    return (
        <div>



            {/* 2.public urls
            <img src='https://media.istockphoto.com/id/1911602365/photo/new-life-in-forest.jpg?s=2048x2048&w=is&k=20&c=SE54sxZqbXtITzcv2BIr81_tfWWiw2RZtZ9QriVgpnw=' alt='leaf' 
            
                    style={{width:'150px', height:'150px', alignItems:'center'}}></img> 

                 <img src={props.imageurl} alt='leaf'></img> */}
                
                <img src={imageurlp} alt='leaf'></img>  

        </div>
    )

}

export default UseImagePUrl
