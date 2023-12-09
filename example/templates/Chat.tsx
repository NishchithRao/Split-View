import {Avatar, Divider, List} from 'react-native-paper';

import React from 'react';
import {View} from 'react-native';

const ChatItemImage = () => {
  return <Avatar.Text label="NR" />;
};

const Chat = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <List.Section>
        <List.Section>
          <List.Item title="Nishchith" left={ChatItemImage} />
          <Divider />
          <List.Item title="Nishchith" left={ChatItemImage} />
          <Divider />
          <List.Item title="Nishchith" left={ChatItemImage} />
        </List.Section>
        <List.Section>
          <List.Item title="Nishchith" left={ChatItemImage} />
          <Divider />
          <List.Item title="Nishchith" left={ChatItemImage} />
          <Divider />
          <List.Item title="Nishchith" left={ChatItemImage} />
        </List.Section>
        <List.Section>
          <List.Item title="Nishchith" left={ChatItemImage} />
          <Divider />
          <List.Item title="Nishchith" left={ChatItemImage} />
          <Divider />
          <List.Item title="Nishchith" left={ChatItemImage} />
        </List.Section>
        <List.Section>
          <List.Item title="Nishchith" left={ChatItemImage} />
          <Divider />
          <List.Item title="Nishchith" left={ChatItemImage} />
          <Divider />
          <List.Item title="Nishchith" left={ChatItemImage} />
        </List.Section>
      </List.Section>
    </View>
  );
};

export default Chat;
