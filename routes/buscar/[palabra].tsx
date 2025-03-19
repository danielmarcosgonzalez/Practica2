import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { Phonetics } from "../../components/Phonetics.tsx";
import { Meanings } from "../../components/Meanings.tsx";

type Data = Array<Word>;

type Word ={
    word:string;
    phonetic:string;
    phonetics:Array<{
        text:string;
    }>;
    meanings:Array<{
        partOfSpeech:string;
        definitions:Array<{
            definition:string;
            example:string;
        }>
        synonyms:Array<string>;
        antonyms:Array<string>;
    }>

}

export const handler: Handlers = {
    GET: async(_req: Request, ctx:FreshContext<unknown,Data>)=>{
        const {palabra} = ctx.params;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${palabra}`;
        try{
            const response = await Axios.get<Data>(url);
            return ctx.render(response.data);
        }catch(e){
            return new Response("Word not Found");
        }

    }
};

const Page = (props:PageProps<Data>)=>{
    return(
        <div class="PalabraContainer">
            {props.data.map((e)=>(<><h2>{e.word}</h2><h3>Phonetic: {e.phonetic}</h3><Phonetics phonetics={e.phonetics}/><Meanings meanings={e.meanings}/></>))}
            <a href="/formulario">Back</a>
        </div>
    )
}
export default Page;