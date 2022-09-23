// import background from '../../client/assets/rrapril-21-45.jpg';
import { MainContainer, QuoteBox, SignupContainer, SignupForm } from './Signup.styled';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import SimpleForm from '../SimpleForm';
import './Signup.styled';

function Signup() {
	// ! need to change to mailchimp url
	const postUrl = import.meta.env.VITE_APP_MAILCHIMP_URL;

	return (
		<MainContainer>
			<QuoteBox>
				<blockquote>
					“ You can fail at what you don’t want, so you might as well take a
					chance on doing what you love “<p>-Jim Carrey</p>
				</blockquote>
			</QuoteBox>
			<SignupContainer>
				<SignupForm>
					<h1>Let the sunshine in...</h1>
					<p>to your inbox with a free training download when you subscribe!</p>
					<MailchimpSubscribe
						url={postUrl}
						render={(props) => {
							const { subscribe, status, message } = props || {};
							return (
								<div>
									<SimpleForm
										status={status}
										message={message}
										onValidated={(formData) => subscribe(formData)}
									/>
								</div>
							);
						}}
					/>
					<p>We promise never to spam. Only high quality offerings here.</p>
				</SignupForm>
			</SignupContainer>
		</MainContainer>
	);
}

export default Signup;
