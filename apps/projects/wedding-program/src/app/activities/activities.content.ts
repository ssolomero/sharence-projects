//activity
//content items
  // text
  // img

export const ACTIVITIES = [
  {
    activityNo: 'One',
    name: 'photobooth',
    content: [
      {
        type: 'text',
        text: "check out the photobooth for your chance to be atlanta's own. this one is for all the dogs.",
        classes: 'body',
        src: ''
      },
      {
        type: 'img',
        src: '../../assets/bball-draft.jpeg',
        classes: 'b-w-photo'
      },
      {
        type: 'text',
        text: 'or just be glam',
        classes: 'body'
      },
      {
        type: 'img',
        src: '../../assets/glam-booth.jpeg',
        classes: 'b-w-photo'
      }
    ]
  },
  {
    activityNo: 'Two',
    name: 'guestbook',
    content: [
      {
        type: 'text',
        text: 'take a polaroid, tape it to a page, and leave a note',
        classes: 'bold',
        src: ''
      },
      {
        type: 'text',
        text: 'you can find the guestbook at the welcome table',
        classes: 'description',
        src: ''
      }
    ]
  },
  {
    activityNo: 'Three',
    name: 'group photos',
    content: [
      {
        type: 'text',
        text: 'after the ceremony, we would like to take photos with our favorite people. please be aware for when your group is called:',
        classes: 'body',
        src: ''
      },
      {
        type: 'text',
        text: 'relatives, cibc family, cibc youths, ga tech, uga, emory, ga state, atx',
        classes: 'bold',
        src: ''
      },
      {
        type: 'text',
        text: "*our photographer will take the photos, so we don't need yours. unless, taken on android.",
        classes: 'description',
        src: ''
      }
    ]
  },
  {
    activityNo: 'Four',
    name: 'cornhole',
    content: [
      {
        type: 'text',
        text: 'for the non-dancers',
        classes: 'body',
        src: ''
      },
      {
        type: 'img',
        classes: 'b-w-photo',
        src: '../../assets/cornhole.gif'
      }
    ]
  },
  {
    activityNo: 'Five',
    name: 'money dance',
    content: [
      {
        type: 'text',
        text: 'pin money on the bride & groom and join the queue to dance with them',
        classes: 'body',
        src: ''
      },
      {
        type: 'img',
        classes: 'b-w-photo',
        src: '../../assets/money_dance.jpeg'
      }
    ]
  }
];