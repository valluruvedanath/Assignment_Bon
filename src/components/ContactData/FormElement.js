import React from 'react';
const FormElement = (props) => {
    switch(props.type){
        case "text" :
               return <input {...props}/>
        case "email" :
        return <input {...props}/>
        case "number" :
        return <input {...props}/>
        case "textarea" :
        return <input {...props}/>
       default: 
       return null  
    }
};
export default FormElement;