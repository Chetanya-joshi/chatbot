import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from 'firebase/database';
import { Segment } from 'semantic-ui-react';

const firebaseConfig = {
  apiKey: "AIzaSyCUr8GHCEc9k6hhAZRNnMwMP1IG4OMETd4",
  authDomain: "chatbot-1c5ae.firebaseapp.com",
  databaseURL: "https://chatbot-1c5ae-default-rtdb.firebaseio.com",
  projectId: "chatbot-1c5ae",
  storageBucket: "chatbot-1c5ae.appspot.com",
  messagingSenderId: "164071944644",
  appId: "1:164071944644:web:6d81e0ad242c812db07491"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const databaseRef = ref(database, 'chatbot');

const Chat = () => {
  const handleEnd = ({ steps, values }) => {
    const chatData = {
      timestamp: Date.now(),
      steps: steps.map(({ id, message, value }) => ({ id, message, value })),
      values
    };

    push(databaseRef, chatData)
      .then(() => console.log('Data successfully pushed to Firebase'))
      .catch(error => console.error('Error pushing data to Firebase:', error));
  };

  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our website',
      trigger: 'Done',
      value: ''
    },
    {
      id: 'Done',
      message: 'Please enter your name!',
      trigger: 'waiting1',
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, kindly let us know with which service we can help you',
      trigger: 'issues',
    },
    {
      id: 'issues',
      options: [
        {
          value: 'Digital Marketing',
          label: 'Digital Marketing',
          trigger: 'Digital Marketing',
        },
        {
          value: 'Events',
          label: 'Events',
          trigger: 'Events',
        },
        {
          value: 'Public Relation',
          label: 'Public Relation',
          trigger: 'Public Relation',
        },
        {
          value: 'Production',
          label: 'Production',
          trigger: 'Production',
        },
        {
          value: 'Web Development',
          label: 'Web Development',
          trigger: 'Web Development',
        },
        {
          value: 'MICE',
          label: 'MICE',
          trigger: 'MICE',
        },
        {
          value: 'Influencer Marketing',
          label: 'Influencer Marketing',
          trigger: 'Influencer Marketing',
        },
      ],
    },
    {
      id: 'Digital Marketing',
      message: 'Thanks for your interest. Our team will get in touch with you.',
      end: true,
    },
    {
      id: 'Events',
      message: 'Thanks for your interest. Our team will get in touch with you. Have a look at our past projects',
      end: true,
    },
    {
      id: 'Public Relation',
      message: 'Thanks for your interest. Our team will get in touch with you. Have a look at our past projects',
      end: true,
    },
    {
      id: 'Production',
      message: 'Thanks for your interest. Our team will get in touch with you. Have a look at our past projects',
      end: true,
    },
    {
      id: 'Web Development',
      message: 'Thanks for your interest. Our team will get in touch with you. Have a look at our past projects',
      end: true,
    },
    {
      id: 'MICE',
      message: 'Thanks for your interest. Our team will get in touch with you. Have a look at our past projects',
      end: true,
    },
    {
      id: 'Influencer Marketing',
      message
: 'Thanks for your interest. Our team will get in touch with you.Have a look at our past projects',
      end: true,
    },
  ];

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
      <Segment floated="right">
        <ChatBot steps={steps} handleEnd={handleEnd} />
      </Segment>
    </div>
  );
};
;

export default React.memo(Chat);
