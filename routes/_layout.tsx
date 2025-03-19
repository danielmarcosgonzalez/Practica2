import { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) =>{
    const Component = props.Component;
    return(
        <div>
            <div class="LayoutContainer">
            <h1>Bienvenido a la Práctica 2: Diccionario de Inglés</h1>
            </div>
            <Component />
        </div>
    )
}
export default Layout;