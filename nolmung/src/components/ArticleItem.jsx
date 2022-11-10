import React, {useState} from "react";
import { Text, View, Image, StyleSheet,ScrollView,Dimensions, TouchableWithoutFeedback,TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal"

const ArticleItem = Props => {
    const Navigation = useNavigation()
    const userNickName = 'aJumoney__'
    const region = '서울특별시 강남구 역삼동'
    const windowWidth = Dimensions.get('window').width;
    const like = 200
    const comment = 5
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
          setModalVisible(!isModalVisible);
          console.log(isModalVisible)
      };
    const backdropOpacity = 0.3
    return (
        <>
                <View style={Styles.ArticleContainer}>
                    {/* Header Start */}
                    <View style={Styles.ArticleHeader}>
                        <View style={{flexDirection:'row',}}>
                            <Image 
                                source={require('../assets/icons/32.png')}
                                resizeMode="contain"
                                style={{
                                    width: 40,
                                    height: 40,
                                }}    
                            />
                            <View style={{marginLeft: 5,}}>
                                <Text style={Styles.Nickname}>{userNickName}</Text>
                                <Text style={Styles.region}>{region}</Text>
                            </View>
                        </View>
                        <TouchableWithoutFeedback onPress={toggleModal}>
                            <Image
                                source={require('../assets/icons/Group.png')}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </TouchableWithoutFeedback>

                        <Modal
                            isVisible={isModalVisible}
                            onBackdropPress={toggleModal}
                            backdropOpacity = {backdropOpacity}    
                        >
                            <View style={Styles.threeModal}>
                                <TouchableOpacity >
                                    <View style={Styles.ModalMenu}>
                                        <Text style={Styles.ModalMenuText}>삭제</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <View style={Styles.ModalMenu}>
                                        <Text style={Styles.ModalMenuText}>취소</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Modal>        



                    </View>
                    {/* Header End */}
                    {/* Image Start*/}
                    <ScrollView contentContainerStyle={Styles.ImageContainer} pagingEnabled={true} horizontal={true}>
                        <Image 
                            source={require('../assets/icons/image12.png')}
                            resizeMode="cover"
                            style={{
                                width: windowWidth,
                                
                            }}
                        />
                        <Image 
                            source={require('../assets/icons/Rectangle5962.png')}
                            resizeMode="cover"
                            style={{
                                width: windowWidth
                            }}
                        />
                    </ScrollView>
                    {/* Image End */}
                    <View style={Styles.likeAndComment}>
                        <Image 
                            source={require('../assets/icons/heart-regular-24.png')}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: '#ff772f',
                                marginRight: 10,
                            }}
                        />
                        <Image 
                            source={require('../assets/icons/message.png')}
                            style={{
                                width: 24,
                                height: 24,

                            }}
                        />
                    </View>
                    <TouchableWithoutFeedback TouchableWithoutFeedback onPress={()=>{Navigation.navigate('ArticleItemDetail')}}>
                        <View style={Styles.Contents}>
                            <Text style={{color:'#282828', marginBottom:5,}}>좋아요 {like}개</Text>
                            <Text style={{color:'#282828', fontSize: 16, lineHeight:21, textAlign:'left', marginBottom: 15,}}>
                                오늘은 날씨가 좋고 어쩌구 저쩌구 다음주 목요일은 점심이 로제떡볶이고 어쩌구저쩌구 멀캠 로제 떡볶이 정말 맛있어요~
                            </Text>
                            <Text style={{color:'#959595',}}>
                                댓글 {comment}개 모두 보기
                            </Text>
                            <Text style={{color:'#959595', marginTop: 5,}}>
                                2시간 전
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
        </>
    )
}

export default ArticleItem

const Styles = StyleSheet.create({
    ArticleContainer:{
        marginVertical: 5,
        backgroundColor:'#fff',
        // paddingHorizontal: 30,
        paddingTop: 7,
        paddingBottom: 10,
    },
    ArticleHeader: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: 30,
    },
    Nickname:{
        color:'#282828',
        fontSize: 18,
        fontWeight: '600'
    },
    region: {
        color: '#959595',
        fontSize: 12,
    },
    ImageContainer:{
        marginTop: 7,
    },
    likeAndComment: {
        paddingHorizontal:30,
        flexDirection:'row',
        marginTop: 7,
    },
    Contents:{
        marginTop: 5,
        paddingHorizontal: 30,
    },
    threeModal:{
        marginTop: 'auto',
        marginBottom: -20,
        marginHorizontal: -20,
        flex: 0.2,
        backgroundColor:'#fff',
        borderTopStartRadius:30,
        borderTopRightRadius:30,
        justifyContent:'space-evenly',
    },
    ModalMenuText:{
        color:'#282828',
    },
    ModalMenu: {
        paddingVertical: 5,
    },
    ModalMenuText: {
        color:'#282828', 
        textAlign:'center',
        fontSize: 16,
        fontWeight:'600',
    },
})