import { Outlet } from "react-router-dom";
import FavoritosProvider from "@/contexts/Favoritos";
import Rodape from "@/components/Rodape";
import Cabecalho from "@/components/Cabecalho";
import Container from "@/components/Container";
import "./PaginaBase.module.css";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;
