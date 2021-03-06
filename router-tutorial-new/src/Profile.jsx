import React from 'react';
import { withRouter } from 'react-router';
import WithRouterSample from './WithRouterSample';
const data = {
    velopert: {
        name: '남은열',
        description: '리액트를 좋아하는 개발자'
    },
    woon: {
        name: '래운',
        description: '데이터 분석을 좋아하는 개발자'
    }
}
const Profile = ({match}) => {
    const { username } = match.params
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
      <div>
        <h3>
          {username}({profile.name})
        </h3>
        <p>{profile.description}</p>
        <WithRouterSample />
      </div>
    );
};

export default Profile;