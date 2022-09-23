import styled from 'styled-components';

export const MainContainer = styled.div`
	position: relative;
	margin-top: 22rem;
`;

export const QuoteBox = styled.div`
	font-size: 2.7rem;
	padding: 3rem;
	width: 75rem;
	position: absolute;
	right: 2rem;
	top: -16rem;
	border: 1px solid #2961f3;
	border-radius: 7rem;
	background-color: #fff;
	box-shadow: 0.5rem 0.5rem 1rem #222;
`;

export const SignupContainer = styled.div`
	background-image: linear-gradient(
			rgba(11, 148, 246, 0.311),
			rgba(11, 148, 246, 0.411)
		),
		linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
		url('/client/assets/rrapril-21-45.jpg');
	/* background-image: url(''), linear-gradient(#0b94f6, #222); */
	background-repeat: no-repeat;
	background-size: cover;
	max-width: 100%;
	height: 80vh;
`;

export const SignupForm = styled.div`
	padding: 16rem;
	font-size: 2rem;

	p {
		font-size: 1.3em;
	}

	form input {
		margin: 3rem 0;
		width: 60%;
		padding: 0.9rem;
		border-radius: 1rem;
		border: none;
	}

	form button {
		background-color: #0b94f6;
		margin-left: 1em;
		border-radius: 1rem;
		border: none;
		padding: 0.9rem 1.3rem;
		font-weight: 600;
		cursor: pointer;
		transition: 0.5s ease-in-out;

		:hover,
		:focus {
			background-color: rgba(0, 0, 80, 0.5);
			color: hsl(28, 65%, 61%);
			transition: all 0.4s ease-in-out;
		}
	}
`;
