

const arrayData = {
    personinfo : {
        infoPage : [
            {title: 'aloha friends !',
            description: "Well, I think it's time for us to meet"
            }],
        listItems : [
          { id : 1,
                pathname: 'personal_slice',
                title: 'personal slice',
                description: ' So who am I ?! \n' +
                    ' I am a woman in love with art, colors, the world, and ideas.\n' +
                    ' I try to get the most out of life itself and always demand the impossible from myself.\n' +
                    ' In each project, I give my 100%, and I can’t sleep peacefully,\n' +
                    ' knowing that somewhere in the project there is a crooked line or inaccuracy.\n' +
                    ' I never dictate to the client how to do things right, but I also try to direct the person and will\n' +
                    ' not allow to produce a poor-quality design. My task is to realize even the most daring ideas.\n' +
                    ' Before starting the project, I try to get to know the person better in order to understand exactly\n' +
                    ' what he wants to see in the project’s outcome. Everything is important !\n' +
                    ' Starting with your favorite colors, cuisine to idols and interests. Each of my projects is alive.\n' +
                    'It  is a part of me and part of the client.'},
          { id : 2,
                pathname: 'social_skills',
                title: 'social skills and interests',
                title1: 'social skills',
                title2: 'interests',
                description1: ['Sociable','Fast learner','Stress resistant','Responsible','Proactive', 'Creative'],
                description2: ['Astronomy','Creating stained glass lamps','Graphic design','Web development','Sculpture']},
          { id : 3,
                pathname: 'education',
                title: 'education',
                description:  ['2012 : Moscow Art Academy',
                    '2012 – 2015 : Moscow State University Of Civil Engineering',
                    '2016  : "Bang Bang Education" - Online design school',
                    '2017  : Graphic Design and Branding - "Wayup" online school',
                    '2019  : Java Programming And Software Engineering  \n' +
                    'at "Tel-Ran" Computer Solutions\n' +
                    '(Special Program For Adaptation Of Software Developers Accordingly With Israel IT Technologies By Ministry Of  Absorption)',
                    '2020  : Advanced Javascript Course, React.js at "Wayup" online school']}
        ]
    },

    skills : {
        infoPage : [
            {title: 'my professional skills',
             description: "I always improve my web development skills"
            }],
        listItems : [
        { id : 1,
            pathname: 'languages',
            title: 'programming languages',
            description: ['JavaScript','( ES 5 , ES 6)','TypeScript','JAVA-core']},
        { id : 2,
            pathname: 'main_stack',
            title: 'main stack',
            description: ['HTML 5','CSS 3' , 'Bootstrap 4' , 'Bulma' ,'Ajax' , 'Node.js', 'JSON', 'JSX', 'XML']},
        { id : 3,
            pathname: 'libraries',
            title: 'libraries and Frameworks',
            description: ['jQuery' , 'React.js', 'Angular 2+']},
        { id : 4,
            pathname: 'builders',
            title: 'website builders',
            description: ['Webflow' , 'WordPress']},
        { id : 5,
            pathname: 'design',
            title: 'UI / UX Design',
            description: ['Illustrator' , 'Experience design' , 'Figma']},
        { id : 6,
            pathname: 'tools',
            title: 'Development  tools',
            description: ['Eclipse' ,'Visual Studio' , 'WebStorm' , 'Android Studio', 'Dreamweaver','Git' ,
            'Bitbucket' ,  'Source Tree' , 'Jira' , 'Confluence']}
        ]
    },
    contact : {
        infoPage: [
            {
                title: 'contacts',
                description: "To contact me, preferably use the mail"
            }],
        listItems: [
            {
                id: 1,
                title: 'phone number',
                description: '058 - 442 - 27 - 01',
                className : 'fa fa-phone'},
            {
                id: 2,
                title: 'email',
                description: 'alinahom@me.com',
                className : 'fa fa-envelope'},
            {
                id: 3,
                title: 'address',
                description: 'Israel , Netanya',
                className : 'fa fa-home'}
        ],
        links:[
            {
                id: 4,
                title: 'Curriculum vitae',
                className : 'fa fa-id-card-o',
                link:'https://drive.google.com/drive/folders/1w0SgxLpqLpFuymkbuVyS7wo3DKTXNZJv?usp=sharing'},
            {
                id: 5,
                title: 'portfolio',
                className : 'fa fa-behance',
                link:'https://www.behance.net/alinakhomenker'}
        ]
    }
};

export default arrayData