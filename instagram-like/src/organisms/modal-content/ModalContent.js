import React from 'react';
import Image from '../../atoms/image'
import UserInfo from '../../molecules/user-info';
import Icon from '../../atoms/icon';
import styled from 'styled-components';


const Content = styled.div`
  display         : -webkit-flex;
  flex-direction  : column;
`;

const Header = styled.header`
    border-bottom: 1px solid #efefef;
    height: 78px;
    margin-right: 0;
    padding: 20px 0;
    position: absolute;
    right: 24px;
    top: 0;
    width: 287px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
`;

const ContentDiv = styled.div`
    bottom: 0;
    box-sizing: border-box;
    padding-left: 24px;
    padding-right: 24px;
    position: absolute;
    right: 0;
    top: 78px;
    width: 335px;
    display: flex;
    flex-direction: column;
`;

const PostUserImage = styled.a`
    background-color: #fafafa;
    border-radius: 50%;
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    margin-right: 10px;
`;

const PostUserNameDiv = styled.div`
    align-items: flex-start;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
`;

const PostUserNameLink = styled.a`
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 5px;
    margin-left: -5px;
`;

const PostSpanButton = styled.span`
    flex-shrink: 0;
    margin-left: 20px;
    max-width: 140px;
`;

const PostButton = styled.button`
    -webkit-appearance: none;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    /*outra classe */
    background: #3897f0;
    border-color: #3897f0;
    color: #fff;
`;

const FooterContent = styled.section`
    border-top: 1px solid #efefef;
    color: #999;
    flex-shrink: 0;
    font-size: 14px;
    line-height: 18px;
    min-height: 56px;
    justify-content: center;
    padding: 16px 0;
    order: 2;
    flex-direction: row;
    align-items: center;
    align-self: center;
`;

const CommentsDiv = styled.div`
    margin: 0 -24px auto;
    order: 1;
    padding: 12px 24px;

    /*outra classe */
    flex-grow: 1;
    flex-shrink: 1;
    min-height: 0;
    overflow: auto;
`;

const CommentsTextarea = styled.textarea`
    background: 0 0;
    border: none;
    color: #262626;
    font-size: inherit;
    outline: none;
    padding: 0;
    resize: none;
    max-height: 80px;
`;



const ModalContent = (props) => {
    return (
        <div style={{backgroundColor: 'white',  display: '-webkit-flex', flexDirection  : 'row', position: 'relative'}}>
          <div style={{minHeight: 425}}>
            <Image src={props.image} style={{width: '100%', height: '100%'}}/>
          </div>
          <Content style={{width: "335px"}}>
            <Header>
              <PostUserImage href="/jr/" style={{width: 40, height: 40}}>
                <img class="_a012k" src="https://instagram.ffor13-1.fna.fbcdn.net/t51.2885-19/s150x150/11950515_1717067785191418_644890240_a.jpg" />
              </PostUserImage>
              <PostUserNameDiv>
                <PostUserNameLink>lenita.c</PostUserNameLink>
              </PostUserNameDiv>
              <span>
                <button>Following</button>
              </span>
            </Header>
            <ContentDiv>
                <CommentsDiv>
                  <ul>
                    <li>
                        <a href="">lenita.c</a>
                        <span>Donec quis viver fds ds fsra lorra lorra lorra lorra lorra lorra lorra lorra lorra lorra lorra lorem. Duis vitae sapigfd gs df gdf en elit. Aenean ultrices, nisi at volutpat hendrerit, justo leo imperdiet felis, ac euismod nisi libero sit amet arcu. Duis ac fringilla nisl. Ut tristique dui nec nunc tempor mattis. Cras eu justo tempor, viverra nulla in, convallis dolor. Donec egestas, urna id condimentum commodo, neque libero euismod eros, vel tincidunt lorem purus at urna. Proin commodo a lacus eu finibus. Sed sodales venenatis ipsum, quis suscipit ex. Etiam pulvinar, mauris sed sodales viverra, ipsum justo egestas urna, non eleifend arcu quam vel lacus. Proin vitae nibh ut nisi tempor elementum. Donec convallis nunc nec commodo laoreet.</span>
                    </li>
                  </ul>
                </CommentsDiv>
                <FooterContent>
                  <Icon name="heart-o" />
                  <CommentsTextarea placeholder="Add a comment..."></CommentsTextarea>
                  <Icon name="ellipsis-h" />
                </FooterContent>
            </ContentDiv>
          </Content>
        </div>
    );
    // return (
    //   <ContentDiv style={{maxWidth: "815px;"}}>
    //     <Article>
          
    //     </Article>
    //   </ContentDiv>
    // );
}

export default ModalContent;