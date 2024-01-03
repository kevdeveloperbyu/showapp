import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackNavigationOptions, StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

const options: StackNavigationOptions = {
    headerShown: false,
    transitionSpec: {
        open: {
            animation: "spring", config: {
                stiffness: 1000,
            }
        },
        close: {
            animation: "spring", config: {
                stiffness: 1000,
            }
        }
    }
};

export type RootStackParamList = {
    AuthStack: undefined;
    HomeStack: undefined;
    Home: NavigatorScreenParams<HomeTabParamList>;
    PostDetails: { id: string };
    NotFound: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
    Popular: undefined;
    Latest: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<HomeTabParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}