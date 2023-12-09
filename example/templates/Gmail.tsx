import {Avatar, Icon, List} from 'react-native-paper';

import React from 'react';
import {View} from 'react-native';

const Gmail = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <List.Section>
        <List.Item
          title="Inbox"
          right={props => <List.Icon size={24} {...props} icon="folder" />}
        />
        <List.Item
          title="Pied paper"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque eveniet laborum dolores nobis voluptates cumque quaerat eligendi, error harum!"
          left={() => <Avatar.Text size={24} label="H" />}
        />
        <List.Item
          title="Pied paper"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque eveniet laborum dolores nobis voluptates cumque quaerat eligendi, error harum!"
          left={() => <Avatar.Text size={24} label="H" />}
        />
        <List.Item
          title="Pied paper"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque eveniet laborum dolores nobis voluptates cumque quaerat eligendi, error harum!"
          left={() => <Avatar.Text size={24} label="H" />}
        />
        <List.Item
          title="Pied paper"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque eveniet laborum dolores nobis voluptates cumque quaerat eligendi, error harum!"
          left={() => <Avatar.Text size={24} label="H" />}
        />
        <List.Item
          title="Pied paper"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque eveniet laborum dolores nobis voluptates cumque quaerat eligendi, error harum!"
          left={() => <Avatar.Text size={24} label="H" />}
        />
        <List.Item
          title="Inbox"
          right={props => <List.Icon size={24} {...props} icon="folder" />}
        />
        <List.Item
          title="Pied paper"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque eveniet laborum dolores nobis voluptates cumque quaerat eligendi, error harum!"
          left={() => <Avatar.Text size={24} label="H" />}
        />
        <List.Item
          title="Pied paper"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque eveniet laborum dolores nobis voluptates cumque quaerat eligendi, error harum!"
          left={() => <Avatar.Text size={24} label="H" />}
        />
        <List.Item
          title="Pied paper"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque eveniet laborum dolores nobis voluptates cumque quaerat eligendi, error harum!"
          left={() => <Avatar.Text size={24} label="H" />}
        />
        <List.Item
          title="Pied paper"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque eveniet laborum dolores nobis voluptates cumque quaerat eligendi, error harum!"
          left={() => <Avatar.Text size={24} label="H" />}
        />
        <List.Item
          title="Pied paper"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque eveniet laborum dolores nobis voluptates cumque quaerat eligendi, error harum!"
          left={() => <Avatar.Text size={24} label="H" />}
        />
      </List.Section>
    </View>
  );
};

export default Gmail;
