import CreateProjectBackgorund from "components/Backgrounds/CreateProjectBackgorund";
import Step1 from "components/CreateProject/Step1";
import Step2 from "components/CreateProject/Step2";
import Step3 from "components/CreateProject/Step3";
import Step4 from "components/CreateProject/Step4";
import Step5 from "components/CreateProject/Step5";
import { IFifthStepInput, IFirstStepInput, IFourthStepInput, IInputData, ISecondStepInput, IThirdStepInput } from "components/CreateProject/types";
import ProjectCreateConfDialog from "components/Dialogs/ProjectCreateConfDialog";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";



const CreateProject: React.FC = () => {
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [data, setData] = useState<IInputData>();
  const [confDialog, setConfDialog] = useState(false);

  function addDataToState(data: IFirstStepInput | ISecondStepInput | IThirdStepInput | IFourthStepInput | IFifthStepInput) {
    setData(prev => {
      if (prev)
        return {...prev, ...data}
      else
        return {...data}
    })
  }

  function onStep1Submit(data: IFirstStepInput) {
    addDataToState(data)
    setStep(1);
  }

  function onStep2Submit(data: ISecondStepInput) {
    addDataToState(data);
    setStep(2);
  }

  function onStep3Submit(data: IThirdStepInput) {
    addDataToState(data);
    setStep(3);
  }

  function onStep4Submit(data: IFourthStepInput) {
    addDataToState(data);
    setStep(4);
  }
  function onStep5Submit(data: IFifthStepInput) {
    addDataToState(data);
    setConfDialog(true);
    toast.success('success');
  }

  function renderStepSwitch() {
    switch (step) {
      case 0:
        return <Step1 onSubmit={onStep1Submit}/>
      case 1:
        return <Step2 onSubmit={onStep2Submit}/>
      case 2:
        return <Step3 onSubmit={onStep3Submit}/>
      case 3:
        return <Step4 onSubmit={onStep4Submit}/>
      case 4:
        return <Step5 onSubmit={onStep5Submit}/>
      
      default:
        break;
    }
  }

  return (
    <CreateProjectBackgorund>
      <ProjectCreateConfDialog 
          isOpen={confDialog} 
          toogle={() => setConfDialog(!confDialog)} 
          data={data} 
        />
      <StyledCreateProject>
        <h2>
          Start creating
        </h2>
        <div className="segment">
          {renderStepSwitch()}
        </div>    
      </StyledCreateProject>
    </CreateProjectBackgorund>
  );
};

export default CreateProject;


const StyledCreateProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);

  h2 {
    margin-bottom: 30px;
    color: white;
  }

  .segment {
    background: white;
    width: 640px;
    padding: 50px 120px;
  }

  .form-item {
    width: 100%;
    margin-bottom: 20px;
    >div {
      width: 100%;
    }
  }

  .form-btn {
    display: flex;
    justify-content: center;
  }
`;
