import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type FormProms = {
    ruta:string;
}

const Form:FunctionComponent<FormProms> = (props) =>{
    const [palabra, setPalabra] = useState("");

    const handleInputChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setPalabra(target.value);
    };

    return (
        <div class="FormContainer">
            <h3>Introduce una palabra para buscar</h3>
            <input type="text" value={palabra} onInput={handleInputChange}/>
            <a href={`${props.ruta}/${palabra}`}>Search</a>
        </div>
    );
}
export default Form;