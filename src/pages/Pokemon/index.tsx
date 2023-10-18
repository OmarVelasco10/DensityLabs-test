import { useEffect } from "react";
import { getPokemon } from "../../store/pokemons";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Aside } from "../../components/Aside";
import { Button, Main, MainContainer } from "./styled";
import { CardDetails } from "../../components/CardDetails";

const Component = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, pokemon } = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    if (name) {
      dispatch(getPokemon(name));
    }
  }, [name]);

  return (
    <MainContainer>
      <Aside />
      <Button className="btn btn-warning" onClick={() => navigate(-1)}>Go Back</Button>

      <Main>

        <CardDetails pokemon={pokemon}/>

      </Main>
    </MainContainer>
  );
};

export { Component as Pokemon };
export default Component;
