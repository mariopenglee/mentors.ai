import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, ImageBackground, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import philosopher from '../assets/mentors/marcus-aurelius.png';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

export default function PhilosopherCard() {
    const [isMentorSelected, setIsMentorSelected] = useState(false);
    const [showMoreDescription, setShowMoreDescription] = useState(false);

    function handleSelectMentor() {
        setIsMentorSelected(true);
    }

    function toggleDescription() {
        setShowMoreDescription(!showMoreDescription);
    }

    return (
        <View style={styles.cardBody}>
            <ImageBackground source={philosopher} style={styles.cardBackground}>
                <View style={styles.cardContent}>
                    <Text style={styles.mentorName}>Marcus Aurelius</Text>
                    <ScrollView
                        style={{height: screen_height * 0.4}}
                        showsVerticalScrollIndicator={true}
                        scrollEventThrottle={200}
                    >    
                    <View style={styles.spaceForFace} />
                    
                    <View style={styles.cardDescription}>
                        <Text style={styles.mentorSchool}>stoicism</Text>
                        <Text style={styles.mentorDescription}>
                            Marcus Aurelius was a Roman emperor from 161 to 180 and a Stoic philosopher. He was the last of the rulers known as the Five Good Emperors, and the last emperor of the Pax Romana, an age of relative peace and stability for the Roman Empire. He served as Roman consul in 140, 145, and 161.
                        </Text>
                        <TouchableOpacity onPress={toggleDescription}>
                            <Text style={styles.toggleDescription}>
                                {showMoreDescription ? 'Show less' : 'Learn more about stoicism...'}
                            </Text>
                        </TouchableOpacity>
                        {showMoreDescription && (
                            <Text style={styles.mentorDescription}>
                                Stoicism, a school of thought that flourished in Greek and Roman antiquity. It was one of the loftiest and most sublime philosophies in the record of Western civilization. In urging participation in human affairs, Stoics have always believed that the goal of all inquiry is to provide a mode of conduct characterized by tranquillity of mind and certainty of moral worth.

Nature and scope of Stoicism
For the early Stoic philosopher, as for all the post-Aristotelian schools, knowledge and its pursuit are no longer held to be ends in themselves. The Hellenistic Age was a time of transition, and the Stoic philosopher was perhaps its most influential representative. A new culture was in the making. The heritage of an earlier period, with Athens as its intellectual leader, was to continue, but to undergo many changes. If, as with Socrates, to know is to know oneself, rationality as the sole means by which something outside of the self might be achieved may be said to be the hallmark of Stoic belief. As a Hellenistic philosophy, Stoicism presented an ars vitae, a way of accommodation for people to whom the human condition no longer appeared as the mirror of a uniform, calm, and ordered cosmos. Reason alone could reveal the constancy of cosmic order and the originative source of unyielding value; thus, reason became the true model for human existence. To the Stoic, virtue is an inherent feature of the world, no less inexorable in relation to humans than are the laws of nature.

The Stoics believed that perception is the basis of true knowledge. In logic, their comprehensive presentation of the topic is derived from perception, yielding not only the judgment that knowledge is possible but also that certainty is possible, on the analogy of the incorrigibility of perceptual experience. To them, the world is composed of material things, with some few exceptions (e.g., meaning), and the irreducible element in all things is right reason, which pervades the world as divine fire. Things, such as material, or corporeal, bodies, are governed by this reason or fate, in which virtue is inherent. The world in its awesome entirety is so ruled as to exhibit a grandeur of orderly arrangement that can only serve as a standard for humankind in the regulation and ordering of life. Thus, the goal of humans is to live according to nature, in agreement with the world design.

Stoic moral theory is also based on the view that the world, as one great city, is a unity. Humans, as world citizens, have an obligation and loyalty to all things in that city. They must play an active role in world affairs, remembering that the world exemplifies virtue and right action. Thus, moral worth, duty, and justice are singularly Stoic emphases, together with a certain sternness of mind. For the moral person neither is merciful nor shows pity, because each suggests a deviation from duty and from the fated necessity that rules the world. Nonetheless—with its loftiness of spirit and its emphasis on the individual’s essential worth—the themes of universal brotherhood and the benevolence of divine nature make Stoicism one of the most appealing of philosophies.

Its chief competitors in antiquity were: (1) Epicureanism, with its doctrine of a life of withdrawal in contemplation and escape from worldly affairs and its belief that pleasure, as the absence of pain, is the goal of humans; (2) Skepticism, which rejected certain knowledge in favour of local beliefs and customs, in the expectation that those guides would provide the quietude and serenity that the dogmatic philosopher (e.g., the Stoic) could not hope to achieve; and (3) Christianity, with its hope of personal salvation provided by an appeal to faith as an immanent aid to human understanding and by the beneficent intervention of a merciful God.

Along with its rivals, Stoicism enabled the individual to better order his own life and to avoid the excesses of human nature that promote disquietude and anxiety. It was easily the most influential of the schools from the time of its founding through the first two centuries CE, and it continued to have a marked effect on later thought. During the late Roman and medieval periods, elements of Stoic moral theory were known and used in the formulation of Christian, Jewish, and Islamic theories of humanity and nature, of the state and society, and of law and sanctions—e.g., in the works of Cicero, Roman statesman and orator; in Lactantius, often called the “Christian Cicero”; and in Boethius, a scholar transitional to the Middle Ages. In the Renaissance, Stoic political and moral theory became more popular to theorists of natural law and political authority and of educational reform—e.g., in Hugo Grotius, a Dutch jurist and statesman, and in Philipp Melanchthon, a major Reformation scholar. In the 20th century, Stoicism became popular again for its insistence on the value of the individual and the place of value in a world of strife and uncertainty—e.g., in existentialism and in Neo-orthodox Protestant theology. Stoicism also played an important role in reassessments of the history of logic.


                            </Text>
                        )}
                    </View>
                    </ScrollView>
                    <TouchableOpacity style={styles.fancyButton} onPress={handleSelectMentor}>
                        <Text style={styles.cardText}>Accept as Mentor</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    toggleDescription: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    fancyButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
    },
    cardBody: {
        borderRadius: 10,
        width: screen_width * 0.9,
        height: screen_height * 0.75,
        backgroundColor: '#222',
        overflow: 'hidden',
    },
    cardContent: {
        top: 0,
        left: 0,
        borderRadius: 10,
        padding: 10,
        width: screen_width * 0.9,
        height: screen_height * 0.75,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    spaceForFace: {
        width: screen_width * 0.9,
        height: screen_height * 0.2,
        backgroundColor: 'transparent',
    },
    cardBackground: {
        flex: 1,
        resizeMode: 'cover',
        zIndex: 0,
    },
    cardText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',

    },

    cardDescription: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 1,
        gap: 10,
    },


    mentorName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    mentorSchool: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    mentorDescription: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'justify',
    },
});
