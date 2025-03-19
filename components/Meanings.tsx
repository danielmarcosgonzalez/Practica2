import { FunctionComponent } from "preact/src/index.d.ts";

type MeaningsProps = {
    meanings:Array<{
        partOfSpeech:string;
        definitions:Array<{
            definition:string;
            example:string;
        }>
        synonyms:Array<string>;
        antonyms:Array<string>;
    }>
};

export const Meanings:FunctionComponent<MeaningsProps> = (props) =>{
    return(
        <div class="MeaningsContainer">
            <h4>Part of Speech: </h4>
            {props.meanings.map((e)=>(<p>{e.partOfSpeech}</p>))}
            <h4>Definitions: </h4>
            {props.meanings.map((e)=>(e.definitions.map((i)=>(<><p>Definition: {i.definition}</p><p>Example: {i.example}</p></>))))}
            <h4>Synonyms: </h4>
            {props.meanings.map((e)=>(e.synonyms.map((i)=>(<p>{i}</p>))))}
            <h4>Antonyms: </h4>
            {props.meanings.map((e)=>(e.antonyms.map((i)=>(<p>{i}</p>))))}
        </div>
    )
}