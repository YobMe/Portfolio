// Import images
import Image1 from '../images/ashewa11.jpg';
import Image2 from '../images/ashewa22.jpg';
import Image3 from '../images/ashewa33.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/epp1.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectDataAshewa = {
	ProjectHeader: {
		title: 'Project UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Ashewa Ecommerce Project UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Ashewa Ecommerce Project UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Ashewa Ecommerce Project UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Ashewa Technologies',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Ecomerce',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://ashewa.com/',
			},
			{
				id: 4,
				title: 'Phone',
				details: '+251 988321313',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'A team, that desire to build a technology transfer in the sphere of Education. Aspirational, want to have an influence on Ethiopia’s Educational system and leave a digital footprint.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'CSS',
					'JavaScript',
					'React Native',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Resolving Issues With Data Integration Between Mobile Apps and Web Services.',
			},
			{
				id: 2,
				details:
					'Ensuring Security Throughout Development Processes. ',
			},
			{
				id: 3,
				details:
					'In their survey, White Hat Security found that roughly 50% of applications in industries like manufacturing, public services, healthcare, retail, education, and utilities are vulnerable to a cyberattack because of one or more serious bugs in the code. And the consequences can be dire. Not only could hackers steal data from inside your app, but they could also infect your app with malicious software that later installs itself on your users’ phones. ',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/eyobadugna23',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/eyob_adugna',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			// {
			// 	id: 5,
			// 	name: 'Youtube',
			// 	icon: <FiYoutube />,
			// 	url: 'https://www.youtube.com/c/EyobStudio',
			// },
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
