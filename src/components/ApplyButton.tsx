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
            <h1>Applications open (SOME DATE)!</h1>
        </AB>
    );
};

export default ApplyButton