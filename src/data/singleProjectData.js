// Import images
import Image1 from '../images/exam11.jpg';
import Image2 from '../images/exam22.jpg';
import Image3 from '../images/exam33.jpg';
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

export const singleProjectData = {
	ProjectHeader: {
		title: 'Project UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Exam-Time Project UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Exam-Time Project UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Exam-Time Project UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Think Hub',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Educational Utilities',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://think-hubet.com/',
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
					'Understanding the Scope of the Project , It might look like a lot of things to consider and research but believe us, it will save you a lot of time in the long run Not only will this make it easier for you to decide if you should even pursue developing your mobile app, but it will also simplify communication between you and the developers. ',
			},
			{
				id: 2,
				details:
					'Coding for Multiple Platforms, Choosing between native and cross-platform code apps will also be a key decision to make. Native apps are faster, more stable, and support all in-built features of the phones, while cross-platform apps are easier and faster to build and can help you reach a wider audience. So which one should you pick for your mobile application development process? A clever way to find out would be to check whether your audience prefers one platform over another. ',
			},
			{
				id: 3,
				details:
					'Designing a Functional Interface, Take a look at some of the most popular apps today. What do all of them have in common? They all have a simple and straightforward user interface. ',
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
