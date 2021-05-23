import React, { useEffect, useState } from "react";

import Profile from 'components/Profile/Profile';
import ProfileApi from "api/profile/profileApi";
import { useHistory, useParams } from "react-router-dom";
import { IProfileView } from "api/profile/types";
import ProjectsApi from "api/projects/projectsApi";
import { IProjectsView } from "api/projects/types";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import { toast } from "react-toastify";

const UserProfile: React.FC = () => {
  const history = useHistory();
  const  { id } = useParams<{id: string}>();
  const [profileData, setProfileData] = useState<IProfileView>();
  const [userProjects, setUserProjects] = useState<IProjectsView[]>();


  function fetchProfileData() {
    ProfileApi.getById(id)
      .then(res => {
        setProfileData(res.data);
        fetchUsersProjects(id);
      })
      .catch(err => {
        toast.error('Server error. Try again later')
        history.goBack();
      })
  }
   
  function fetchUsersProjects(id: string) {
    ProjectsApi.getById(id)
      .then(res => {
        setUserProjects(res.data);
      })
      .catch(err => {
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

export default UserProfile;

// use as component, copy pasted from MyProfile.tsx
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