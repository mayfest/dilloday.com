'use client';
import styled from 'styled-components';

const AB = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const ApplyButton: React.FC = () => {
    return (
        <AB>
            <h1>Join MayFam!</h1>
            <h3>Applications open (SOME DATE)!</h3>
        </AB>
    );
};

export default ApplyButton