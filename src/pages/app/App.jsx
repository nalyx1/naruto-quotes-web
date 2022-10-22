import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { Button } from "../../components/button";
import { Quote } from "../../components/quote";
import { Speaker } from "../../components/speaker";
import { getQuote } from "../../services";
import narutoImg from "../../images/naruto.png";

export const App = () => {
  const isMounted = useRef(true);

  const [quoteState, setQuote] = useState(null);
  const [speakerState, setSpeaker] = useState(null);

  const onUpdate = async () => {
    const response = await getQuote();
    if (isMounted) {
      setQuote(response.quote);
      setSpeaker(response.speaker);
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <Quote>{quoteState}</Quote>
        <Speaker>{speakerState}</Speaker>
        <Button onUpdate={onUpdate}>Quote No Jutso</Button>
      </Wrapper>
      <ImgNaruto src={narutoImg} alt="imagem do naruto com uma kunai" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 50px;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgNaruto = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
