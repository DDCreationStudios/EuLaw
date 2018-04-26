import * as React from 'react';
import { intersection as _intersection } from 'lodash';

import {
  StyledForm,
  StyledDecisionStepSuccess,
  StyledDecisionStepFail
} from './styles';
import { DecisionResultsPropsType, DecisionResultsStateType } from './types';

import { TextAnalyticsStateType } from '../TextAnalytics';
// import DecisionResultsStep from './DecisionResultsStep';

import MemberStates from '../../data/exampleData/memberStates';

class DecisionResults extends React.Component<
  DecisionResultsPropsType,
  DecisionResultsStateType
> {
  constructor(props: DecisionResultsPropsType) {
    super(props);
    // this.state = {

    // };
  }

  // handleInputChange = (event: React.FormEvent<EventTarget>): void => {
  //   const target = event.target as HTMLInputElement;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  // calculateResults = (results: TextAnalyticsStateType): JSX.Element => {
  //   console.error('calculated');
  //   if (results.places !== []) {
  //     const intersect: string[] = _intersection(
  //       MemberStates.map((str: string) => str.toLowerCase()),
  //       results.places
  //     );
  //     if (intersect.length > 1) {
  //       return (
  //         <label>
  //           <input
  //             name="isMemberState"
  //             type="checkbox"
  //             checked={true}
  //             disabled={true}
  //           />
  //           is a member state
  //         </label>
  //       );
  //     }
  //   }
  //   console.error('returning');
  //   return( <label>Is here a member state?</label>);
  // }

  renderMemberstate = (results: TextAnalyticsStateType): JSX.Element => {
    if (results.places !== []) {
      const intersect: string[] = _intersection(
        MemberStates.map((str: string) => str.toLowerCase()),
        results.places
      );
      if (intersect.length > 1) {
        return (
          <StyledDecisionStepSuccess>
            <label>Is a member state </label>
            <input
              name="isMemberState"
              type="checkbox"
              checked={true}
              disabled={true}
            />
          </StyledDecisionStepSuccess>
        );
      }
    }
    return (
      <StyledDecisionStepFail>
        <label>Is not a member state </label>
        <input
          name="isMemberState"
          type="checkbox"
          checked={false}
          disabled={true}
        />
      </StyledDecisionStepFail>
    );
  }

  render() {
    return (
      <StyledForm>
        <h2>Decision Results</h2>
        {/* <DecisionResultsStep results={this.props.results} /> */}
        <ul>{this.renderMemberstate(this.props.results)}</ul>
      </StyledForm>
    );
  }
}

export { DecisionResults };
