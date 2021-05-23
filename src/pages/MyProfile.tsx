import React, { useEffect, useState } from "react";

import Profile from 'components/Profile/Profile';
import ProfileApi from "api/profile/profileApi";
import { IProfileView } from "api/profile/types";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

const MyProfile: React.FC = () => {
  const history = useHistory();
  const [profileData, setProfileData] = useState<IProfileView>();

  function fetchProfileData() {
    ProfileApi.getMe()
      .then(res => {
        setProfileData(res.data);
      })
      .catch(err => {
        toast('Oops... Something went wrong!')
        history.goBack();
      })
    }
    
  useEffect(() => {
    fetchProfileData()
  }, []);

  return (
    profileData ? (
      <Profile my={true} profileData={profileData}/>
    ) : (
      <StyledLoadingContainer>
        <CircularProgress />
        <h4>Loading...</h4>
      </StyledLoadingContainer>
    )
  );
};

export default MyProfile;

const StyledLoadingContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    display: block;
    margin: 20px;
  }
`;

