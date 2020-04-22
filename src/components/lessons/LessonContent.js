const lessonContent = [
  {
    id: 0,
    title: "Wikipedia - Korean Language - 1",
    content: "The Korean language (South Korean: 한국어/韓國語 hanguk-eo; North Korean: 조선말/朝鮮말 chosŏn-mal) is an East Asian language spoken by about 77 million people. It is a member of the Koreanic language family and is the official and national language of both Koreas: North Korea and South Korea, with different standardized official forms used in each country. It is a recognised minority language in the Yanbian Korean Autonomous Prefecture and Changbai Korean Autonomous County of Jilin province, China. It is also spoken in parts of Sakhalin, Russia, and Central Asia.",

    quiz : [{ id: 0,
              question: 'The Korean Language is spoken by how many people?',
              choices: ['97 million', '77 million', '47 million'],
              answer: '77 million'
            },{
              id: 1,
              question: 'The Korean Language is the official language of ',
              choices: ['North Korea', 'South Korea', 'Both Koreas'],
              answer: 'Both Koreas'
            }
          ]
  },

  {
    id: 1,
    title: 'Wikipedia - Korean Language - 2',
    content: "Historical and modern linguists classify Korean as a language isolate;however, it does have a few extinct relatives, which together with Korean itself and the Jeju language (spoken in the Jeju Province and considered somewhat distinct) form the Koreanic language family. The linguistic homeland of Korean is suggested to be somewhere in Manchuria.",

    quiz: [{id: 0,
            question: 'The Jeju Language is spoken in which Province?',
            choices: ['Jeju', 'Juju', 'Jeje'],
            answer: 'Jeju'
            },{
            id: 1,
            question: 'The linguistic homeland of Korean Language is suggested to be somewhere in ',
            choices: ['Churiaman', 'Ramen', 'Manchuria'],
            answer: 'Manchuria'
          }
        ]
  }
]
export default lessonContent;
