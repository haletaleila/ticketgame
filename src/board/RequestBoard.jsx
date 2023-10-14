import React from "react";
import {
  BoardHeader,
  BoardHeaderText,
  BoardLine,
  Column,
  GlobalStyle,
  ListContainer,
  ListItem,
  MainContainer,
} from "./RequestBoardStyle";
import FetchJson from "../common/component/json/FetchJson";

function RequestBoard() {
  // json data 가져오기 - 로컬
  const jsonUrl = `/assets/temp/Post.json`;
  const { data, loading, error } = FetchJson({ url: jsonUrl });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data.map((post) => post.id));
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <BoardHeader>
          <BoardHeaderText>요청 게시판</BoardHeaderText>
        </BoardHeader>
        <BoardLine></BoardLine>
        <ListContainer>
          {data.map((post) => (
            <ListItem key={post.id}>
              <Column>{post.id}</Column>
              <Column>{post.title}</Column>
              <Column>{post.author}</Column>
              <Column>{post.date}</Column>
              <Column>{post.likes}</Column>
            </ListItem>
          ))}
        </ListContainer>
      </MainContainer>
    </>
  );
}

export default RequestBoard;
