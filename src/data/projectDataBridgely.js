// Import images
import Image1 from '../images/br1.jpg';
import Image2 from '../images/br2.jpg';
import Image3 from '../images/br3.jpg';
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

export const projectDataBridgely = {
	ProjectHeader: {
		title: 'Project UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Bridgely Project UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Bridgely Project UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Bridgely Project UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'One Child',
				details: 'Nonprofit organization',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Aid Platform',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://bridgely.org/',
			},
			{
				id: 4,
				title: 'Mail',
				details: 'P.O. Box 62600',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'21st century international nonprofits and mission-engaged churches will grow by mobilizing, connecting and empowering their communities. We’re building the platform to make that possible.',
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
					'Maintaining Code Quality Over Time, As you keep adding new features or updates to your application, the amount of data on it grows, and you might find it getting tough to keep the code clean and free of errors. But leaving it “as it is” is out of the question – everything, from your app’s compatibility to its security and performance, depends on its codebase. ',
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
