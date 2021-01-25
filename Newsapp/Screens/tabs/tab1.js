import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/1/21/w1200X800/Sachin_Tendulkar_AFP.jpg',
                  }}
                />
              </Left>
              <Body>
                <Text>Sachin Tendulkar</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . . Its time to build a
                  difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/1/21/w1200X800/Sachin_Tendulkar_AFP.jpg',
                  }}
                />
              </Left>
              <Body>
                <Text>Sachin Tendulkar</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . . Its time to build a
                  difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/1/21/w1200X800/Sachin_Tendulkar_AFP.jpg',
                  }}
                />
              </Left>
              <Body>
                <Text>Sachin Tendulkar</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . . Its time to build a
                  difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
