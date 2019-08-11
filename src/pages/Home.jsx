import React from "react";
import PageList from "../components/PageList";
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag';
import { GooSpinner } from "react-spinners-kit";


function Home() {
  const {loading,data:{getPosts:posts}} = useQuery(FETCH_POSTS)
 

  return (
    <div>
         <div   style={{marginLeft:"50%",marginTop:60,marginBottom:30}}><GooSpinner
      size={30}
      color="#128DFF"
      loading={loading} /></div>
      {posts &&  <PageList data={posts} />}
    </div>
  );
}

export default Home;

const FETCH_POSTS=gql`
{
  getPosts{
    id
    body
    username
    comments{
      id
      body
      username
    }
    likes{
      id
      username
    }
    likeCount
    commentCount
  }
}

`;