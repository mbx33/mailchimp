import { useState } from 'react';
import styled from 'styled-components';
import '/signup/Signup.styled.js';

const SimpleForm = ({ status, message, onValidated }) => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(null);

		if (!email) {
			setError('Please enter a valid email');
			setTimeout(() => setError(null), 3000);
			return;
		}

		const isFormValidated = onValidated({ EMAIL: email });
		setEmail('');
		return email && email.indexOf('@') > -1 && isFormValidated;
	};

	return (
		<Wrapper>
			<form className="form" onSubmit={handleSubmit}>
				<input
					type="text"
					value={email}
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button>Send Me Sweet Sunshine</button>
				{status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
				{status === 'error' && (
					<div
						style={{
							color: 'red',
							backgroundColor: 'rgba(22, 22, 22, 0.75)',
							borderRadius: '1.3rem',
							textAlign: 'center',
							width: '45%',
						}}
						dangerouslySetInnerHTML={{ __html: message }}
					/>
				)}
				<p>{error}</p>
				{status === 'success' && (
					<div style={{ color: 'green' }}>Subscribed !</div>
				)}
			</form>
		</Wrapper>
	);
};

export default SimpleForm;

const Wrapper = styled.div`
	p {
		color: red;
	}
`;
