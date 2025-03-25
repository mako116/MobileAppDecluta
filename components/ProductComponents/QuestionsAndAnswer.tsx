import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import DotIcon from '@/assets/svg/DotIcon';
import SearchQuestionAndAnswers from './SearchQuestionAndAnswers';
import MessageQuestion from '@/assets/svg/MessageQuestion';
import Button from '../Button/button';
import AskQuestionModal from '../Modals/AskQuestionModal';
import FlagIcon from '@/assets/svg/FlagIcon';
import ArrowUpIcon from '@/assets/svg/ArrowUpIcon';
import ChatBubbleIcon from '@/assets/svg/ChatBubbleIcon';
import CheckIcon from '@/assets/svg/CheckIconn';

const QuestionsAndAnswer = () => {
    const [isQuestion, setIsQuestion] = useState(false)
    
    const toggleModals = () => {
    setIsQuestion(!isQuestion)
    }
  return (
    <View style={{ marginTop: 20 }} >
        <Text style={[ styles.setionTitleText ]} >Questions & answers</Text>
        <View style={[ styles.container ]} >

            <Text style={[ styles.subTitleText ]}>
                Welcome to DecluttaKing's Q&A!
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }} >
                <DotIcon /> 
                <Text style={[ styles.beforebuyingAndSecuritySubTitleText ]} >
                    Keep conversations courteous and on-topic
                </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }} >
                <DotIcon /> 
                <Text style={[ styles.beforebuyingAndSecuritySubTitleText ]} >
                    Don't share personal info (email, phone number, etc.)...
                    <Text style={[ styles.titleText ]} >Read more</Text>
                </Text>
                
            </View>
        </View>

        <SearchQuestionAndAnswers />

        <View style={{ marginVertical: 20 }} >
            <Button
                title="Ask a question"
                backgroundColor="#DEBC8E"
                borderWidth={0}
                onPress={toggleModals}
                icon={<MessageQuestion />}
            />
        </View>

        <View style={[ styles.container ]} >
            <View style={[ styles.row ]} >
                <Text style={[ styles.questionText ]}>
                    Q: Are there any other known faults
                    I need to know about this item before I proceed to secure it?
                </Text>
                <FlagIcon />
            </View>
            <Text style={[ styles.subTitleText ]}>
                Are there any other known faults I need to know about this item before i proceed to secure it? I need to know on time as I really want this item but I'm skeptical. Thanks...<Text style={[ styles.titleText ]} >Read more</Text>
            </Text>

            <Text>
                <Text style={[ styles.titleText ]} >Mathew C.</Text>
                 • May 20, 2024
            </Text>

            <View style={[ styles.answerContainer ]} >
                <View style={[ styles.row ]} >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: "flex-start",
                            gap: 5
                        }}
                    >
                        <Image source={require('../../assets/images/demoProfileImage.png')} style={{ height: 48, width: 48 }} />
                        <View>
                            <Text>Segun A.</Text>
                            <Text>May 20, 2024</Text>
                        </View>
                        <CheckIcon />
                        <Text style={[ styles.sellerText ]} >
                            Seller
                        </Text>
                    </View>
                    <FlagIcon />
                </View>
                <Text style={[ styles.subTitleText ]}>
                    Thank you for your question
                </Text>
                <Text style={[ styles.subTitleText ]}>
                    There's no other fault than what I already stated in the item details above. I'm certain you'll enjoy using this item as I am selling because I need cash to do other important stuff, if not, I'd not be parting way with it... <Text style={[ styles.titleText ]} >Read more</Text>
                </Text>
                <Text><Text style={[ styles.titleText ]} >Comfort O.</Text> • May 20, 2024</Text>
            </View>
            <View style={[ styles.row, {marginTop: 10} ]} >
                <View 
                    style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: 5,
                    }}
                >
                    <ChatBubbleIcon />
                    <Text style={{ color: '#DEBC8E' }} >
                        Comment (2)
                    </Text>
                </View>

                <View 
                    style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: 5,
                        
                    }}
                >
                    <Text style={{ color: '#7E7E7E' }}>
                        Helpful?
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: "center",
                            gap: 2,
                            borderWidth: 1,
                            borderRadius: 3,
                            paddingHorizontal: 2,
                            borderColor: "#7E7E7E"

                        }}
                    >
                        <ArrowUpIcon />
                        <Text
                            style={{ color: '#7E7E7E' }}
                        >
                            8
                        </Text>
                    </View>
                </View>
                
            </View>
        </View>

        <View style={[ styles.container ]} >
            <View style={[ styles.row ]} >
                <Text style={[ styles.questionText ]} >
                    Q: Are there any other known faults
                    I need to know about this item before I proceed to secure it?
                </Text>
                <FlagIcon />
            </View>
            <Text style={[ styles.subTitleText ]} >
                Are there any other known faults I need to know about this item before i proceed to secure it? I need to know on time as I really want this item but I'm skeptical. Thanks...<Text style={[ styles.titleText ]} >Read more</Text>
            </Text>

            <Text><Text style={[ styles.titleText ]} >Mathew C.</Text> • May 20, 2024</Text>
            <View style={[ styles.row, {marginTop: 10} ]} >
                <View 
                    style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: 5,
                    }}
                >
                    <ChatBubbleIcon />
                    <Text style={{ color: '#DEBC8E' }} >
                        Comment (2)
                    </Text>
                </View>

                <View 
                    style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: 5,
                        
                    }}
                >
                    <Text style={{ color: '#7E7E7E' }}>
                        Helpful?
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: "center",
                            gap: 2,
                            borderWidth: 1,
                            borderRadius: 3,
                            paddingHorizontal: 2,
                            borderColor: "#7E7E7E"

                        }}
                    >
                        <ArrowUpIcon />
                        <Text
                            style={{ color: '#7E7E7E' }}
                        >
                            8
                        </Text>
                    </View>
                </View>
                
            </View>
        </View>

        {isQuestion && 
        <AskQuestionModal
            isQuestion={isQuestion}
            toggleMod={toggleModals}
        />}
    </View>
  )
}

export default QuestionsAndAnswer;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        
    },
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 6,
        padding: 20,
        gap: 10,
        backgroundColor: 'white',
        marginBottom: 20
    },
    answerContainer: {
        flexDirection: 'column',
        borderRadius: 5,
        padding: 10,
        paddingVertical: 20,
        gap: 10,
        backgroundColor: '#FCF8F4'
    },
    questionText: {
        color: '#212121',
        fontFamily: 'Helvetica Neue',
        fontWeight: 700,
        fontSize: 16,
    },
    setionTitleText: {
        color: '#212121',
        fontFamily: 'Helvetica Neue',
        fontWeight: 700,
        fontSize: 18,
        marginBottom: 10,
    },
    titleText: {
        color: '#212121',
        fontFamily: 'FONTSPRING DEMO - Proxima Nova',
        fontWeight: 700,
        fontSize: 16,
    },
    subTitleText: {
        color: '#212121',
        fontFamily: 'Proxima Nova',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 23
    },
    beforebuyingAndSecuritySubTitleText: {
        fontSize: 16,
        fontWeight: 400,
        fontFamily: 'Proxima Nova',
        color: '#474747' 
    },
    sellerText: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: '#212121',
        backgroundColor: '#F5EADC',
        fontSize: 13,
        fontWeight: 400,
        fontFamily: 'Proxima Nova',
        borderRadius: 3,
    },
})