import * as React from 'react';
import * as renderer from 'react-test-renderer';

import DecisionResultsStep from './DecisionResultsStep';

const testResults = {
    euTopic: ['test1', 'test2'],
    memberState: ['test1', 'test2']
  };

describe( 'Test DecisionResultsStep', () => {
    it( 'renders snapshot', () => {
        const tree = renderer.create(
            <DecisionResultsStep results={testResults} success={true} type="MS"/>
        ).toJSON();
        
        expect( tree ).toMatchSnapshot();
    } );
} );
