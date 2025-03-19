import { FunctionComponent } from "preact/src/index.d.ts";

type PhoneticsProps ={
    phonetics:Array<{
        text:string;
    }>;
}
export const Phonetics:FunctionComponent<PhoneticsProps> = (props)=>{
    
    return(
        <div class="PhoneticsContainer">
            <h4>Phonetics: </h4>
            {props.phonetics.map((e)=>(<p>{e.text}</p>))}
        </div>
    )
}