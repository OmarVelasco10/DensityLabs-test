import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getPokemon } from "../../store/pokemons";

import { useAppDispatch, useAppSelector } from "../../hooks";

import { Aside, CardDetails, Loading } from "../../components";
import { Button, Main, MainContainer } from "./styled";

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
      <Button className="btn btn-warning" onClick={() => navigate(-1)}>
        Go Back
      </Button>

      <Main>
        {isLoading || !pokemon ? (
          <Loading />
        ) : (
          <CardDetails pokemon={pokemon} />
        )}
      </Main>
    </MainContainer>
  );
};

export { Component as Pokemon };
export default Component;
