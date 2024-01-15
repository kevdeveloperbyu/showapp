import { ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { inDevelopment } from '@/lib/inDevelopment';
import VerticalItemToggleCard from './vertical-item-toggle-card';
import HorizontalItemToggleCard from './horizontal-item-toggle-card';
import TwoColsVerticalItemToggleCard from './Twocols-vertical-item-toggle-card';

export type ItemToggleCardProps = {
    src: ImageSourcePropType;
    httpSrc?: string;
    title: string;
    description: string;
};

export enum ORIENTATION {
    HORIZONTAL = 'HORIZONTAL',
    VERTICAL = 'VERTICAL'
}

type Props = {
    title: string,
    subtitle: string,
    mode?: ORIENTATION | keyof ORIENTATION
    columns?: 1 | 2
    items: ItemToggleCardProps[]
}

const ToggleCard = ({ title, subtitle, mode = ORIENTATION.HORIZONTAL, columns = 2, items }: Props) => {
    const isHorizontalMode = mode === ORIENTATION.HORIZONTAL
    return (
        <List.Section>
            <View style={styles.headerSection}>
                <List.Subheader style={styles.titleSection}>{title}</List.Subheader>

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={inDevelopment}
                >
                    <List.Subheader
                        style={styles.subTitleSection}
                    >
                        {subtitle}
                    </List.Subheader>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {isHorizontalMode ?
                    items.map(({ src, title, description }, index) =>
                        <HorizontalItemToggleCard src={src} title={title} description={description} key={index} />
                    ) :
                    // needly 2 items for 1 column
                    columns === 1 || false ?
                        items.map(({ src, title, description }, index) =>
                            <VerticalItemToggleCard src={src} title={title} description={description} key={index} />
                        ) :
                        items.map(({ src, title, description }, index) => {
                            console.log("index", index, "res", index % 2 === 0)
                            const indexPlus = index + 1
                            if (index % 2 === 0 && items[indexPlus]) {
                                const { title, src, description } = items[index]
                                const { title: titleTwo, src: srcTwo, description: descriptionTwo } = items[index + 1]

                                return <TwoColsVerticalItemToggleCard src={src} srcTwo={srcTwo} title={title} titleTwo={titleTwo} description={description} descriptionTwo={descriptionTwo} key={indexPlus} />
                            }
                            else if (indexPlus === items.length && !items[indexPlus]) {
                                return <VerticalItemToggleCard src={src} title={title} description={description} key={title + indexPlus} />
                            }
                            return null
                        }
                        )
                }

            </ScrollView>
        </List.Section>
    )
}

export default ToggleCard

const styles = StyleSheet.create({
    headerSection: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titleSection: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    subTitleSection: {
        fontSize: 14,
        // fontWeight: 'bold',
        color: 'white',
        textDecorationLine: 'underline'
    },
});