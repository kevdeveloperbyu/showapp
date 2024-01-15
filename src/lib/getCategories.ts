import { category } from "../components/types/types";

export const getCategories = () => {
    return [
        {
            id: 1,
            name: 'Sports',
            description: 'Football, soccer, basketball and more.',
            icon: 'sports-soccer',
            iconType: 'MaterialIcons',
        },
        {
            id: 2,
            name: 'Music',
            description: 'Football, soccer, basketball and more.',
            icon: 'music',
            iconType: 'Feather',
        },
        {
            id: 3,
            name: 'Theather',
            description: 'Football, soccer, basketball and more.',
            icon: 'theater-masks',
            iconType: 'FontAwesome5',
        },
        {
            id: 4,
            name: 'Cinema',
            description: 'Football, soccer, basketball and more.',
            icon: 'movie',
            iconType: 'MaterialCommunityIcons',
        },
        {
            id: 5,
            name: 'Cars Events',
            description: 'Football, soccer, basketball and more.',
            icon: 'car',
            iconType: 'AntDesign',
        },
        {
            id: 6,
            name: 'Museums',
            description: 'Football, soccer, basketball and more.',
            icon: 'museum',
            iconType: 'MaterialIcons',
        },
        {
            id: 7,
            name: 'Festivals',
            description: 'Football, soccer, basketball and more.',
            icon: 'festival',
            iconType: 'MaterialIcons',
        },
        {
            id: 8,
            name: 'Talks',
            description: 'Football, soccer, basketball and more.',
            icon: 'microphone-alt',
            iconType: 'FontAwesome5',
        },
        {
            id: 9,
            name: 'Others',
            description: 'Football, soccer, basketball and more.',
            icon: 'park',
            iconType: 'MaterialIcons',
        },
    ] as category[]
} 