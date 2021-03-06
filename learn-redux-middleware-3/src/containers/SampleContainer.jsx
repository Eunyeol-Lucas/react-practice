import React, { useEffect } from "react";
import Sample from "../components/Sample";
import { connect } from "react-redux";
import { getPost, getUsers } from "../modules/sample";

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  // 클래스 형태 컴포넌트였다면 componentDidMount
  const fn = async () => {
    try {
      await getPost(1);
      await getUsers(1);
    } catch (e) {
      console.log(e); // 에러 조회
    }
  };

  useEffect(() => {
    fn();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["sample/GET_USERS"],
  }),
  {
    getUsers,
    getPost,
  }
)(SampleContainer);
