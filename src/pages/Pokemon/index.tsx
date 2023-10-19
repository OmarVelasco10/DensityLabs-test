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
  const { isLoading } = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    if (name) {
      dispatch(getPokemon(name.toLowerCase()));
    }
  }, [name]);

  return (
    <MainContainer>
      <Aside />

      <Main>
        <Button className="btn btn-warning" onClick={() => navigate('/')}>
          Go Back
        </Button>
        {isLoading ? (
          <Loading />
        ) : (
          <CardDetails />
        )}
      </Main>
    </MainContainer>
  );
};

export { Component as Pokemon };
export default Component;
