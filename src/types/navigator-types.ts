import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackNavigationOptions, StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { event } from '../components/types/types';

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
    Home: NavigatorScreenParams<HomeTabParams>;
    PostDetails: { id: string };
    NotFound: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>;

export type HomeTabParams = {
    Popular: undefined;
    eventsList: event[]
    Latest: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParams> =
    CompositeScreenProps<
        BottomTabScreenProps<HomeTabParams, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}